/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Schemasstatus } from "./schemasstatus";
import { Expose, Transform } from "class-transformer";

/**
 * Represents a customer entity.
 */
export class CustomerIncludes extends SpeakeasyBase {
    /**
     * RFC 3339 datetime string of when this entity was created. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Email address for this entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Valid IETF BCP 47 short form locale tag. If omitted, defaults to `en`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locale" })
    locale?: string;

    /**
     * Whether this customer opted into marketing from you.
     *
     * @remarks
     * Set to `true` by Paddle where a customer checks the marketing consent box when using Paddle Checkout; `false` otherwise.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "marketing_consent" })
    marketingConsent?: boolean;

    /**
     * Full name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Whether this entity can be used in Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Schemasstatus;

    /**
     * RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}