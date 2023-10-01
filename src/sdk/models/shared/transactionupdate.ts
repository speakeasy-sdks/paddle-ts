/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillingDetails2 } from "./billingdetails2";
import { CollectionMode2 } from "./collectionmode2";
import { CurrencyCode2 } from "./currencycode2";
import { CustomData } from "./customdata";
import { TimePeriod } from "./timeperiod";
import { TransactionItemInput } from "./transactionitem";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Represents a transaction entity.
 */
export class TransactionUpdateInput extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this address entity, prefixed with `add_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address_id" })
    addressId?: string;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    billedAt?: Date;

    /**
     * Details for invoicing. Required if `collection_mode` is `manual`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_details" })
    @Type(() => BillingDetails2)
    billingDetails?: BillingDetails2;

    @SpeakeasyMetadata()
    @Expose({ name: "billing_period" })
    @Type(() => TimePeriod)
    billingPeriod?: TimePeriod;

    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_id" })
    businessId?: string;

    /**
     * How payment is collected. `automatic` for checkout, `manual` for invoices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "collection_mode" })
    collectionMode?: CollectionMode2;

    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Your own structured key-value data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_data" })
    @Type(() => CustomData)
    customData?: CustomData;

    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount_id" })
    discountId?: string;

    /**
     * Unique Paddle ID for this transaction entity, prefixed with `txn_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * List of items on this transaction. For calculated totals, use `details.line_items`.
     */
    @SpeakeasyMetadata({ elemType: TransactionItemInput })
    @Expose({ name: "items" })
    @Type(() => TransactionItemInput)
    items: TransactionItemInput[];

    /**
     * Status of this transaction. You may set a transaction to `billed` or `canceled`. Billed transactions cannot be changed.
     *
     * @remarks
     *
     * For manually-collected transactions, marking as `billed` is essentially issuing an invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: any;

    /**
     * Unique Paddle ID for this subscription entity, prefixed with `sub_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subscription_id" })
    subscriptionId?: string;
}
