/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateAddressRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    address?: shared.AddressInput;

    /**
     * Paddle ID of the address entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address_id" })
    addressId: string;

    /**
     * Paddle ID of the customer entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

/**
 * OK
 */
export class UpdateAddressResponseBody extends SpeakeasyBase {
    /**
     * Represents an address entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.Address)
    data: shared.Address;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class UpdateAddressResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: UpdateAddressResponseBody;

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
}
