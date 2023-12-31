/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListEventsRequest extends SpeakeasyBase {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
    orderBy?: string;

    /**
     * Set how many entities are returned per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;
}

/**
 * OK
 */
export class ListEventsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Event })
    @Expose({ name: "data" })
    @Type(() => shared.Event)
    data: shared.Event[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListEventsResponse extends SpeakeasyBase {
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
    object?: ListEventsResponseBody;
}
