/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Represents an attempt to deliver a notification.
 */
export class NotificationLog extends SpeakeasyBase {
    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attempted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    attemptedAt?: Date;

    /**
     * Unique Paddle ID for this notification log, prefixed with `ntflog_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Response body sent by the responding server. Typically empty for success responses.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_body" })
    responseBody?: string;

    /**
     * HTTP code sent by the responding server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_code" })
    responseCode?: number;

    /**
     * Content-Type sent by the responding server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_content_type" })
    responseContentType?: string;
}
