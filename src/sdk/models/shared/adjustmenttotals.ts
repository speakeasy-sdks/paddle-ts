/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyCode2 } from "./currencycode2";
import { Expose } from "class-transformer";

/**
 * Breakdown of the total for an adjustment.
 */
export class AdjustmentTotals extends SpeakeasyBase {
    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Total earnings. This is the subtotal minus the Paddle fee.
     *
     * @remarks
     * For tax adjustments, this value is negative, which means a positive effect in the transaction earnings.
     * This is because the fee is originally calculated from the transaction total, so if a tax adjustment is made,
     * then the fee portion of it is returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "earnings" })
    earnings?: string;

    /**
     * Total fee taken by Paddle for this adjustment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fee" })
    fee?: string;

    /**
     * Total before tax. For tax adjustments, the value is 0.
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
     * Total after tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: string;
}
