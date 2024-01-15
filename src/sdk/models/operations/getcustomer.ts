/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetCustomerRequest = {
    /**
     * Paddle ID of the customer entity to work with.
     */
    customerId: string;
};

/**
 * OK
 */
export type GetCustomerResponseBody = {
    /**
     * Represents a customer entity with included entities.
     */
    data: shared.CustomerIncludes;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type GetCustomerResponse = {
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
    object?: GetCustomerResponseBody | undefined;
};

/** @internal */
export namespace GetCustomerRequest$ {
    export type Inbound = {
        customer_id: string;
    };

    export const inboundSchema: z.ZodType<GetCustomerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            customer_id: z.string(),
        })
        .transform((v) => {
            return {
                customerId: v.customer_id,
            };
        });

    export type Outbound = {
        customer_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomerRequest> = z
        .object({
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                customer_id: v.customerId,
            };
        });
}

/** @internal */
export namespace GetCustomerResponseBody$ {
    export type Inbound = {
        data: shared.CustomerIncludes$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetCustomerResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: shared.CustomerIncludes$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.CustomerIncludes$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomerResponseBody> = z
        .object({
            data: shared.CustomerIncludes$.outboundSchema,
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
export namespace GetCustomerResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: GetCustomerResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetCustomerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetCustomerResponseBody$.inboundSchema).optional(),
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
        object?: GetCustomerResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomerResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetCustomerResponseBody$.outboundSchema).optional(),
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
