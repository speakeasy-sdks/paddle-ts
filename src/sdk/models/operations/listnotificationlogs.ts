/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListNotificationLogsRequest extends SpeakeasyBase {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Paddle ID of the notification entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notification_id" })
    notificationId: string;

    /**
     * Set how many entities are returned per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;
}

/**
 * OK
 */
export class ListNotificationLogsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.NotificationLog })
    @Expose({ name: "data" })
    @Type(() => shared.NotificationLog)
    data: shared.NotificationLog[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListNotificationLogsResponse extends SpeakeasyBase {
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
    object?: ListNotificationLogsResponseBody;
}
