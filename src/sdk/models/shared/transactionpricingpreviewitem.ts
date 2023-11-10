/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TransactionPricingPreviewItem extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId?: string;

    /**
     * Quantity of the item to preview.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}
