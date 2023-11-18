/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressPreview } from "./addresspreview";
import { CurrencyCode2 } from "./currencycode2";
import { PriceInput } from "./priceinput";
import { TransactionPreviewAdjustmentTotals } from "./transactionpreviewadjustmenttotals";
import { Expose, Type } from "class-transformer";

export class TransactionPreviewTransactionItemPreview extends SpeakeasyBase {
    /**
     * Whether this item should be included in totals for this transaction preview. Typically used to exclude one-time charges from calculations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "include_in_totals" })
    includeInTotals?: boolean;

    /**
     * Represents a price entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    @Type(() => PriceInput)
    price?: PriceInput;

    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_id" })
    priceId?: string;

    /**
     * Quantity of this item on the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}

/**
 * Represents a transaction entity when previewing.
 */
export class TransactionPreviewInput extends SpeakeasyBase {
    /**
     * Represents an address entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => AddressPreview)
    address?: AddressPreview;

    /**
     * Unique Paddle ID for this address entity, prefixed with `add_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address_id" })
    addressId?: string;

    /**
     * Breakdown of the total for adjustments for a transaction preview in a given currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "adjustments_totals" })
    @Type(() => TransactionPreviewAdjustmentTotals)
    adjustmentsTotals?: TransactionPreviewAdjustmentTotals;

    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_id" })
    businessId?: string;

    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the `address` object when previewing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_ip_address" })
    customerIpAddress?: string;

    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_id" })
    discountId?: string;

    /**
     * Whether trials should be ignored for transaction preview calculations.
     *
     * @remarks
     *
     * By default, recurring items with trials are considered to have a zero charge when previewing. Set to `true` to disable this.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ignore_trials" })
    ignoreTrials?: boolean;

    /**
     * List of items to preview transaction calculations for.
     */
    @SpeakeasyMetadata({ elemType: TransactionPreviewTransactionItemPreview })
    @Expose({ name: "items" })
    @Type(() => TransactionPreviewTransactionItemPreview)
    items: TransactionPreviewTransactionItemPreview[];
}