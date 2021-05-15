import { StructBase } from "../struct-base";
import { Long } from "bson";
import { OpenLinkType, OpenMemberType, OpenProfileType } from "../../open/open-link-type";
import { Converter, ObjectMapper } from "json-proxy-mapper";
import { BaseMemberStruct, BaseChatMemberStruct } from "../member-struct";
import { UserType } from "../../user/user-type";

/*
 * Created on Fri Nov 22 2019
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export interface CommonOpenMemberStruct {

    memberType: OpenMemberType;

    linkId?: Long;
    openToken: number;
    
}

export interface OpenKickedMemberStruct extends BaseMemberStruct {
    
    kickedChannelId: Long;
    dc: boolean;

}

export namespace OpenKickedMemberStruct {

    export const Mappings = {

        userId: 'userId',
        nickname: 'nickName',
        profileImageUrl: 'pi',
        kickedChannelId: 'c',
        dc: 'dc'

    }

    export const MAPPER = new ObjectMapper(Mappings);
    
}

export interface OpenMemberStruct extends BaseChatMemberStruct, CommonOpenMemberStruct {

}

export namespace OpenMemberStruct {

    export const Mappings = {

        userId: 'userId',
        nickname: 'nickName',
        profileImageUrl: 'pi',
        originalProfileImageUrl: 'opi',
        fullProfileImageUrl: 'fpi',
        openToken: 'opt',
        type: 'type',

        linkId: 'pli',
        memberType: 'mt'

    }

    export const MAPPER = new ObjectMapper(Mappings);
    
}

export interface OpenLinkMemberStruct extends OpenMemberStruct {

    profileType: OpenProfileType;

    linkId: Long;
    privilege: Long;

}

export namespace OpenLinkMemberStruct {

    export const Mappings = {

        userId: 'userId',
        nickname: 'nn',
        profileImageUrl: 'pi',
        originalProfileImageUrl: 'opi',
        fullProfileImageUrl: 'fpi',
        memberType: 'lmt',
        profileType: 'ptp',
        linkId: 'pli',
        openToken: 'opt',
        privilege: 'pv'

    }

    export const MAPPER = new ObjectMapper(Mappings);
    
}

export enum OpenLinkTagType {

    DESCRIPTION = 1,
    HASH_TAG = 2

}

export interface OpenLinkTag {

    type: OpenLinkTagType;
    content: string;

}

export namespace OpenLinkTag {

    export const Mappings = {

        type: 't',
        content: 'c'

    }

    export const MAPPER = new ObjectMapper(Mappings);

}

export interface OpenLinkTagList {

    tags: OpenLinkTag[];

}

export namespace OpenLinkTagList {

    export const Mappings = {

        tags: 'tags'

    }

    export const ConvertMap = {
        
        tags: new Converter.Array(OpenLinkTag.Mappings)

    }

    export const MAPPER = new ObjectMapper(Mappings);

}

export interface OpenLinkStruct extends StructBase {

    linkId: Long;
    openToken: number;

    linkName: string;
    linkURL: string;
    linkType: OpenLinkType;

    createdAt: number,

    maxUserLimit?: number;
    maxChannelLimit?: number;

    passcode?: string; // '' === passcode disabled
    canSearchLink: boolean;

    activated: boolean;
    pushAlert: true;

    description: string;

    linkCoverURL: string;
    privilege: Long;

    owner: OpenMemberStruct;

    tagList: { tags?: OpenLinkTag[] };

}

export namespace OpenLinkStruct {

    export const Mappings = {

        linkId: 'li',
        openToken: 'otk',

        linkName: 'ln',
        linkType: 'lt',
        linkURL: 'lu',
        linkCoverURL: 'liu',

        createdAt: 'ca',

        maxUserLimit: 'ml',
        maxChannelLimit: 'dcl',
        activated: 'ac',
        pushAlert: 'pa',

        passcode: 'pc',
        privilege: 'pv',
        owner: 'olu',
        description: 'desc',
        
        canSearchLink: 'sc',

        tagList: 'omt'

    }

    export const ConvertMap = {

        owner: new Converter.Object(OpenLinkMemberStruct.Mappings),
        tagList: new Converter.Object(OpenLinkTagList.Mappings, OpenLinkTagList.ConvertMap)

    }

    export const MAPPER = new ObjectMapper(Mappings, ConvertMap);
    
}

export enum LinkReactionType {

    NONE = 0,
    NORMAL = 1

}

export interface OpenLinkReactionInfo {

    reactionCount: number;
    reactionType: LinkReactionType;

}

export enum LinkPrivilegeMask {

    URL_SHARABLE = 2,
    REPORTABLE = 4,
    PROFILE_EDITABLE = 8,
    ANY_PROFILE_ALLOWED = 32,
    USE_PASS_CODE = 64,
    BLINDABLE = 128,
    NON_SPECIAL_LINK = 512,
    USE_BOT = 1024,

}