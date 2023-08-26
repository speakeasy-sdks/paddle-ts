/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetNotificationSettingRequest extends SpeakeasyBase {
    /**
     * Paddle ID of the notification setting entity (notification destination) to work with.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=notification_setting_id",
    })
    notificationSettingId: string;
}

/**
 * OK
 */
export class GetNotificationSetting200ApplicationJSON extends SpeakeasyBase {
    /**
     * Represents a notification destination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.NotificationSettingComplete)
    data: shared.NotificationSettingComplete;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class GetNotificationSettingResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    getNotificationSetting200ApplicationJSONObject?: GetNotificationSetting200ApplicationJSON;
}
