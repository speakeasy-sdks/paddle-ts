/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateAddressRequest = {
    address?: shared.AddressInput | undefined;
    /**
     * Paddle ID of the address entity to work with.
     */
    addressId: string;
    /**
     * Paddle ID of the customer entity to work with.
     */
    customerId: string;
};

/**
 * OK
 */
export type UpdateAddressResponseBody = {
    /**
     * Represents an address entity.
     */
    data: shared.Address;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type UpdateAddressResponse = {
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
    object?: UpdateAddressResponseBody | undefined;
};

/** @internal */
export namespace UpdateAddressRequest$ {
    export type Inbound = {
        address?: shared.AddressInput$.Inbound | undefined;
        address_id: string;
        customer_id: string;
    };

    export const inboundSchema: z.ZodType<UpdateAddressRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: shared.AddressInput$.inboundSchema.optional(),
            address_id: z.string(),
            customer_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                addressId: v.address_id,
                customerId: v.customer_id,
            };
        });

    export type Outbound = {
        address?: shared.AddressInput$.Outbound | undefined;
        address_id: string;
        customer_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAddressRequest> = z
        .object({
            address: shared.AddressInput$.outboundSchema.optional(),
            addressId: z.string(),
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                address_id: v.addressId,
                customer_id: v.customerId,
            };
        });
}

/** @internal */
export namespace UpdateAddressResponseBody$ {
    export type Inbound = {
        data: shared.Address$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateAddressResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: shared.Address$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.Address$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAddressResponseBody> = z
        .object({
            data: shared.Address$.outboundSchema,
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
export namespace UpdateAddressResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateAddressResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateAddressResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateAddressResponseBody$.inboundSchema).optional(),
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
        object?: UpdateAddressResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAddressResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UpdateAddressResponseBody$.outboundSchema).optional(),
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
