/*
 * Created on Sun Aug 30 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { MediaRequestBasePacket } from "./media-request-base-packet";
import { Long } from "bson";
import { ChatType } from "../../talk/chat/chat-type";
import { LocoBsonResponsePacket } from "../loco-bson-packet";
import { JsonUtil } from "../../util/json-util";

export class PacketMultiPostReq extends MediaRequestBasePacket {

    constructor(
        public Key: string = '',
        public Size: Long = Long.ZERO,
        public Type: ChatType = ChatType.Unknown,

        userId: Long = Long.ZERO,
        os: string = '',
        version: string = '',
        networkType: number = 0,
        networkMccMnc: string = ''
    ) {
        super(userId, os, version, networkType, networkMccMnc);
    }

    get PacketName() {
        return 'MPOST';
    }

    toBodyJson() {
        return Object.assign({
            'k': this.Key,
            's': this.Size,
            't': this.Type
        }, super.toBodyJson());
    }

}

export class PacketMultiPostRes extends LocoBsonResponsePacket {

    constructor(
        status: number,
        public Offset: Long = Long.ZERO
    ) {
        super(status);
    }

    get PacketName() {
        return 'MPOST';
    }

    readBodyJson(rawData: any) {
        this.Offset = JsonUtil.readLong(rawData['o']);
    }

}