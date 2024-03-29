/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CurrencyCode2, CurrencyCode2$ } from "./currencycode2";
import { z } from "zod";

/**
 * Breakdown of the total for an adjustment.
 */
export type AdjustmentTotals = {
    /**
     * Supported three-letter ISO 4217 currency code.
     */
    currencyCode?: CurrencyCode2 | undefined;
    /**
     * Total earnings. This is the subtotal minus the Paddle fee.
     *
     * @remarks
     * For tax adjustments, this value is negative, which means a positive effect in the transaction earnings.
     * This is because the fee is originally calculated from the transaction total, so if a tax adjustment is made,
     * then the fee portion of it is returned.
     */
    earnings?: string | undefined;
    /**
     * Total fee taken by Paddle for this adjustment.
     */
    fee?: string | undefined;
    /**
     * Total before tax. For tax adjustments, the value is 0.
     */
    subtotal?: string | undefined;
    /**
     * Total tax on the subtotal.
     */
    tax?: string | undefined;
    /**
     * Total after tax.
     */
    total?: string | undefined;
};

/** @internal */
export namespace AdjustmentTotals$ {
    export type Inbound = {
        currency_code?: CurrencyCode2 | undefined;
        earnings?: string | undefined;
        fee?: string | undefined;
        subtotal?: string | undefined;
        tax?: string | undefined;
        total?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AdjustmentTotals, z.ZodTypeDef, Inbound> = z
        .object({
            currency_code: CurrencyCode2$.optional(),
            earnings: z.string().optional(),
            fee: z.string().optional(),
            subtotal: z.string().optional(),
            tax: z.string().optional(),
            total: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currency_code === undefined ? null : { currencyCode: v.currency_code }),
                ...(v.earnings === undefined ? null : { earnings: v.earnings }),
                ...(v.fee === undefined ? null : { fee: v.fee }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });

    export type Outbound = {
        currency_code?: CurrencyCode2 | undefined;
        earnings?: string | undefined;
        fee?: string | undefined;
        subtotal?: string | undefined;
        tax?: string | undefined;
        total?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AdjustmentTotals> = z
        .object({
            currencyCode: CurrencyCode2$.optional(),
            earnings: z.string().optional(),
            fee: z.string().optional(),
            subtotal: z.string().optional(),
            tax: z.string().optional(),
            total: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currencyCode === undefined ? null : { currency_code: v.currencyCode }),
                ...(v.earnings === undefined ? null : { earnings: v.earnings }),
                ...(v.fee === undefined ? null : { fee: v.fee }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });
}
