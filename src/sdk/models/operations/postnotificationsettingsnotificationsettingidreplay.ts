/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export class PostNotificationSettingsNotificationSettingIdReplayRequestBody extends SpeakeasyBase {
    /**
     * Only include entities that contain the given ID. Supports transaction, customer and subscription IDs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filter" })
    filter?: string;

    /**
     * Timestamp following the RFC 3339 standard
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    from: Date;

    /**
     * Timestamp following the RFC 3339 standard
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    to: Date;
}

export class PostNotificationSettingsNotificationSettingIdReplayRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: PostNotificationSettingsNotificationSettingIdReplayRequestBody;

    /**
     * Paddle ID of the notification setting entity (notification destination) to work with.
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=notification_setting_id",
    })
    notificationSettingId: string;
}

export class PostNotificationSettingsNotificationSettingIdReplayResponse extends SpeakeasyBase {
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
}
