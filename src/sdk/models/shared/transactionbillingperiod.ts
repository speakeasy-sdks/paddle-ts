/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The period of time that this transaction covers. This is used by recurring subscription transactions as well as all invoicing transactions to indicate the period of time the charges in the transaction relate to
 */
export type TransactionBillingPeriod = {
    /**
     * End of the billing period. A timestamp following the RFC 3339 standard
     */
    endsAt: Date;
    /**
     * Start of the billing period. A timestamp following the RFC 3339 standard. Cannot be a future date.
     */
    startsAt: Date;
};

/** @internal */
export namespace TransactionBillingPeriod$ {
    export type Inbound = {
        ends_at: string;
        starts_at: string;
    };

    export const inboundSchema: z.ZodType<TransactionBillingPeriod, z.ZodTypeDef, Inbound> = z
        .object({
            ends_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            starts_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                endsAt: v.ends_at,
                startsAt: v.starts_at,
            };
        });

    export type Outbound = {
        ends_at: string;
        starts_at: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionBillingPeriod> = z
        .object({
            endsAt: z.date().transform((v) => v.toISOString()),
            startsAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                ends_at: v.endsAt,
                starts_at: v.startsAt,
            };
        });
}
