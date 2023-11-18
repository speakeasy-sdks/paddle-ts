/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateNotificationSettingRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    notificationSettingUpdate?: shared.NotificationSettingUpdate;

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
export class UpdateNotificationSettingResponseBody extends SpeakeasyBase {
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

export class UpdateNotificationSettingResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    object?: UpdateNotificationSettingResponseBody;
}
