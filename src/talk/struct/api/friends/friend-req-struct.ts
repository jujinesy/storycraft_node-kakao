/*
 * Created on Wed May 20 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { ApiStruct } from "../api-struct";
import { FriendStruct } from "./friend-struct";

export interface FriendReqStruct extends ApiStruct {

    friend: FriendStruct;

}