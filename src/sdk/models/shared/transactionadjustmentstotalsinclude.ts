/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CurrencyCode2, CurrencyCode2$ } from "./currencycode2";
import { z } from "zod";

/**
 * Breakdown of the total adjustments by adjustment action.
 */
export type Breakdown = {
    /**
     * Total amount of chargeback adjustments.
     */
    chargeback?: string | undefined;
    /**
     * Total amount of credit adjustments.
     */
    credit?: string | undefined;
    /**
     * Total amount of refund adjustments.
     */
    refund?: string | undefined;
};

/**
 * Breakdown of all the adjustments made against a transaction in the transaction currency.
 */
export type TransactionAdjustmentsTotalsInclude = {
    /**
     * Breakdown of the total adjustments by adjustment action.
     */
    breakdown?: Breakdown | undefined;
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
     * As a result, the earnings from all the adjustments performed could be either negative, positive or zero.
     */
    earnings?: string | undefined;
    /**
     * Total fee taken by Paddle.
     */
    fee?: string | undefined;
    /**
     * Total before tax.
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
export namespace Breakdown$ {
    export type Inbound = {
        chargeback?: string | undefined;
        credit?: string | undefined;
        refund?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Breakdown, z.ZodTypeDef, Inbound> = z
        .object({
            chargeback: z.string().optional(),
            credit: z.string().optional(),
            refund: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.chargeback === undefined ? null : { chargeback: v.chargeback }),
                ...(v.credit === undefined ? null : { credit: v.credit }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
            };
        });

    export type Outbound = {
        chargeback?: string | undefined;
        credit?: string | undefined;
        refund?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Breakdown> = z
        .object({
            chargeback: z.string().optional(),
            credit: z.string().optional(),
            refund: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.chargeback === undefined ? null : { chargeback: v.chargeback }),
                ...(v.credit === undefined ? null : { credit: v.credit }),
                ...(v.refund === undefined ? null : { refund: v.refund }),
            };
        });
}

/** @internal */
export namespace TransactionAdjustmentsTotalsInclude$ {
    export type Inbound = {
        breakdown?: Breakdown$.Inbound | undefined;
        currency_code?: CurrencyCode2 | undefined;
        earnings?: string | undefined;
        fee?: string | undefined;
        subtotal?: string | undefined;
        tax?: string | undefined;
        total?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        TransactionAdjustmentsTotalsInclude,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            breakdown: z.lazy(() => Breakdown$.inboundSchema).optional(),
            currency_code: CurrencyCode2$.optional(),
            earnings: z.string().optional(),
            fee: z.string().optional(),
            subtotal: z.string().optional(),
            tax: z.string().optional(),
            total: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.breakdown === undefined ? null : { breakdown: v.breakdown }),
                ...(v.currency_code === undefined ? null : { currencyCode: v.currency_code }),
                ...(v.earnings === undefined ? null : { earnings: v.earnings }),
                ...(v.fee === undefined ? null : { fee: v.fee }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });

    export type Outbound = {
        breakdown?: Breakdown$.Outbound | undefined;
        currency_code?: CurrencyCode2 | undefined;
        earnings?: string | undefined;
        fee?: string | undefined;
        subtotal?: string | undefined;
        tax?: string | undefined;
        total?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TransactionAdjustmentsTotalsInclude
    > = z
        .object({
            breakdown: z.lazy(() => Breakdown$.outboundSchema).optional(),
            currencyCode: CurrencyCode2$.optional(),
            earnings: z.string().optional(),
            fee: z.string().optional(),
            subtotal: z.string().optional(),
            tax: z.string().optional(),
            total: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.breakdown === undefined ? null : { breakdown: v.breakdown }),
                ...(v.currencyCode === undefined ? null : { currency_code: v.currencyCode }),
                ...(v.earnings === undefined ? null : { earnings: v.earnings }),
                ...(v.fee === undefined ? null : { fee: v.fee }),
                ...(v.subtotal === undefined ? null : { subtotal: v.subtotal }),
                ...(v.tax === undefined ? null : { tax: v.tax }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });
}
