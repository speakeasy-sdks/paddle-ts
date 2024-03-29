/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * OK
 */
export type PricePreviewResponseBody = {
    data: shared.TransactionPricingPreviewOutput;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type PricePreviewResponse = {
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
    object?: PricePreviewResponseBody | undefined;
};

/** @internal */
export namespace PricePreviewResponseBody$ {
    export type Inbound = {
        data: shared.TransactionPricingPreviewOutput$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<PricePreviewResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: shared.TransactionPricingPreviewOutput$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.TransactionPricingPreviewOutput$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PricePreviewResponseBody> = z
        .object({
            data: shared.TransactionPricingPreviewOutput$.outboundSchema,
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
export namespace PricePreviewResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: PricePreviewResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PricePreviewResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PricePreviewResponseBody$.inboundSchema).optional(),
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
        object?: PricePreviewResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PricePreviewResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PricePreviewResponseBody$.outboundSchema).optional(),
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
