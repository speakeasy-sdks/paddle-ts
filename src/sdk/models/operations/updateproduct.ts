/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateProductRequest = {
    productPatch?: shared.ProductPatch | undefined;
    /**
     * Paddle ID of the product entity to work with.
     */
    productId: string;
};

/**
 * OK
 */
export type UpdateProductResponseBody = {
    /**
     * Represents a product entity.
     */
    data: shared.Product;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type UpdateProductResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * OK
     */
    object?: UpdateProductResponseBody | undefined;
};

/** @internal */
export namespace UpdateProductRequest$ {
    export type Inbound = {
        "product-patch"?: shared.ProductPatch$.Inbound | undefined;
        product_id: string;
    };

    export const inboundSchema: z.ZodType<UpdateProductRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "product-patch": shared.ProductPatch$.inboundSchema.optional(),
            product_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v["product-patch"] === undefined ? null : { productPatch: v["product-patch"] }),
                productId: v.product_id,
            };
        });

    export type Outbound = {
        "product-patch"?: shared.ProductPatch$.Outbound | undefined;
        product_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProductRequest> = z
        .object({
            productPatch: shared.ProductPatch$.outboundSchema.optional(),
            productId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.productPatch === undefined ? null : { "product-patch": v.productPatch }),
                product_id: v.productId,
            };
        });
}

/** @internal */
export namespace UpdateProductResponseBody$ {
    export type Inbound = {
        data: shared.Product$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateProductResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: shared.Product$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.Product$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProductResponseBody> = z
        .object({
            data: shared.Product$.outboundSchema,
            meta: shared.Meta$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });
}

/** @internal */
export namespace UpdateProductResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateProductResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateProductResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateProductResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        object?: UpdateProductResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProductResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UpdateProductResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
