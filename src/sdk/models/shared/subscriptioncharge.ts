/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EffectiveFrom, EffectiveFrom$ } from "./effectivefrom";
import { z } from "zod";

export type Items = {
    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    priceId: string;
    /**
     * Quantity to charge for.
     */
    quantity: number;
};

export type SubscriptionCharge = {
    /**
     * When this scheduled change should take effect from. `immediately` is only allowed when canceling or resuming a paused subscription.
     */
    effectiveFrom: EffectiveFrom;
    items: Array<Items>;
};

/** @internal */
export namespace Items$ {
    export type Inbound = {
        price_id: string;
        quantity: number;
    };

    export const inboundSchema: z.ZodType<Items, z.ZodTypeDef, Inbound> = z
        .object({
            price_id: z.string(),
            quantity: z.number(),
        })
        .transform((v) => {
            return {
                priceId: v.price_id,
                quantity: v.quantity,
            };
        });

    export type Outbound = {
        price_id: string;
        quantity: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Items> = z
        .object({
            priceId: z.string(),
            quantity: z.number(),
        })
        .transform((v) => {
            return {
                price_id: v.priceId,
                quantity: v.quantity,
            };
        });
}

/** @internal */
export namespace SubscriptionCharge$ {
    export type Inbound = {
        effective_from: EffectiveFrom;
        items: Array<Items$.Inbound>;
    };

    export const inboundSchema: z.ZodType<SubscriptionCharge, z.ZodTypeDef, Inbound> = z
        .object({
            effective_from: EffectiveFrom$,
            items: z.array(z.lazy(() => Items$.inboundSchema)),
        })
        .transform((v) => {
            return {
                effectiveFrom: v.effective_from,
                items: v.items,
            };
        });

    export type Outbound = {
        effective_from: EffectiveFrom;
        items: Array<Items$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionCharge> = z
        .object({
            effectiveFrom: EffectiveFrom$,
            items: z.array(z.lazy(() => Items$.outboundSchema)),
        })
        .transform((v) => {
            return {
                effective_from: v.effectiveFrom,
                items: v.items,
            };
        });
}
