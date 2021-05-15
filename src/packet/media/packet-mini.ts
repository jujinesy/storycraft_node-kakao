/*
 * Created on Tue Jun 09 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { MediaRequestBasePacket } from "./media-request-base-packet";
import { DefaultConfiguration } from "../../config/client-config";
import { Long } from "bson";
import { LocoBsonResponsePacket } from "../loco-bson-packet";

export class PacketMiniReq extends MediaRequestBasePacket {

    constructor(
        public Key: string = '',
        public Offset: number = 0,
        public ChannelId: Long = Long.ZERO,
        public Width: number = 0,
        public Height: number = 0,
        
        userId: Long = Long.ZERO,
        os: string = DefaultConfiguration.agent,
        version: string = DefaultConfiguration.version,
        networkType: number = 0,
        networkMccMnc: string = '999',
    ) {
        super(userId, os, version, networkType, networkMccMnc);
    }

    get PacketName() {
        return 'MINI';
    }

    toBodyJson() {
        let obj: any = {
            'k': this.Key,
            'c': this.ChannelId,
            'o': this.Offset,
            'w': this.Width,
            'h': this.Height
        };

        return Object.assign(obj, super.toBodyJson());
    }

}

export class PacketMiniRes extends LocoBsonResponsePacket {

    constructor(
        status: number,
        public Size: number = 0
    ) {
        super(status);
    }

    get PacketName() {
        return 'MINI';
    }

    readBodyJson(rawData: any) {
        this.Size = rawData['s'];
    }

}