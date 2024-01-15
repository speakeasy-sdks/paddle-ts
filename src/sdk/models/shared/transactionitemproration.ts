/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TimePeriod, TimePeriod$ } from "./timeperiod";
import { z } from "zod";

/**
 * How proration was calculated for this item. Populated when a transaction is created from a subscription change, where `proration_billing_mode` was `prorated_immediately` or `prorated_next_billing_period`. Set automatically by Paddle.
 */
export type TransactionItemProration = {
    billingPeriod?: TimePeriod | undefined;
    /**
     * Rate used to calculate proration.
     */
    rate?: string | undefined;
};

/** @internal */
export namespace TransactionItemProration$ {
    export type Inbound = {
        billing_period?: TimePeriod$.Inbound | undefined;
        rate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TransactionItemProration, z.ZodTypeDef, Inbound> = z
        .object({
            billing_period: TimePeriod$.inboundSchema.optional(),
            rate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.billing_period === undefined ? null : { billingPeriod: v.billing_period }),
                ...(v.rate === undefined ? null : { rate: v.rate }),
            };
        });

    export type Outbound = {
        billing_period?: TimePeriod$.Outbound | undefined;
        rate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionItemProration> = z
        .object({
            billingPeriod: TimePeriod$.outboundSchema.optional(),
            rate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.billingPeriod === undefined ? null : { billing_period: v.billingPeriod }),
                ...(v.rate === undefined ? null : { rate: v.rate }),
            };
        });
}
