/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateSubscriptionChargePreviewRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: Record<string, any>;

    /**
     * Paddle ID of the subscription entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;
}

/**
 * Details of the discount applied to this subscription.
 */
export class CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreviewDiscount extends SpeakeasyBase {
    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ends_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endsAt: Date;

    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "starts_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startsAt: Date;
}

/**
 * Represents a subscription preview.
 */
export class CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreview extends SpeakeasyBase {
    /**
     * Unique Paddle ID for this address entity, prefixed with `add_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address_id" })
    addressId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "billing_cycle" })
    @Type(() => shared.Period2)
    billingCycle?: shared.Period2;

    /**
     * Details for invoicing. Required if `collection_mode` is `manual`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_details" })
    @Type(() => shared.BillingDetails2)
    billingDetails?: shared.BillingDetails2;

    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_id" })
    businessId?: string;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "canceled_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    canceledAt?: Date;

    /**
     * How payment is collected. `automatic` for checkout, `manual` for invoices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "collection_mode" })
    collectionMode?: shared.CollectionMode2;

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
    currencyCode?: shared.CurrencyCode2;

    @SpeakeasyMetadata()
    @Expose({ name: "current_billing_period" })
    @Type(() => shared.TimePeriod)
    currentBillingPeriod?: shared.TimePeriod;

    /**
     * Your own structured key-value data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_data" })
    @Type(() => shared.CustomData)
    customData?: shared.CustomData;

    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * Details of the discount applied to this subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discount" })
    @Type(() => CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreviewDiscount)
    discount?: CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreviewDiscount;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_billed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    firstBilledAt?: Date;

    /**
     * Preview of the next transaction for this subscription. May include prorated charges that are not yet billed and one-time charges. `null` if the subscription is scheduled to cancel or pause.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "immediate_transaction" })
    @Type(() => shared.SubscriptionNextTransaction)
    immediateTransaction?: shared.SubscriptionNextTransaction;

    /**
     * List of items on this subscription. Only recurring items are returned.
     */
    @SpeakeasyMetadata({ elemType: shared.ItemSubscription })
    @Expose({ name: "items" })
    @Type(() => shared.ItemSubscription)
    items?: shared.ItemSubscription[];

    /**
     * Public URLs that customers can use to make changes to this subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "management_urls" })
    @Type(() => shared.SubscriptionManagementUrls)
    managementUrls?: shared.SubscriptionManagementUrls;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_billed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    nextBilledAt?: Date;

    /**
     * Preview of the next transaction for this subscription. May include prorated charges that are not yet billed and one-time charges. `null` if the subscription is scheduled to cancel or pause.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_transaction" })
    @Type(() => shared.SubscriptionNextTransaction)
    nextTransaction?: shared.SubscriptionNextTransaction;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paused_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    pausedAt?: Date;

    /**
     * Preview of the recurring transaction for this subscription. This is what the customer can expect to be billed when there are no prorated or one-off charges.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring_transaction_details" })
    @Type(() => shared.SubscriptionRecurringTransactionDetails)
    recurringTransactionDetails?: shared.SubscriptionRecurringTransactionDetails;

    /**
     * Change that's scheduled to be applied to a subscription. Use the pause subscription, cancel subscription, and resume subscription operations to create scheduled changes. `null` if no scheduled changes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduled_change" })
    @Type(() => shared.SubscriptionScheduledChange)
    scheduledChange?: shared.SubscriptionScheduledChange;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "started_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startedAt?: Date;

    /**
     * Status of this subscription. Set automatically by Paddle. Use the pause subscription or cancel subscription operations to change.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: shared.SchemasstatusSubscription;

    /**
     * RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}

/**
 * OK
 */
export class CreateSubscriptionChargePreview200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreview)
    data: CreateSubscriptionChargePreview200ApplicationJSONSubscriptionPreview;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class CreateSubscriptionChargePreviewResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    createSubscriptionChargePreview200ApplicationJSONObject?: CreateSubscriptionChargePreview200ApplicationJSON;
}
