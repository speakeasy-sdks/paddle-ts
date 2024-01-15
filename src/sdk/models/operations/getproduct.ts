/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetProductRequest = {
    /**
     * Include related entities in the response.
     */
    include?: shared.IncludeProduct | undefined;
    /**
     * Paddle ID of the product entity to work with.
     */
    productId: string;
};

/**
 * OK
 */
export type GetProductResponseBody = {
    /**
     * Represents a product entity with included entities.
     */
    data: shared.ProductIncludes;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type GetProductResponse = {
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
    object?: GetProductResponseBody | undefined;
};

/** @internal */
export namespace GetProductRequest$ {
    export type Inbound = {
        include?: shared.IncludeProduct | undefined;
        product_id: string;
    };

    export const inboundSchema: z.ZodType<GetProductRequest, z.ZodTypeDef, Inbound> = z
        .object({
            include: shared.IncludeProduct$.optional(),
            product_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.include === undefined ? null : { include: v.include }),
                productId: v.product_id,
            };
        });

    export type Outbound = {
        include?: shared.IncludeProduct | undefined;
        product_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProductRequest> = z
        .object({
            include: shared.IncludeProduct$.optional(),
            productId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.include === undefined ? null : { include: v.include }),
                product_id: v.productId,
            };
        });
}

/** @internal */
export namespace GetProductResponseBody$ {
    export type Inbound = {
        data: shared.ProductIncludes$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetProductResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: shared.ProductIncludes$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.ProductIncludes$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProductResponseBody> = z
        .object({
            data: shared.ProductIncludes$.outboundSchema,
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
export namespace GetProductResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: GetProductResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetProductResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetProductResponseBody$.inboundSchema).optional(),
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
        object?: GetProductResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProductResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetProductResponseBody$.outboundSchema).optional(),
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
