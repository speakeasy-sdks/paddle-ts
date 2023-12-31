/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomData } from "./customdata";
import { TaxCategory1 } from "./taxcategory1";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Represents a product entity.
 */
export class Product extends SpeakeasyBase {
    /**
     * RFC 3339 datetime string of when this entity was created. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Your own structured key-value data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_data" })
    @Type(() => CustomData)
    customData?: CustomData;

    /**
     * Short description for this product. Included in the checkout and on some customer documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Unique Paddle ID for this product, prefixed with `pro_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Image for this product. Included in the checkout and on some customer documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    /**
     * Name of this product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: any;

    /**
     * Tax category for this product. Used for charging the correct rate of tax. Selected tax category must be enabled on your Paddle account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_category" })
    taxCategory?: TaxCategory1;
}
