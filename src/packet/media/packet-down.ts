/*
 * Created on Tue Jun 09 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { MediaRequestBasePacket } from "./media-request-base-packet";
import { Long } from "bson";
import { DefaultConfiguration } from "../../config/client-config";
import { LocoBsonResponsePacket } from "../loco-bson-packet";

export class PacketDownReq extends MediaRequestBasePacket {

    constructor(
        public Key: string = '',
        public Offset: number = 0,
        public ChannelId: Long = Long.ZERO,
        public Rt: boolean = true,
        
        userId: Long = Long.ZERO,
        os: string = DefaultConfiguration.agent,
        version: string = DefaultConfiguration.version,
        networkType: number = 0,
        networkMccMnc: string = '999',
    ) {
        super(userId, os, version, networkType, networkMccMnc);
    }

    get PacketName() {
        return 'DOWN';
    }

    toBodyJson() {
        let obj: any = {
            'k': this.Key,
            'c': this.ChannelId,
            'o': this.Offset,
            'rt': this.Rt
        };

        return Object.assign(obj, super.toBodyJson());
    }

}

export class PacketDownRes extends LocoBsonResponsePacket {

    constructor(
        status: number,
        public Size: number = 0
    ) {
        super(status);
    }

    get PacketName() {
        return 'DOWN';
    }

    readBodyJson(rawData: any) {
        this.Size = rawData['s'];
    }

}