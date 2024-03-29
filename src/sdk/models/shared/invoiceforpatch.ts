/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { BillingDetails1, BillingDetails1$ } from "./billingdetails1";
import { CurrencyCodeInvoice, CurrencyCodeInvoice$ } from "./currencycodeinvoice";
import { CustomDataInvoice, CustomDataInvoice$ } from "./customdatainvoice";
import { InvoiceItem, InvoiceItem$ } from "./invoiceitem";
import { z } from "zod";

/**
 * The billing period type is set to `billing` for subscriptions.
 */
export enum InvoiceForPatchType {
    Billing = "billing",
    Contract = "contract",
    Service = "service",
}

export type InvoiceForPatchBillingPeriod = {
    endsAt: RFCDate;
    startsAt: RFCDate;
    /**
     * The billing period type is set to `billing` for subscriptions.
     */
    type: InvoiceForPatchType;
};

export type InvoiceForPatch = {
    addressId?: string | undefined;
    /**
     * Details for invoicing. Required if `collection_mode` is set to `manual`. Otherwise must be `null`.
     */
    billingDetails?: BillingDetails1 | undefined;
    billingPeriod?: InvoiceForPatchBillingPeriod | null | undefined;
    businessId?: string | null | undefined;
    /**
     * Currency codes accepted for invoice. Current accepted currencies for invoice: EUR, GPB and USD.
     */
    currencyCode?: CurrencyCodeInvoice | undefined;
    /**
     * Key/value pairs of any custom data
     */
    customData?: CustomDataInvoice | undefined;
    customerId?: string | undefined;
    items?: Array<InvoiceItem> | undefined;
};

/** @internal */
export const InvoiceForPatchType$ = z.nativeEnum(InvoiceForPatchType);

/** @internal */
export namespace InvoiceForPatchBillingPeriod$ {
    export type Inbound = {
        ends_at: string;
        starts_at: string;
        type: InvoiceForPatchType;
    };

    export const inboundSchema: z.ZodType<InvoiceForPatchBillingPeriod, z.ZodTypeDef, Inbound> = z
        .object({
            ends_at: z.string().transform((v) => new RFCDate(v)),
            starts_at: z.string().transform((v) => new RFCDate(v)),
            type: InvoiceForPatchType$,
        })
        .transform((v) => {
            return {
                endsAt: v.ends_at,
                startsAt: v.starts_at,
                type: v.type,
            };
        });

    export type Outbound = {
        ends_at: string;
        starts_at: string;
        type: InvoiceForPatchType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceForPatchBillingPeriod> = z
        .object({
            endsAt: z.instanceof(RFCDate).transform((v) => v.toString()),
            startsAt: z.instanceof(RFCDate).transform((v) => v.toString()),
            type: InvoiceForPatchType$,
        })
        .transform((v) => {
            return {
                ends_at: v.endsAt,
                starts_at: v.startsAt,
                type: v.type,
            };
        });
}

/** @internal */
export namespace InvoiceForPatch$ {
    export type Inbound = {
        address_id?: string | undefined;
        billing_details?: BillingDetails1$.Inbound | undefined;
        billing_period?: InvoiceForPatchBillingPeriod$.Inbound | null | undefined;
        business_id?: string | null | undefined;
        currency_code?: CurrencyCodeInvoice | undefined;
        custom_data?: CustomDataInvoice$.Inbound | undefined;
        customer_id?: string | undefined;
        items?: Array<InvoiceItem$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceForPatch, z.ZodTypeDef, Inbound> = z
        .object({
            address_id: z.string().optional(),
            billing_details: BillingDetails1$.inboundSchema.optional(),
            billing_period: z
                .nullable(z.lazy(() => InvoiceForPatchBillingPeriod$.inboundSchema))
                .optional(),
            business_id: z.nullable(z.string()).optional(),
            currency_code: CurrencyCodeInvoice$.optional(),
            custom_data: CustomDataInvoice$.inboundSchema.optional(),
            customer_id: z.string().optional(),
            items: z.array(InvoiceItem$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address_id === undefined ? null : { addressId: v.address_id }),
                ...(v.billing_details === undefined ? null : { billingDetails: v.billing_details }),
                ...(v.billing_period === undefined ? null : { billingPeriod: v.billing_period }),
                ...(v.business_id === undefined ? null : { businessId: v.business_id }),
                ...(v.currency_code === undefined ? null : { currencyCode: v.currency_code }),
                ...(v.custom_data === undefined ? null : { customData: v.custom_data }),
                ...(v.customer_id === undefined ? null : { customerId: v.customer_id }),
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });

    export type Outbound = {
        address_id?: string | undefined;
        billing_details?: BillingDetails1$.Outbound | undefined;
        billing_period?: InvoiceForPatchBillingPeriod$.Outbound | null | undefined;
        business_id?: string | null | undefined;
        currency_code?: CurrencyCodeInvoice | undefined;
        custom_data?: CustomDataInvoice$.Outbound | undefined;
        customer_id?: string | undefined;
        items?: Array<InvoiceItem$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceForPatch> = z
        .object({
            addressId: z.string().optional(),
            billingDetails: BillingDetails1$.outboundSchema.optional(),
            billingPeriod: z
                .nullable(z.lazy(() => InvoiceForPatchBillingPeriod$.outboundSchema))
                .optional(),
            businessId: z.nullable(z.string()).optional(),
            currencyCode: CurrencyCodeInvoice$.optional(),
            customData: CustomDataInvoice$.outboundSchema.optional(),
            customerId: z.string().optional(),
            items: z.array(InvoiceItem$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressId === undefined ? null : { address_id: v.addressId }),
                ...(v.billingDetails === undefined ? null : { billing_details: v.billingDetails }),
                ...(v.billingPeriod === undefined ? null : { billing_period: v.billingPeriod }),
                ...(v.businessId === undefined ? null : { business_id: v.businessId }),
                ...(v.currencyCode === undefined ? null : { currency_code: v.currencyCode }),
                ...(v.customData === undefined ? null : { custom_data: v.customData }),
                ...(v.customerId === undefined ? null : { customer_id: v.customerId }),
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });
}
