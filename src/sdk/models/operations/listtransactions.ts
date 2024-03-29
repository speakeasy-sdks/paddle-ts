/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListTransactionsRequest = {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    after?: string | undefined;
    /**
     * Return entities billed at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `billed_at=2023-04-18T17:03:26` or `billed_at[LT]=2023-04-18T17:03:26`.
     */
    billedAt?: string | undefined;
    /**
     * Return entities that match the specified collection mode.
     */
    collectionMode?: shared.CollectionMode | undefined;
    /**
     * Return entities created at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `created_at=2023-04-18T17:03:26` or `created_at[LT]=2023-04-18T17:03:26`.
     */
    createdAt?: string | undefined;
    /**
     * Return entities related to the specified customer. Use a comma separated list to specify multiple customer IDs.
     */
    customerId?: string | undefined;
    /**
     * Return only the IDs specified. Use a comma separated list to get multiple entities.
     */
    id?: string | undefined;
    /**
     * Include related entities in the response.
     */
    include?: shared.IncludeTransaction | undefined;
    /**
     * Return entities that match the invoice number. Use a comma separated list to specify multiple invoice numbers.
     */
    invoiceNumber?: string | undefined;
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`).
     */
    orderBy?: string | undefined;
    /**
     * Set how many entities are returned per page.
     */
    perPage?: number | undefined;
    /**
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    status?: shared.StatusTransaction | undefined;
    /**
     * Return entities related to the specified subscription. Use a comma separated list to specify multiple subscription IDs.
     */
    subscriptionId?: string | undefined;
    /**
     * Return entities updated at a specific time. Pass an RFC 3339 datetime string, or use `[LT]` (less than), `[LTE]` (less than or equal to), `[GT]` (greater than), or `[GTE]` (greater than or equal to) operators. For example, `updated_at=2023-04-18T17:03:26` or `updated_at[LT]=2023-04-18T17:03:26`.
     */
    updatedAt?: string | undefined;
};

/**
 * OK
 */
export type ListTransactionsResponseBody = {
    data: Array<shared.TransactionIncludes>;
    /**
     * Information about this response.
     */
    meta: shared.MetaPaginated;
};

export type ListTransactionsResponse = {
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
    object?: ListTransactionsResponseBody | undefined;
};

/** @internal */
export namespace ListTransactionsRequest$ {
    export type Inbound = {
        after?: string | undefined;
        billed_at?: string | undefined;
        collection_mode?: shared.CollectionMode | undefined;
        created_at?: string | undefined;
        customer_id?: string | undefined;
        id?: string | undefined;
        include?: shared.IncludeTransaction | undefined;
        invoice_number?: string | undefined;
        order_by?: string | undefined;
        per_page?: number | undefined;
        status?: shared.StatusTransaction | undefined;
        subscription_id?: string | undefined;
        updated_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            after: z.string().optional(),
            billed_at: z.string().optional(),
            collection_mode: shared.CollectionMode$.optional(),
            created_at: z.string().optional(),
            customer_id: z.string().optional(),
            id: z.string().optional(),
            include: shared.IncludeTransaction$.optional(),
            invoice_number: z.string().optional(),
            order_by: z.string().default("id[ASC]"),
            per_page: z.number().int().default(30),
            status: shared.StatusTransaction$.optional(),
            subscription_id: z.string().optional(),
            updated_at: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.billed_at === undefined ? null : { billedAt: v.billed_at }),
                ...(v.collection_mode === undefined ? null : { collectionMode: v.collection_mode }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.customer_id === undefined ? null : { customerId: v.customer_id }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.include === undefined ? null : { include: v.include }),
                ...(v.invoice_number === undefined ? null : { invoiceNumber: v.invoice_number }),
                ...(v.order_by === undefined ? null : { orderBy: v.order_by }),
                ...(v.per_page === undefined ? null : { perPage: v.per_page }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.subscription_id === undefined ? null : { subscriptionId: v.subscription_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        after?: string | undefined;
        billed_at?: string | undefined;
        collection_mode?: shared.CollectionMode | undefined;
        created_at?: string | undefined;
        customer_id?: string | undefined;
        id?: string | undefined;
        include?: shared.IncludeTransaction | undefined;
        invoice_number?: string | undefined;
        order_by: string;
        per_page: number;
        status?: shared.StatusTransaction | undefined;
        subscription_id?: string | undefined;
        updated_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsRequest> = z
        .object({
            after: z.string().optional(),
            billedAt: z.string().optional(),
            collectionMode: shared.CollectionMode$.optional(),
            createdAt: z.string().optional(),
            customerId: z.string().optional(),
            id: z.string().optional(),
            include: shared.IncludeTransaction$.optional(),
            invoiceNumber: z.string().optional(),
            orderBy: z.string().default("id[ASC]"),
            perPage: z.number().int().default(30),
            status: shared.StatusTransaction$.optional(),
            subscriptionId: z.string().optional(),
            updatedAt: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.billedAt === undefined ? null : { billed_at: v.billedAt }),
                ...(v.collectionMode === undefined ? null : { collection_mode: v.collectionMode }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.customerId === undefined ? null : { customer_id: v.customerId }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.include === undefined ? null : { include: v.include }),
                ...(v.invoiceNumber === undefined ? null : { invoice_number: v.invoiceNumber }),
                order_by: v.orderBy,
                per_page: v.perPage,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.subscriptionId === undefined ? null : { subscription_id: v.subscriptionId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace ListTransactionsResponseBody$ {
    export type Inbound = {
        data: Array<shared.TransactionIncludes$.Inbound>;
        meta: shared.MetaPaginated$.Inbound;
    };

    export const inboundSchema: z.ZodType<ListTransactionsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(shared.TransactionIncludes$.inboundSchema),
            meta: shared.MetaPaginated$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<shared.TransactionIncludes$.Outbound>;
        meta: shared.MetaPaginated$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsResponseBody> = z
        .object({
            data: z.array(shared.TransactionIncludes$.outboundSchema),
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
export namespace ListTransactionsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: ListTransactionsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => ListTransactionsResponseBody$.inboundSchema).optional(),
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
        object?: ListTransactionsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => ListTransactionsResponseBody$.outboundSchema).optional(),
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
