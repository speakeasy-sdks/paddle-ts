/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionItemProration } from "./transactionitemproration";
import { Expose, Type } from "class-transformer";

export class TransactionItemInput extends SpeakeasyBase {
    /**
     * Represents a price entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: Record<string, any>;

    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId: string;

    /**
     * Quantity of this item on the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}

export class TransactionItem extends SpeakeasyBase {
    /**
     * Represents a price entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: Record<string, any>;

    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId: string;

    /**
     * How proration was calculated for this item. Populated when a transaction is created from a subscription change, where `proration_billing_mode` was `prorated_immediately` or `prorated_next_billing_period`. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "proration" })
    @Type(() => TransactionItemProration)
    proration?: TransactionItemProration;

    /**
     * Quantity of this item on the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}
