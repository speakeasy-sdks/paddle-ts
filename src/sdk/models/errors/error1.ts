/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { classToPlain, Expose, Type } from "class-transformer";

export class ErrorErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "field" })
    field: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class ErrorExtra extends SpeakeasyBase {}

export class Error1 extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    @SpeakeasyMetadata()
    @Expose({ name: "detail" })
    detail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "documentation_url" })
    documentationUrl: string;

    @SpeakeasyMetadata({ elemType: ErrorErrors })
    @Expose({ name: "errors" })
    @Type(() => ErrorErrors)
    errors?: ErrorErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "extra" })
    @Type(() => ErrorExtra)
    extra?: ErrorExtra;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    constructor(err?: Error1) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "Error1";
        Object.setPrototypeOf(this, Error1.prototype);
    }
}