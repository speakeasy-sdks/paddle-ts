/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyCodeChargeback } from "./currencycodechargeback";
import { CurrencyCodePayouts } from "./currencycodepayouts";
import { Expose, Type } from "class-transformer";

/**
 * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the same as the payout currency.
 */
export class Original extends SpeakeasyBase {
    /**
     * Fee amount for this chargeback in the original currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * Three-letter ISO 4217 currency code for chargeback fees.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCodeChargeback;
}

/**
 * Chargeback fees incurred for this adjustment. Only returned when the adjustment `action` is `chargeback` or `chargeback_warning`.
 */
export class ChargebackFee extends SpeakeasyBase {
    /**
     * Chargeback fee converted into the payout currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the same as the payout currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "original" })
    @Type(() => Original)
    original?: Original;
}

/**
 * Breakdown of how this adjustment affects your payout balance.
 */
export class AdjustmentPayoutTotals extends SpeakeasyBase {
    /**
     * Chargeback fees incurred for this adjustment. Only returned when the adjustment `action` is `chargeback` or `chargeback_warning`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "chargeback_fee" })
    @Type(() => ChargebackFee)
    chargebackFee?: ChargebackFee;

    /**
     * Supported three-letter ISO 4217 currency code for payouts from Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCodePayouts;

    /**
     * Adjusted payout earnings. This is the adjustment total plus adjusted Paddle fees, minus chargeback fees.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "earnings" })
    earnings?: string;

    /**
     * Adjusted Paddle fee.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fee" })
    fee?: string;

    /**
     * Adjustment total before tax and fees.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subtotal" })
    subtotal?: string;

    /**
     * Total tax on the adjustment subtotal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax" })
    tax?: string;

    /**
     * Adjustment total after tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: string;
}
