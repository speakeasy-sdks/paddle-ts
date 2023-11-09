/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class SchemasErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "field" })
    field: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class ErrorValidation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    @SpeakeasyMetadata()
    @Expose({ name: "detail" })
    detail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "documentation_url" })
    documentationUrl: string;

    @SpeakeasyMetadata({ elemType: SchemasErrors })
    @Expose({ name: "errors" })
    @Type(() => SchemasErrors)
    errors: SchemasErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}
