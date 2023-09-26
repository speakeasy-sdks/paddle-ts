/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListAdjustmentsRequest extends SpeakeasyBase {
    /**
     * Return entities for the specified action.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
    action?: shared.Action;

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
     * Return only the IDs specified. Use a comma separated list to get multiple entities.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
    id?: string;

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
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: shared.StatusAdjustment;

    /**
     * Return entities related to the specified subscription. Use a comma separated list to specify multiple subscription IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
    subscriptionId?: string;

    /**
     * Return entities related to the specified transaction. Use a comma separated list to specify multiple transaction IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transaction_id" })
    transactionId?: string;
}

/**
 * OK
 */
export class ListAdjustments200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Adjustment2 })
    @Expose({ name: "data" })
    @Type(() => shared.Adjustment2)
    data: shared.Adjustment2[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListAdjustmentsResponse extends SpeakeasyBase {
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
    listAdjustments200ApplicationJSONObject?: ListAdjustments200ApplicationJSON;
}
