/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyCode2 } from "./currencycode2";
import { SchemaStatusDiscount } from "./schemastatusdiscount";
import { Expose, Transform } from "class-transformer";

/**
 * Type of discount.
 */
export enum DiscountType {
    Flat = "flat",
    FlatPerSeat = "flat_per_seat",
    Percentage = "percentage",
}

/**
 * Represents a discount entity.
 */
export class Discount extends SpeakeasyBase {
    /**
     * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`. For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * Unique code that customers can use to apply this discount at checkout. Use letters and numbers only, up to 16 characters. Paddle generates a random 10-character code if a code is not provided and `enabled_for_checkout` is `true`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * RFC 3339 datetime string of when this entity was created. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Short description for this discount for your reference. Not shown to customers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Whether this discount can be applied by a customer at checkout.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enabled_for_checkout" })
    enabledForCheckout?: boolean;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiresAt?: Date;

    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Amount of subscription billing periods that this discount recurs for. Requires `recur`. `null` if this discount recurs forever.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maximum_recurring_intervals" })
    maximumRecurringIntervals?: number;

    /**
     * Whether this discount applies for multiple billing periods.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recur" })
    recur?: boolean;

    /**
     * Product or price IDs that this discount is for. When including a product ID, all prices for that product can be discounted. `null` if this discount applies to all products and prices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "restrict_to" })
    restrictTo?: string[];

    /**
     * Whether this entity can be used in Paddle. `expired` and `used` are set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: SchemaStatusDiscount;

    /**
     * How many times this discount has been redeemed. Automatically incremented by Paddle when an order completes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "times_used" })
    timesUsed?: number;

    /**
     * Type of discount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: DiscountType;

    /**
     * RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * Maximum amount of times this discount can be used. This is an overall limit, rather than a per-customer limit. `null` if this discount can be used an unlimited amount of times.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage_limit" })
    usageLimit?: number;
}

/**
 * Represents a discount entity.
 */
export class DiscountInput extends SpeakeasyBase {
    /**
     * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`. For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * Unique code that customers can use to apply this discount at checkout. Use letters and numbers only, up to 16 characters. Paddle generates a random 10-character code if a code is not provided and `enabled_for_checkout` is `true`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Short description for this discount for your reference. Not shown to customers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Whether this discount can be applied by a customer at checkout.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enabled_for_checkout" })
    enabledForCheckout?: boolean;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiresAt?: Date;

    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Amount of subscription billing periods that this discount recurs for. Requires `recur`. `null` if this discount recurs forever.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maximum_recurring_intervals" })
    maximumRecurringIntervals?: number;

    /**
     * Whether this discount applies for multiple billing periods.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recur" })
    recur?: boolean;

    /**
     * Product or price IDs that this discount is for. When including a product ID, all prices for that product can be discounted. `null` if this discount applies to all products and prices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "restrict_to" })
    restrictTo?: string[];

    /**
     * Whether this entity can be used in Paddle. `expired` and `used` are set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: SchemaStatusDiscount;

    /**
     * Type of discount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: DiscountType;

    /**
     * Maximum amount of times this discount can be used. This is an overall limit, rather than a per-customer limit. `null` if this discount can be used an unlimited amount of times.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage_limit" })
    usageLimit?: number;
}
