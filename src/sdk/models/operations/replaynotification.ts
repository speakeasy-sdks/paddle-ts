/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ReplayNotificationRequest extends SpeakeasyBase {
    /**
     * Paddle ID of the notification entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notification_id" })
    notificationId: string;
}

export class ReplayNotification202ApplicationJSONData extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this notification, prefixed with `ntf_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notification_id" })
    notificationId?: string;
}

/**
 * Accepted
 */
export class ReplayNotification202ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ReplayNotification202ApplicationJSONData)
    data?: ReplayNotification202ApplicationJSONData;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta?: shared.Meta;
}

export class ReplayNotificationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Accepted
     */
    @SpeakeasyMetadata()
    replayNotification202ApplicationJSONObject?: ReplayNotification202ApplicationJSON;
}
