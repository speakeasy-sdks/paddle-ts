/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../../sdk/types";
import { BillingDetails1, BillingDetails1$ } from "./billingdetails1";
import { CurrencyCodeInvoice, CurrencyCodeInvoice$ } from "./currencycodeinvoice";
import { CustomDataInvoice, CustomDataInvoice$ } from "./customdatainvoice";
import { InvoiceDetails, InvoiceDetails$ } from "./invoicedetails";
import { InvoiceDetailsInput, InvoiceDetailsInput$ } from "./invoicedetailsinput";
import { InvoiceItem, InvoiceItem$ } from "./invoiceitem";
import { z } from "zod";

/**
 * The billing period type is set to `billing` for subscriptions.
 */
export enum InvoiceType {
    Billing = "billing",
    Contract = "contract",
    Service = "service",
}

export type BillingPeriod = {
    endsAt: RFCDate;
    startsAt: RFCDate;
    /**
     * The billing period type is set to `billing` for subscriptions.
     */
    type: InvoiceType;
};

export type Checkout = {
    url: string;
};

/**
 * The status of the invoice. Most of statuses are self-explanatory. `pending_acceptance` is a state equivalent of `unpaid` but represents the fact that the customer has not yet accept Paddle's invoicing MoR terms and conditions.
 */
export enum InvoiceStatus {
    Paid = "paid",
    Overdue = "overdue",
    PendingAcceptance = "pending_acceptance",
    Unpaid = "unpaid",
    Canceled = "canceled",
    Draft = "draft",
}

export type Invoice = {
    addressId: string;
    /**
     * Details for invoicing. Required if `collection_mode` is set to `manual`. Otherwise must be `null`.
     */
    billingDetails: BillingDetails1;
    billingPeriod?: BillingPeriod | null | undefined;
    businessId?: string | null | undefined;
    checkout?: Checkout | null | undefined;
    createdAt?: Date | undefined;
    /**
     * Currency codes accepted for invoice. Current accepted currencies for invoice: EUR, GPB and USD.
     */
    currencyCode: CurrencyCodeInvoice;
    /**
     * Key/value pairs of any custom data
     */
    customData: CustomDataInvoice;
    customerId: string;
    details?: InvoiceDetails | undefined;
    dueAt?: Date | null | undefined;
    id?: string | undefined;
    invoiceNumber?: string | null | undefined;
    issuedAt?: Date | null | undefined;
    items: Array<InvoiceItem>;
    paidAt?: Date | null | undefined;
    /**
     * The status of the invoice. Most of statuses are self-explanatory. `pending_acceptance` is a state equivalent of `unpaid` but represents the fact that the customer has not yet accept Paddle's invoicing MoR terms and conditions.
     */
    status?: InvoiceStatus | undefined;
    transactionId?: string | null | undefined;
    updatedAt?: Date | undefined;
};

export type InvoiceInput = {
    addressId: string;
    /**
     * Details for invoicing. Required if `collection_mode` is set to `manual`. Otherwise must be `null`.
     */
    billingDetails: BillingDetails1;
    billingPeriod?: BillingPeriod | null | undefined;
    businessId?: string | null | undefined;
    /**
     * Currency codes accepted for invoice. Current accepted currencies for invoice: EUR, GPB and USD.
     */
    currencyCode: CurrencyCodeInvoice;
    /**
     * Key/value pairs of any custom data
     */
    customData: CustomDataInvoice;
    customerId: string;
    details?: InvoiceDetailsInput | undefined;
    items: Array<InvoiceItem>;
};

/** @internal */
export const InvoiceType$ = z.nativeEnum(InvoiceType);

/** @internal */
export namespace BillingPeriod$ {
    export type Inbound = {
        ends_at: string;
        starts_at: string;
        type: InvoiceType;
    };

    export const inboundSchema: z.ZodType<BillingPeriod, z.ZodTypeDef, Inbound> = z
        .object({
            ends_at: z.string().transform((v) => new RFCDate(v)),
            starts_at: z.string().transform((v) => new RFCDate(v)),
            type: InvoiceType$,
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
        type: InvoiceType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillingPeriod> = z
        .object({
            endsAt: z.instanceof(RFCDate).transform((v) => v.toString()),
            startsAt: z.instanceof(RFCDate).transform((v) => v.toString()),
            type: InvoiceType$,
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
export namespace Checkout$ {
    export type Inbound = {
        url: string;
    };

    export const inboundSchema: z.ZodType<Checkout, z.ZodTypeDef, Inbound> = z
        .object({
            url: z.string(),
        })
        .transform((v) => {
            return {
                url: v.url,
            };
        });

    export type Outbound = {
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Checkout> = z
        .object({
            url: z.string(),
        })
        .transform((v) => {
            return {
                url: v.url,
            };
        });
}

/** @internal */
export const InvoiceStatus$ = z.nativeEnum(InvoiceStatus);

/** @internal */
export namespace Invoice$ {
    export type Inbound = {
        address_id: string;
        billing_details: BillingDetails1$.Inbound;
        billing_period?: BillingPeriod$.Inbound | null | undefined;
        business_id?: string | null | undefined;
        checkout?: Checkout$.Inbound | null | undefined;
        created_at?: string | undefined;
        currency_code: CurrencyCodeInvoice;
        custom_data: CustomDataInvoice$.Inbound;
        customer_id: string;
        details?: InvoiceDetails$.Inbound | undefined;
        due_at?: string | null | undefined;
        id?: string | undefined;
        invoice_number?: string | null | undefined;
        issued_at?: string | null | undefined;
        items: Array<InvoiceItem$.Inbound>;
        paid_at?: string | null | undefined;
        status?: InvoiceStatus | undefined;
        transaction_id?: string | null | undefined;
        updated_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Invoice, z.ZodTypeDef, Inbound> = z
        .object({
            address_id: z.string(),
            billing_details: BillingDetails1$.inboundSchema,
            billing_period: z.nullable(z.lazy(() => BillingPeriod$.inboundSchema)).optional(),
            business_id: z.nullable(z.string()).optional(),
            checkout: z.nullable(z.lazy(() => Checkout$.inboundSchema)).optional(),
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            currency_code: CurrencyCodeInvoice$,
            custom_data: CustomDataInvoice$.inboundSchema,
            customer_id: z.string(),
            details: InvoiceDetails$.inboundSchema.optional(),
            due_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.string().optional(),
            invoice_number: z.nullable(z.string()).optional(),
            issued_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            items: z.array(InvoiceItem$.inboundSchema),
            paid_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            status: InvoiceStatus$.optional(),
            transaction_id: z.nullable(z.string()).optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                addressId: v.address_id,
                billingDetails: v.billing_details,
                ...(v.billing_period === undefined ? null : { billingPeriod: v.billing_period }),
                ...(v.business_id === undefined ? null : { businessId: v.business_id }),
                ...(v.checkout === undefined ? null : { checkout: v.checkout }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                currencyCode: v.currency_code,
                customData: v.custom_data,
                customerId: v.customer_id,
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.due_at === undefined ? null : { dueAt: v.due_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.invoice_number === undefined ? null : { invoiceNumber: v.invoice_number }),
                ...(v.issued_at === undefined ? null : { issuedAt: v.issued_at }),
                items: v.items,
                ...(v.paid_at === undefined ? null : { paidAt: v.paid_at }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transaction_id === undefined ? null : { transactionId: v.transaction_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        address_id: string;
        billing_details: BillingDetails1$.Outbound;
        billing_period?: BillingPeriod$.Outbound | null | undefined;
        business_id?: string | null | undefined;
        checkout?: Checkout$.Outbound | null | undefined;
        created_at?: string | undefined;
        currency_code: CurrencyCodeInvoice;
        custom_data: CustomDataInvoice$.Outbound;
        customer_id: string;
        details?: InvoiceDetails$.Outbound | undefined;
        due_at?: string | null | undefined;
        id?: string | undefined;
        invoice_number?: string | null | undefined;
        issued_at?: string | null | undefined;
        items: Array<InvoiceItem$.Outbound>;
        paid_at?: string | null | undefined;
        status?: InvoiceStatus | undefined;
        transaction_id?: string | null | undefined;
        updated_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Invoice> = z
        .object({
            addressId: z.string(),
            billingDetails: BillingDetails1$.outboundSchema,
            billingPeriod: z.nullable(z.lazy(() => BillingPeriod$.outboundSchema)).optional(),
            businessId: z.nullable(z.string()).optional(),
            checkout: z.nullable(z.lazy(() => Checkout$.outboundSchema)).optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            currencyCode: CurrencyCodeInvoice$,
            customData: CustomDataInvoice$.outboundSchema,
            customerId: z.string(),
            details: InvoiceDetails$.outboundSchema.optional(),
            dueAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.string().optional(),
            invoiceNumber: z.nullable(z.string()).optional(),
            issuedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            items: z.array(InvoiceItem$.outboundSchema),
            paidAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            status: InvoiceStatus$.optional(),
            transactionId: z.nullable(z.string()).optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                address_id: v.addressId,
                billing_details: v.billingDetails,
                ...(v.billingPeriod === undefined ? null : { billing_period: v.billingPeriod }),
                ...(v.businessId === undefined ? null : { business_id: v.businessId }),
                ...(v.checkout === undefined ? null : { checkout: v.checkout }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                currency_code: v.currencyCode,
                custom_data: v.customData,
                customer_id: v.customerId,
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.dueAt === undefined ? null : { due_at: v.dueAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.invoiceNumber === undefined ? null : { invoice_number: v.invoiceNumber }),
                ...(v.issuedAt === undefined ? null : { issued_at: v.issuedAt }),
                items: v.items,
                ...(v.paidAt === undefined ? null : { paid_at: v.paidAt }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transactionId === undefined ? null : { transaction_id: v.transactionId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace InvoiceInput$ {
    export type Inbound = {
        address_id: string;
        billing_details: BillingDetails1$.Inbound;
        billing_period?: BillingPeriod$.Inbound | null | undefined;
        business_id?: string | null | undefined;
        currency_code: CurrencyCodeInvoice;
        custom_data: CustomDataInvoice$.Inbound;
        customer_id: string;
        details?: InvoiceDetailsInput$.Inbound | undefined;
        items: Array<InvoiceItem$.Inbound>;
    };

    export const inboundSchema: z.ZodType<InvoiceInput, z.ZodTypeDef, Inbound> = z
        .object({
            address_id: z.string(),
            billing_details: BillingDetails1$.inboundSchema,
            billing_period: z.nullable(z.lazy(() => BillingPeriod$.inboundSchema)).optional(),
            business_id: z.nullable(z.string()).optional(),
            currency_code: CurrencyCodeInvoice$,
            custom_data: CustomDataInvoice$.inboundSchema,
            customer_id: z.string(),
            details: InvoiceDetailsInput$.inboundSchema.optional(),
            items: z.array(InvoiceItem$.inboundSchema),
        })
        .transform((v) => {
            return {
                addressId: v.address_id,
                billingDetails: v.billing_details,
                ...(v.billing_period === undefined ? null : { billingPeriod: v.billing_period }),
                ...(v.business_id === undefined ? null : { businessId: v.business_id }),
                currencyCode: v.currency_code,
                customData: v.custom_data,
                customerId: v.customer_id,
                ...(v.details === undefined ? null : { details: v.details }),
                items: v.items,
            };
        });

    export type Outbound = {
        address_id: string;
        billing_details: BillingDetails1$.Outbound;
        billing_period?: BillingPeriod$.Outbound | null | undefined;
        business_id?: string | null | undefined;
        currency_code: CurrencyCodeInvoice;
        custom_data: CustomDataInvoice$.Outbound;
        customer_id: string;
        details?: InvoiceDetailsInput$.Outbound | undefined;
        items: Array<InvoiceItem$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceInput> = z
        .object({
            addressId: z.string(),
            billingDetails: BillingDetails1$.outboundSchema,
            billingPeriod: z.nullable(z.lazy(() => BillingPeriod$.outboundSchema)).optional(),
            businessId: z.nullable(z.string()).optional(),
            currencyCode: CurrencyCodeInvoice$,
            customData: CustomDataInvoice$.outboundSchema,
            customerId: z.string(),
            details: InvoiceDetailsInput$.outboundSchema.optional(),
            items: z.array(InvoiceItem$.outboundSchema),
        })
        .transform((v) => {
            return {
                address_id: v.addressId,
                billing_details: v.billingDetails,
                ...(v.billingPeriod === undefined ? null : { billing_period: v.billingPeriod }),
                ...(v.businessId === undefined ? null : { business_id: v.businessId }),
                currency_code: v.currencyCode,
                custom_data: v.customData,
                customer_id: v.customerId,
                ...(v.details === undefined ? null : { details: v.details }),
                items: v.items,
            };
        });
}
