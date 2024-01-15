/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CustomData, CustomData$ } from "./customdata";
import { TaxCategory1, TaxCategory1$ } from "./taxcategory1";
import { z } from "zod";

export type ProductCreate = {
    /**
     * Your own structured key-value data.
     */
    customData?: CustomData | null | undefined;
    /**
     * Short description for this product. Included in the checkout and on some customer documents.
     */
    description?: string | null | undefined;
    /**
     * Image for this product. Included in the checkout and on some customer documents.
     */
    imageUrl?: string | null | undefined;
    /**
     * Name of this product.
     */
    name: string;
    /**
     * Tax category for this product. Used for charging the correct rate of tax. Selected tax category must be enabled on your Paddle account.
     */
    taxCategory: TaxCategory1;
};

/** @internal */
export namespace ProductCreate$ {
    export type Inbound = {
        custom_data?: CustomData$.Inbound | null | undefined;
        description?: string | null | undefined;
        image_url?: string | null | undefined;
        name: string;
        tax_category: TaxCategory1;
    };

    export const inboundSchema: z.ZodType<ProductCreate, z.ZodTypeDef, Inbound> = z
        .object({
            custom_data: z.nullable(CustomData$.inboundSchema).optional(),
            description: z.nullable(z.string()).optional(),
            image_url: z.nullable(z.string()).optional(),
            name: z.string(),
            tax_category: TaxCategory1$,
        })
        .transform((v) => {
            return {
                ...(v.custom_data === undefined ? null : { customData: v.custom_data }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.image_url === undefined ? null : { imageUrl: v.image_url }),
                name: v.name,
                taxCategory: v.tax_category,
            };
        });

    export type Outbound = {
        custom_data?: CustomData$.Outbound | null | undefined;
        description?: string | null | undefined;
        image_url?: string | null | undefined;
        name: string;
        tax_category: TaxCategory1;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductCreate> = z
        .object({
            customData: z.nullable(CustomData$.outboundSchema).optional(),
            description: z.nullable(z.string()).optional(),
            imageUrl: z.nullable(z.string()).optional(),
            name: z.string(),
            taxCategory: TaxCategory1$,
        })
        .transform((v) => {
            return {
                ...(v.customData === undefined ? null : { custom_data: v.customData }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.imageUrl === undefined ? null : { image_url: v.imageUrl }),
                name: v.name,
                tax_category: v.taxCategory,
            };
        });
}
