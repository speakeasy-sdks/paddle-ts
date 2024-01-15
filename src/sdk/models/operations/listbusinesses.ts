/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListBusinessesRequest = {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    after?: string | undefined;
    /**
     * Paddle ID of the customer entity to work with.
     */
    customerId: string;
    /**
     * Return only the IDs specified. Use a comma separated list to get multiple entities.
     */
    id?: string | undefined;
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`).
     */
    orderBy?: string | undefined;
    /**
     * Set how many entities are returned per page.
     */
    perPage?: number | undefined;
    search?: string | undefined;
    /**
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    status?: shared.Status | undefined;
};

/**
 * OK
 */
export type ListBusinessesResponseBody = {
    data: Array<shared.Business>;
    /**
     * Information about this response.
     */
    meta: shared.MetaPaginated;
};

export type ListBusinessesResponse = {
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
    object?: ListBusinessesResponseBody | undefined;
};

/** @internal */
export namespace ListBusinessesRequest$ {
    export type Inbound = {
        after?: string | undefined;
        customer_id: string;
        id?: string | undefined;
        order_by?: string | undefined;
        per_page?: number | undefined;
        search?: string | undefined;
        status?: shared.Status | undefined;
    };

    export const inboundSchema: z.ZodType<ListBusinessesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            after: z.string().optional(),
            customer_id: z.string(),
            id: z.string().optional(),
            order_by: z.string().default("id[ASC]"),
            per_page: z.number().int().default(10),
            search: z.string().optional(),
            status: shared.Status$.default(shared.Status.Active),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                customerId: v.customer_id,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.order_by === undefined ? null : { orderBy: v.order_by }),
                ...(v.per_page === undefined ? null : { perPage: v.per_page }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        after?: string | undefined;
        customer_id: string;
        id?: string | undefined;
        order_by: string;
        per_page: number;
        search?: string | undefined;
        status: shared.Status;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBusinessesRequest> = z
        .object({
            after: z.string().optional(),
            customerId: z.string(),
            id: z.string().optional(),
            orderBy: z.string().default("id[ASC]"),
            perPage: z.number().int().default(10),
            search: z.string().optional(),
            status: shared.Status$.default(shared.Status.Active),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                customer_id: v.customerId,
                ...(v.id === undefined ? null : { id: v.id }),
                order_by: v.orderBy,
                per_page: v.perPage,
                ...(v.search === undefined ? null : { search: v.search }),
                status: v.status,
            };
        });
}

/** @internal */
export namespace ListBusinessesResponseBody$ {
    export type Inbound = {
        data: Array<shared.Business$.Inbound>;
        meta: shared.MetaPaginated$.Inbound;
    };

    export const inboundSchema: z.ZodType<ListBusinessesResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(shared.Business$.inboundSchema),
            meta: shared.MetaPaginated$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<shared.Business$.Outbound>;
        meta: shared.MetaPaginated$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBusinessesResponseBody> = z
        .object({
            data: z.array(shared.Business$.outboundSchema),
            meta: shared.MetaPaginated$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });
}

/** @internal */
export namespace ListBusinessesResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: ListBusinessesResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListBusinessesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => ListBusinessesResponseBody$.inboundSchema).optional(),
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
        object?: ListBusinessesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBusinessesResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => ListBusinessesResponseBody$.outboundSchema).optional(),
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
