/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ErrorValidation } from "./errorvalidation";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose, Type } from "class-transformer";

/**
 * General error response
 */
export class CancelSubscription500ApplicationJSON extends Error {
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

    constructor(err?: CancelSubscription500ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CancelSubscription500ApplicationJSON";
        Object.setPrototypeOf(this, CancelSubscription500ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class CancelSubscription401ApplicationJSON extends Error {
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

    constructor(err?: CancelSubscription401ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CancelSubscription401ApplicationJSON";
        Object.setPrototypeOf(this, CancelSubscription401ApplicationJSON.prototype);
    }
}

/**
 * Error response for validation
 */
export class CancelSubscription400ApplicationJSON extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorValidation)
    error?: ErrorValidation;

    constructor(err?: CancelSubscription400ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CancelSubscription400ApplicationJSON";
        Object.setPrototypeOf(this, CancelSubscription400ApplicationJSON.prototype);
    }
}
