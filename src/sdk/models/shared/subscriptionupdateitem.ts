/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SubscriptionUpdateItem extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId: string;

    /**
     * Quantity of this item to add to the subscription. If updating an existing item and not changing the quantity, you may omit `quantity`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;
}
