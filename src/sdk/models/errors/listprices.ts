/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose, Type } from "class-transformer";

/**
 * General error response
 */
export class ListPricesPricesResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: ListPricesPricesResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "ListPricesPricesResponseBody";
        Object.setPrototypeOf(this, ListPricesPricesResponseBody.prototype);
    }
}

/**
 * General error response
 */
export class ListPricesResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: ListPricesResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "ListPricesResponseBody";
        Object.setPrototypeOf(this, ListPricesResponseBody.prototype);
    }
}
