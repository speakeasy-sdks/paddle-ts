/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD).
 */
export class Totals1 extends SpeakeasyBase {
    /**
     * Total discount as a result of any discounts applied.
     *
     * @remarks
     *
     * Except for percentage discounts, Paddle applies tax to discounts based on the line item `price.tax_mode`. If `price.tax_mode` for a line item is `internal`, Paddle removes tax from the discount applied.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount" })
    discount?: string;

    /**
     * Subtotal before discount, tax, and deductions. If an item, unit price multiplied by quantity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subtotal" })
    subtotal?: string;

    /**
     * Total tax on the subtotal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax" })
    tax?: string;

    /**
     * Total after discount and tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: string;
}
