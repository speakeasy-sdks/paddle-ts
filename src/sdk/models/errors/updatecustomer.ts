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
export class UpdateCustomer500ApplicationJSON extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateCustomer500ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateCustomer500ApplicationJSON";
        Object.setPrototypeOf(this, UpdateCustomer500ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class UpdateCustomer404ApplicationJSON extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateCustomer404ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateCustomer404ApplicationJSON";
        Object.setPrototypeOf(this, UpdateCustomer404ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class UpdateCustomer403ApplicationJSON extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateCustomer403ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateCustomer403ApplicationJSON";
        Object.setPrototypeOf(this, UpdateCustomer403ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class UpdateCustomer401ApplicationJSON extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateCustomer401ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateCustomer401ApplicationJSON";
        Object.setPrototypeOf(this, UpdateCustomer401ApplicationJSON.prototype);
    }
}

/**
 * Error response for validation
 */
export class UpdateCustomer400ApplicationJSON extends Error {
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorValidation)
    error?: ErrorValidation;

    constructor(err?: UpdateCustomer400ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateCustomer400ApplicationJSON";
        Object.setPrototypeOf(this, UpdateCustomer400ApplicationJSON.prototype);
    }
}