/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateTransactionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    transactionUpdate?: shared.TransactionUpdate;

    /**
     * Paddle ID of the transaction entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
    transactionId: string;
}

/**
 * OK
 */
export class UpdateTransactionResponseBody extends SpeakeasyBase {
    /**
     * Represents a transaction entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.Transaction1)
    data: shared.Transaction1;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class UpdateTransactionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: UpdateTransactionResponseBody;

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
