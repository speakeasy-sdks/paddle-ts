/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Your own structured key-value data.
 */
export type CustomData = {};

/** @internal */
export namespace CustomData$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CustomData, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomData> = z.object({});
}
