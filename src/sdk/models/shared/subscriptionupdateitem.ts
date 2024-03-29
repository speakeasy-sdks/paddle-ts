/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SubscriptionUpdateItem = {
    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    priceId: string;
    /**
     * Quantity of this item to add to the subscription. If updating an existing item and not changing the quantity, you may omit `quantity`.
     */
    quantity?: number | undefined;
};

/** @internal */
export namespace SubscriptionUpdateItem$ {
    export type Inbound = {
        price_id: string;
        quantity?: number | undefined;
    };

    export const inboundSchema: z.ZodType<SubscriptionUpdateItem, z.ZodTypeDef, Inbound> = z
        .object({
            price_id: z.string(),
            quantity: z.number().optional(),
        })
        .transform((v) => {
            return {
                priceId: v.price_id,
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
            };
        });

    export type Outbound = {
        price_id: string;
        quantity?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionUpdateItem> = z
        .object({
            priceId: z.string(),
            quantity: z.number().optional(),
        })
        .transform((v) => {
            return {
                price_id: v.priceId,
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
            };
        });
}
