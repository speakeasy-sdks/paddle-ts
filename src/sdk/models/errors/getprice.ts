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
export class GetPrice500ApplicationJSON extends Error {
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

    constructor(err?: GetPrice500ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "GetPrice500ApplicationJSON";
        Object.setPrototypeOf(this, GetPrice500ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class GetPrice404ApplicationJSON extends Error {
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

    constructor(err?: GetPrice404ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "GetPrice404ApplicationJSON";
        Object.setPrototypeOf(this, GetPrice404ApplicationJSON.prototype);
    }
}

/**
 * General error response
 */
export class GetPrice401ApplicationJSON extends Error {
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

    constructor(err?: GetPrice401ApplicationJSON) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "GetPrice401ApplicationJSON";
        Object.setPrototypeOf(this, GetPrice401ApplicationJSON.prototype);
    }
}