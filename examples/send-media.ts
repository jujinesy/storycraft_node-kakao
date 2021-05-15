/*
 * Created on Wed Feb 10 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

/*
 * This example sends a photo when user types the "!example" command.
 */

import { readFileSync } from 'fs';
import { KnownChatType, TalkClient } from 'node-kakao';

// Supply env variables or replace to value.
const DEVICE_UUID = process.env['deviceUUID'] as string;
const ACCESS_TOKEN = process.env['accessToken'] as string;
const REFRESH_TOKEN = process.env['refreshToken'] as string;

const CLIENT = new TalkClient();

CLIENT.on('chat', (data, channel) => {
  const sender = data.getSenderInfo(channel);
  if (!sender) return;

  if (data.text === '!example') {
    channel.sendMedia(KnownChatType.PHOTO, {
      name: 'nyancat.png',
      data: readFileSync('nyancat.png'),
      width: 100,
      height: 100,
      ext: 'png'
    });
  }
});

async function main() {
  const res = await CLIENT.login({
    deviceUUID: DEVICE_UUID,
    accessToken: ACCESS_TOKEN,
    refreshToken: REFRESH_TOKEN
  });
  if (!res.success) throw new Error(`Login failed with status: ${res.status}`);

  console.log('Login success');
}
main().then();