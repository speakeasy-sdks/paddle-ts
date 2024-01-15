/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BillingDetails2, BillingDetails2$ } from "./billingdetails2";
import { CollectionMode2, CollectionMode2$ } from "./collectionmode2";
import { CurrencyCode2, CurrencyCode2$ } from "./currencycode2";
import { CustomData, CustomData$ } from "./customdata";
import { TimePeriod, TimePeriod$ } from "./timeperiod";
import { TransactionItemInput, TransactionItemInput$ } from "./transactioniteminput";
import { z } from "zod";

/**
 * Represents a transaction entity.
 */
export type TransactionCreate = {
    /**
     * Paddle ID of the address that this transaction is for, prefixed with `add_`. Required for transaction to be `ready`.
     */
    addressId?: any | undefined;
    /**
     * RFC 3339 datetime string.
     */
    billedAt?: Date | undefined;
    /**
     * Details for invoicing. Required if `collection_mode` is `manual`.
     */
    billingDetails?: BillingDetails2 | undefined;
    billingPeriod?: TimePeriod | undefined;
    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    businessId?: string | undefined;
    /**
     * How payment is collected. `automatic` for checkout, `manual` for invoices.
     */
    collectionMode?: CollectionMode2 | undefined;
    /**
     * Supported three-letter ISO 4217 currency code.
     */
    currencyCode?: CurrencyCode2 | undefined;
    /**
     * Your own structured key-value data.
     */
    customData?: CustomData | null | undefined;
    /**
     * Paddle ID of the customer that this transaction is for, prefixed with `ctm_`. Required for transaction to be `ready`.
     */
    customerId?: any | undefined;
    /**
     * Unique Paddle ID for this discount, prefixed with `dsc_`.
     */
    discountId?: string | undefined;
    /**
     * Unique Paddle ID for this transaction entity, prefixed with `txn_`.
     */
    id?: string | undefined;
    /**
     * List of items on this transaction. For calculated totals, use `details.line_items`.
     */
    items: Array<TransactionItemInput>;
    /**
     * Status of this transaction. You may set a transaction to `billed` when creating,
     *
     * @remarks
     * or omit to let Paddle set the status.
     *
     * Marking as `billed` when creating is typically used when working with manually-collected
     * transactions as part of an invoicing workflow. Automatically-collected transactions may
     * return `completed` if payment is captured successfully, or `past_due` if payment failed.
     */
    status?: any | undefined;
    /**
     * Unique Paddle ID for this subscription entity, prefixed with `sub_`.
     */
    subscriptionId?: string | undefined;
};

/** @internal */
export namespace TransactionCreate$ {
    export type Inbound = {
        address_id?: any | undefined;
        billed_at?: string | undefined;
        billing_details?: BillingDetails2$.Inbound | undefined;
        billing_period?: TimePeriod$.Inbound | undefined;
        business_id?: string | undefined;
        collection_mode?: CollectionMode2 | undefined;
        currency_code?: CurrencyCode2 | undefined;
        custom_data?: CustomData$.Inbound | null | undefined;
        customer_id?: any | undefined;
        discount_id?: string | undefined;
        id?: string | undefined;
        items: Array<TransactionItemInput$.Inbound>;
        status?: any | undefined;
        subscription_id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TransactionCreate, z.ZodTypeDef, Inbound> = z
        .object({
            address_id: z.any().optional(),
            billed_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            billing_details: BillingDetails2$.inboundSchema.optional(),
            billing_period: TimePeriod$.inboundSchema.optional(),
            business_id: z.string().optional(),
            collection_mode: CollectionMode2$.default(CollectionMode2.Automatic),
            currency_code: CurrencyCode2$.optional(),
            custom_data: z.nullable(CustomData$.inboundSchema).optional(),
            customer_id: z.any().optional(),
            discount_id: z.string().optional(),
            id: z.string().optional(),
            items: z.array(TransactionItemInput$.inboundSchema),
            status: z.any().optional(),
            subscription_id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address_id === undefined ? null : { addressId: v.address_id }),
                ...(v.billed_at === undefined ? null : { billedAt: v.billed_at }),
                ...(v.billing_details === undefined ? null : { billingDetails: v.billing_details }),
                ...(v.billing_period === undefined ? null : { billingPeriod: v.billing_period }),
                ...(v.business_id === undefined ? null : { businessId: v.business_id }),
                ...(v.collection_mode === undefined ? null : { collectionMode: v.collection_mode }),
                ...(v.currency_code === undefined ? null : { currencyCode: v.currency_code }),
                ...(v.custom_data === undefined ? null : { customData: v.custom_data }),
                ...(v.customer_id === undefined ? null : { customerId: v.customer_id }),
                ...(v.discount_id === undefined ? null : { discountId: v.discount_id }),
                ...(v.id === undefined ? null : { id: v.id }),
                items: v.items,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.subscription_id === undefined ? null : { subscriptionId: v.subscription_id }),
            };
        });

    export type Outbound = {
        address_id?: any | undefined;
        billed_at?: string | undefined;
        billing_details?: BillingDetails2$.Outbound | undefined;
        billing_period?: TimePeriod$.Outbound | undefined;
        business_id?: string | undefined;
        collection_mode: CollectionMode2;
        currency_code?: CurrencyCode2 | undefined;
        custom_data?: CustomData$.Outbound | null | undefined;
        customer_id?: any | undefined;
        discount_id?: string | undefined;
        id?: string | undefined;
        items: Array<TransactionItemInput$.Outbound>;
        status?: any | undefined;
        subscription_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionCreate> = z
        .object({
            addressId: z.any().optional(),
            billedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            billingDetails: BillingDetails2$.outboundSchema.optional(),
            billingPeriod: TimePeriod$.outboundSchema.optional(),
            businessId: z.string().optional(),
            collectionMode: CollectionMode2$.default(CollectionMode2.Automatic),
            currencyCode: CurrencyCode2$.optional(),
            customData: z.nullable(CustomData$.outboundSchema).optional(),
            customerId: z.any().optional(),
            discountId: z.string().optional(),
            id: z.string().optional(),
            items: z.array(TransactionItemInput$.outboundSchema),
            status: z.any().optional(),
            subscriptionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressId === undefined ? null : { address_id: v.addressId }),
                ...(v.billedAt === undefined ? null : { billed_at: v.billedAt }),
                ...(v.billingDetails === undefined ? null : { billing_details: v.billingDetails }),
                ...(v.billingPeriod === undefined ? null : { billing_period: v.billingPeriod }),
                ...(v.businessId === undefined ? null : { business_id: v.businessId }),
                collection_mode: v.collectionMode,
                ...(v.currencyCode === undefined ? null : { currency_code: v.currencyCode }),
                ...(v.customData === undefined ? null : { custom_data: v.customData }),
                ...(v.customerId === undefined ? null : { customer_id: v.customerId }),
                ...(v.discountId === undefined ? null : { discount_id: v.discountId }),
                ...(v.id === undefined ? null : { id: v.id }),
                items: v.items,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.subscriptionId === undefined ? null : { subscription_id: v.subscriptionId }),
            };
        });
}
