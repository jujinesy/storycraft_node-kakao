/*
 * Created on Sun Jun 07 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { LocoBsonRequestPacket, LocoBsonResponsePacket } from "../loco-bson-packet";
import { Long } from "bson";
import { DefaultConfiguration } from "../../config/client-config";
import { ChatType } from "../../talk/chat/chat-type";
import { JsonUtil } from "../../util/json-util";
import { MediaRequestBasePacket } from "./media-request-base-packet";

export class PacketPostReq extends MediaRequestBasePacket {
    
    constructor(
        public Key: string = '',
        public Size: Long = Long.ZERO,
        public Name: string = '',
        public Width: number = 0,
        public Height: number = 0,

        public ChannelId: Long = Long.ZERO,
        public Type: ChatType = ChatType.Unknown,
        public MessageId: Long = Long.ZERO,
        public NoSeen: boolean = false,

        userId: Long = Long.ZERO,
        os: string = DefaultConfiguration.agent,
        version: string = DefaultConfiguration.version,
        networkType: number = 0,
        networkMccMnc: string = '999',
    ) {
        super(userId, os, version, networkType, networkMccMnc);
    }

    get PacketName() {
        return 'POST';
    }

    toBodyJson() {
        let obj: any = {
            'k': this.Key,
            's': this.Size,
            'f': this.Name,
            'w': this.Width,
            'h': this.Height,

            'c': this.ChannelId,
            't': this.Type,
            'mid': this.MessageId,
            'ns': this.NoSeen,
        };

        return Object.assign(obj, super.toBodyJson());
    }

}

export class PacketPostRes extends LocoBsonResponsePacket {

    constructor(
        status: number,
        public Offset: Long = Long.ZERO
    ) {
        super(status);
    }

    get PacketName() {
        return 'POST';
    }

    readBodyJson(rawData: any) {
        this.Offset = JsonUtil.readLong(rawData['o']);
    }

}