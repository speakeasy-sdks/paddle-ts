/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Totals1 } from "./totals1";
import { TransactionPreviewLineItem } from "./transactionpreviewlineitem";
import { TransactionTotals } from "./transactiontotals";
import { Expose, Type } from "class-transformer";

export class TaxRatesUsed extends SpeakeasyBase {
    /**
     * Rate used to calculate tax for this transaction preview.
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
 * Preview of the recurring transaction for this subscription. This is what the customer can expect to be billed when there are no prorated or one-off charges.
 */
export class SubscriptionRecurringTransactionDetails extends SpeakeasyBase {
    /**
     * Information about line items for this transaction preview. Different from transaction preview `items` as they include totals calculated by Paddle. Considered the source of truth for line item totals.
     */
    @SpeakeasyMetadata({ elemType: TransactionPreviewLineItem })
    @Expose({ name: "line_items" })
    @Type(() => TransactionPreviewLineItem)
    lineItems?: TransactionPreviewLineItem[];

    /**
     * List of tax rates applied to this transaction preview.
     */
    @SpeakeasyMetadata({ elemType: TaxRatesUsed })
    @Expose({ name: "tax_rates_used" })
    @Type(() => TaxRatesUsed)
    taxRatesUsed?: TaxRatesUsed[];

    /**
     * Breakdown of the total for a transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => TransactionTotals)
    totals?: TransactionTotals;
}
