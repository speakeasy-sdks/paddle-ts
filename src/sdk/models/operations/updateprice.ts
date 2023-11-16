/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdatePriceRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    priceUpdate?: shared.PriceUpdate;

    /**
     * Paddle ID of the price entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=price_id" })
    priceId: string;
}

/**
 * OK
 */
export class UpdatePriceResponseBody extends SpeakeasyBase {
    /**
     * Represents a price entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.Price)
    data: shared.Price;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class UpdatePriceResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: UpdatePriceResponseBody;

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
