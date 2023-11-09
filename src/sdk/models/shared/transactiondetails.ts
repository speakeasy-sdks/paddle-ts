/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Product } from "./product";
import { Totals1 } from "./totals1";
import { TransactionItemProration } from "./transactionitemproration";
import { TransactionPayoutTotals } from "./transactionpayouttotals";
import { TransactionPayoutTotalsAdjusted } from "./transactionpayouttotalsadjusted";
import { TransactionTotals } from "./transactiontotals";
import { TransactionTotalsAdjusted } from "./transactiontotalsadjusted";
import { UnitTotals } from "./unittotals";
import { Expose, Type } from "class-transformer";

/**
 * Information about line items for this transaction. Different from transaction `items` as they include totals calculated by Paddle. Considered the source of truth for line item totals.
 */
export class TransactionLineItem extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this transaction item, prefixed with `txnitm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId?: string;

    /**
     * Represents a product entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "product" })
    @Type(() => Product)
    product?: Product;

    /**
     * How proration was calculated for this item. Populated when a transaction is created from a subscription change, where `proration_billing_mode` was `prorated_immediately` or `prorated_next_billing_period`. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "proration" })
    @Type(() => TransactionItemProration)
    proration?: TransactionItemProration;

    /**
     * Quantity of this transaction line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * Rate used to calculate tax for this transaction line item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate" })
    taxRate?: string;

    /**
     * Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => Totals1)
    totals?: Totals1;

    /**
     * Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_totals" })
    @Type(() => UnitTotals)
    unitTotals?: UnitTotals;
}

export class TransactionDetailsTaxRatesUsed extends SpeakeasyBase {
    /**
     * Rate used to calculate tax for this transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate" })
    taxRate?: string;

    /**
     * Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => Totals1)
    totals?: Totals1;
}

/**
 * Calculated totals for a transaction, including proration, discounts, tax, and currency conversion. Considered the source of truth for totals on a transaction.
 */
export class TransactionDetails extends SpeakeasyBase {
    /**
     * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction is `completed`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "adjusted_payout_totals" })
    @Type(() => TransactionPayoutTotalsAdjusted)
    adjustedPayoutTotals?: TransactionPayoutTotalsAdjusted;

    /**
     * Breakdown of the payout totals for a transaction after adjustments. `null` until the transaction is `completed`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "adjusted_totals" })
    @Type(() => TransactionTotalsAdjusted)
    adjustedTotals?: TransactionTotalsAdjusted;

    /**
     * Information about line items for this transaction. Different from transaction `items` as they include totals calculated by Paddle. Considered the source of truth for line item totals.
     */
    @SpeakeasyMetadata({ elemType: TransactionLineItem })
    @Expose({ name: "line_items" })
    @Type(() => TransactionLineItem)
    lineItems?: TransactionLineItem[];

    /**
     * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`. Returned in your payout currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payout_totals" })
    @Type(() => TransactionPayoutTotals)
    payoutTotals?: TransactionPayoutTotals;

    /**
     * List of tax rates applied for this transaction.
     */
    @SpeakeasyMetadata({ elemType: TransactionDetailsTaxRatesUsed })
    @Expose({ name: "tax_rates_used" })
    @Type(() => TransactionDetailsTaxRatesUsed)
    taxRatesUsed?: TransactionDetailsTaxRatesUsed[];

    /**
     * Breakdown of the total for a transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => TransactionTotals)
    totals?: TransactionTotals;
}
