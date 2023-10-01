/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListTransactionsRequest extends SpeakeasyBase {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Return entities billed at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `billed_at=2023-04-18T17:03:26` or `billed_at[LT]=2023-04-18T17:03:26`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=billed_at" })
    billedAt?: string;

    /**
     * Return entities that match the specified collection mode.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collection_mode" })
    collectionMode?: shared.CollectionMode;

    /**
     * Return entities created at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `created_at=2023-04-18T17:03:26` or `created_at[LT]=2023-04-18T17:03:26`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at" })
    createdAt?: string;

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
     * Include related entities in the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.IncludeTransaction;

    /**
     * Return entities that match the invoice number. Use a comma separated list to specify multiple invoice numbers.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invoice_number" })
    invoiceNumber?: string;

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
    status?: shared.StatusTransaction;

    /**
     * Return entities related to the specified subscription. Use a comma separated list to specify multiple subscription IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
    subscriptionId?: string;

    /**
     * Return entities updated at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `updated_at=2023-04-18T17:03:26` or `updated_at[LT]=2023-04-18T17:03:26`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_at" })
    updatedAt?: string;
}

/**
 * OK
 */
export class ListTransactions200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.TransactionIncludes })
    @Expose({ name: "data" })
    @Type(() => shared.TransactionIncludes)
    data: shared.TransactionIncludes[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListTransactionsResponse extends SpeakeasyBase {
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
    listTransactions200ApplicationJSONObject?: ListTransactions200ApplicationJSON;
}
