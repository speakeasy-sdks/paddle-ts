/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Type of credit or debit card used to pay.
 */
export enum MethodDetailsSchemasType {
    Visa = "visa",
    Mastercard = "mastercard",
    Maestro = "maestro",
    AmericanExpress = "american_express",
    Discover = "discover",
    DinersClub = "diners_club",
    Jcb = "jcb",
    UnionPay = "union_pay",
    Mada = "mada",
    Unknown = "unknown",
}

/**
 * Information about the credit or debit card used to pay. Only returned when `type` is `card`.
 */
export type Card = {
    /**
     * Month of the expiry date of the card used to pay.
     */
    expiryMonth?: number | undefined;
    /**
     * Year of the expiry year of the card used to pay.
     */
    expiryYear?: number | undefined;
    /**
     * Last four digits of the card used to pay.
     */
    last4?: string | undefined;
    /**
     * Type of credit or debit card used to pay.
     */
    type?: MethodDetailsSchemasType | undefined;
};

/**
 * Type of payment method used for this payment attempt.
 */
export enum MethodDetailsType {
    Card = "card",
    Paypal = "paypal",
    ApplePay = "apple_pay",
    WireTransfer = "wire_transfer",
    Alipay = "alipay",
    Ideal = "ideal",
    GooglePay = "google_pay",
    Offline = "offline",
    Unknown = "unknown",
}

/**
 * Information about the payment method used for a payment attempt.
 */
export type MethodDetails = {
    /**
     * Information about the credit or debit card used to pay. Only returned when `type` is `card`.
     */
    card?: Card | null | undefined;
    /**
     * Type of payment method used for this payment attempt.
     */
    type?: MethodDetailsType | undefined;
};

/** @internal */
export const MethodDetailsSchemasType$ = z.nativeEnum(MethodDetailsSchemasType);

/** @internal */
export namespace Card$ {
    export type Inbound = {
        expiry_month?: number | undefined;
        expiry_year?: number | undefined;
        last4?: string | undefined;
        type?: MethodDetailsSchemasType | undefined;
    };

    export const inboundSchema: z.ZodType<Card, z.ZodTypeDef, Inbound> = z
        .object({
            expiry_month: z.number().optional(),
            expiry_year: z.number().optional(),
            last4: z.string().optional(),
            type: MethodDetailsSchemasType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiry_month === undefined ? null : { expiryMonth: v.expiry_month }),
                ...(v.expiry_year === undefined ? null : { expiryYear: v.expiry_year }),
                ...(v.last4 === undefined ? null : { last4: v.last4 }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        expiry_month?: number | undefined;
        expiry_year?: number | undefined;
        last4?: string | undefined;
        type?: MethodDetailsSchemasType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Card> = z
        .object({
            expiryMonth: z.number().optional(),
            expiryYear: z.number().optional(),
            last4: z.string().optional(),
            type: MethodDetailsSchemasType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiryMonth === undefined ? null : { expiry_month: v.expiryMonth }),
                ...(v.expiryYear === undefined ? null : { expiry_year: v.expiryYear }),
                ...(v.last4 === undefined ? null : { last4: v.last4 }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export const MethodDetailsType$ = z.nativeEnum(MethodDetailsType);

/** @internal */
export namespace MethodDetails$ {
    export type Inbound = {
        card?: Card$.Inbound | null | undefined;
        type?: MethodDetailsType | undefined;
    };

    export const inboundSchema: z.ZodType<MethodDetails, z.ZodTypeDef, Inbound> = z
        .object({
            card: z.nullable(z.lazy(() => Card$.inboundSchema)).optional(),
            type: MethodDetailsType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.card === undefined ? null : { card: v.card }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        card?: Card$.Outbound | null | undefined;
        type?: MethodDetailsType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MethodDetails> = z
        .object({
            card: z.nullable(z.lazy(() => Card$.outboundSchema)).optional(),
            type: MethodDetailsType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.card === undefined ? null : { card: v.card }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
