/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { ErrorT } from "./error";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose, Type } from "class-transformer";

/**
 * General error response
 */
export class CreateSubscriptionChargeSubscriptionsResponseBody extends Error {
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

    constructor(err?: CreateSubscriptionChargeSubscriptionsResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CreateSubscriptionChargeSubscriptionsResponseBody";
        Object.setPrototypeOf(this, CreateSubscriptionChargeSubscriptionsResponseBody.prototype);
    }
}

/**
 * Error response for validation
 */
export class CreateSubscriptionChargeResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => shared.ErrorValidation)
    error?: shared.ErrorValidation;

    constructor(err?: CreateSubscriptionChargeResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CreateSubscriptionChargeResponseBody";
        Object.setPrototypeOf(this, CreateSubscriptionChargeResponseBody.prototype);
    }
}
