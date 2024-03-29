/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CurrencyCode2, CurrencyCode2$ } from "./currencycode2";
import { CustomerBalance, CustomerBalance$ } from "./customerbalance";
import { z } from "zod";

/**
 * Represents a credit balance for a customer.
 */
export type CreditBalance = {
    balance?: CustomerBalance | undefined;
    /**
     * Supported three-letter ISO 4217 currency code.
     */
    currencyCode?: CurrencyCode2 | undefined;
    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    customerId?: string | undefined;
};

/** @internal */
export namespace CreditBalance$ {
    export type Inbound = {
        balance?: CustomerBalance$.Inbound | undefined;
        currency_code?: CurrencyCode2 | undefined;
        customer_id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreditBalance, z.ZodTypeDef, Inbound> = z
        .object({
            balance: CustomerBalance$.inboundSchema.optional(),
            currency_code: CurrencyCode2$.optional(),
            customer_id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currency_code === undefined ? null : { currencyCode: v.currency_code }),
                ...(v.customer_id === undefined ? null : { customerId: v.customer_id }),
            };
        });

    export type Outbound = {
        balance?: CustomerBalance$.Outbound | undefined;
        currency_code?: CurrencyCode2 | undefined;
        customer_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreditBalance> = z
        .object({
            balance: CustomerBalance$.outboundSchema.optional(),
            currencyCode: CurrencyCode2$.optional(),
            customerId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currencyCode === undefined ? null : { currency_code: v.currencyCode }),
                ...(v.customerId === undefined ? null : { customer_id: v.customerId }),
            };
        });
}
