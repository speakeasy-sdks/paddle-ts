/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateCustomerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    customerInput?: shared.CustomerInput;

    /**
     * Paddle ID of the customer entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
    customerId: string;
}

/**
 * OK
 */
export class UpdateCustomer200ApplicationJSON extends SpeakeasyBase {
    /**
     * Represents a customer entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.Customer)
    data: shared.Customer;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class UpdateCustomerResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    updateCustomer200ApplicationJSONObject?: UpdateCustomer200ApplicationJSON;
}