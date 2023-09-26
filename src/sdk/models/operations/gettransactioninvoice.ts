/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTransactionInvoiceRequest extends SpeakeasyBase {
    /**
     * Paddle ID of the transaction entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
    transactionId: string;
}

export class GetTransactionInvoice200ApplicationJSONData extends SpeakeasyBase {
    /**
     * URL of the requested resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * OK
 */
export class GetTransactionInvoice200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => GetTransactionInvoice200ApplicationJSONData)
    data: GetTransactionInvoice200ApplicationJSONData;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class GetTransactionInvoiceResponse extends SpeakeasyBase {
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
    getTransactionInvoice200ApplicationJSONObject?: GetTransactionInvoice200ApplicationJSON;
}
