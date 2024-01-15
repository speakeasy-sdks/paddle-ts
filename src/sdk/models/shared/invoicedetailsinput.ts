/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ProductInput, ProductInput$ } from "./productinput";
import { z } from "zod";

export type InvoiceDetailsLineItems = {
    /**
     * Represents a product entity.
     */
    product?: ProductInput | undefined;
    quantity?: number | undefined;
    taxRate?: string | undefined;
};

export type InvoiceDetailsInput = {
    lineItems?: Array<InvoiceDetailsLineItems> | undefined;
};

/** @internal */
export namespace InvoiceDetailsLineItems$ {
    export type Inbound = {
        product?: ProductInput$.Inbound | undefined;
        quantity?: number | undefined;
        tax_rate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceDetailsLineItems, z.ZodTypeDef, Inbound> = z
        .object({
            product: ProductInput$.inboundSchema.optional(),
            quantity: z.number().int().optional(),
            tax_rate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.product === undefined ? null : { product: v.product }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.tax_rate === undefined ? null : { taxRate: v.tax_rate }),
            };
        });

    export type Outbound = {
        product?: ProductInput$.Outbound | undefined;
        quantity?: number | undefined;
        tax_rate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceDetailsLineItems> = z
        .object({
            product: ProductInput$.outboundSchema.optional(),
            quantity: z.number().int().optional(),
            taxRate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.product === undefined ? null : { product: v.product }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.taxRate === undefined ? null : { tax_rate: v.taxRate }),
            };
        });
}

/** @internal */
export namespace InvoiceDetailsInput$ {
    export type Inbound = {
        line_items?: Array<InvoiceDetailsLineItems$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceDetailsInput, z.ZodTypeDef, Inbound> = z
        .object({
            line_items: z.array(z.lazy(() => InvoiceDetailsLineItems$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.line_items === undefined ? null : { lineItems: v.line_items }),
            };
        });

    export type Outbound = {
        line_items?: Array<InvoiceDetailsLineItems$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceDetailsInput> = z
        .object({
            lineItems: z.array(z.lazy(() => InvoiceDetailsLineItems$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.lineItems === undefined ? null : { line_items: v.lineItems }),
            };
        });
}
