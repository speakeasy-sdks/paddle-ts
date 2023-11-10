/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyCode2 } from "./currencycode2";
import { Expose, Type } from "class-transformer";

/**
 * Breakdown of the total adjustments by adjustment action.
 */
export class Breakdown extends SpeakeasyBase {
    /**
     * Total amount of chargeback adjustments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "chargeback" })
    chargeback?: string;

    /**
     * Total amount of credit adjustments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "credit" })
    credit?: string;

    /**
     * Total amount of refund adjustments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund" })
    refund?: string;
}

/**
 * Breakdown of all the adjustments made against a transaction in the transaction currency.
 */
export class TransactionAdjustmentsTotalsInclude extends SpeakeasyBase {
    /**
     * Breakdown of the total adjustments by adjustment action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "breakdown" })
    @Type(() => Breakdown)
    breakdown?: Breakdown;

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
     * As a result, the earnings from all the adjustments performed could be either negative, positive or zero.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "earnings" })
    earnings?: string;

    /**
     * Total fee taken by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fee" })
    fee?: string;

    /**
     * Total before tax.
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
