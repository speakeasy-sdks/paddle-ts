/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListSubscriptionsRequest extends SpeakeasyBase {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Return entities related to the specified customer. Use a comma separated list to specify multiple customer IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
    customerId?: string;

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

    /**
     * Return entities related to the specified price. Use a comma separated list to specify multiple price IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_id" })
    priceId?: string;

    /**
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: shared.StatusSubscription;
}

/**
 * OK
 */
export class ListSubscriptions200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Subscription1 })
    @Expose({ name: "data" })
    @Type(() => shared.Subscription1)
    data: shared.Subscription1[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListSubscriptionsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    listSubscriptions200ApplicationJSONObject?: ListSubscriptions200ApplicationJSON;
}
