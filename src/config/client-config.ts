/*
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export const DefaultConfiguration: ClientConfig = {

    locoBookingURL: 'booking-loco.kakao.com',
    locoBookingPort: 443,

    locoPEMPublicKey: `-----BEGIN PUBLIC KEY-----\nMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEApElgRBx+g7sniYFW7LE8ivrwXShKTRFV8lXNItMXbN5QSC8vJ/cTSOTS619Xv5Zx7xXJIk4EKxtWesEGbgZpEUP2xQ+IeH9oz0JxayEMvvD1nVNAWgpWE4pociEoArsK7qY3YwXb1CiDHo9hojLv7djbo3cwXvlyMh4TUrX2RjCZPlVJxk/LVjzcl9ohJLkl3eoSrf0AE4kQ9mk3+raEhq5Dv+IDxKYX+fIytUWKmrQJusjtre9oVUX5sBOYZ0dzez/XapusEhUWImmB6mciVXfRXQ8IK4IH6vfNyxMSOTfLEhRYN2SMLzplAYFiMV536tLS3VmG5GJRdkpDubqPeQIBAw==\n-----END PUBLIC KEY-----`,

    agent: 'win32',

    version: '3.1.4',
    appVersion: '3.1.4.2500',

    osVersion: '10.0',

    // 999: pc
    mccmnc: '999',

    language: 'ko',

}

export interface ClientConfig {

    agent: string;

    locoBookingURL: string;
    locoBookingPort: number;
    
    locoPEMPublicKey: string;

    version: string;
    appVersion: string;

    osVersion: string;
    
    mccmnc: string;

    language: string;

}