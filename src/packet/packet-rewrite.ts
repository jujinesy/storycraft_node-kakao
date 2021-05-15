import { LocoBsonRequestPacket, LocoBsonResponsePacket } from "./loco-bson-packet";
import { Long } from "bson";
import { FeedType } from "../talk/feed/feed-type";
import { ChatType } from "../talk/chat/chat-type";

/*
 * Created on Sat Dec 14 2019
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export class PacketRewriteReq extends LocoBsonRequestPacket {

    constructor(
        public LinkId: Long = Long.ZERO,
        public ChannelId: Long = Long.ZERO,
        public LogId: Long = Long.ZERO,
        public Type: ChatType = ChatType.Text,
        public RewriteFeedType: FeedType = FeedType.OPENLINK_REWRITE_FEED,
        public Unknown1: string = '', //Chat Reporting?
        public Unknown2: string = '',
    ) {
        super();
    }
    
    get PacketName() {
        return 'REWRITE';
    }
    
    toBodyJson() {
        let obj: any = {
            'li': this.LinkId,
            'c': this.ChannelId,
            'logId': this.LogId,
            't': this.Type
        };

        if (this.Unknown1 !== '') {
            obj['rcli'] = this.Unknown1;
        }

        if (this.Unknown2 !== '') {
            obj['cat'] = this.Unknown2;
        }

        if (this.RewriteFeedType === FeedType.RICH_CONTENT) {
            obj['ft'] = this.RewriteFeedType;
        }

        return obj;
    }

}

export class PacketRewriteRes extends LocoBsonResponsePacket {
    
    get PacketName() {
        return 'REWRITE';
    }

    readBodyJson(body: any): void {
        
    }
}
