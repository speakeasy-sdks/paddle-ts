/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListNotificationsRequest = {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    after?: string | undefined;
    /**
     * Return entities that contain the Paddle ID specified. Pass a transaction, customer, or subscription ID.
     */
    filter?: string | undefined;
    /**
     * Return entities from a specific time.
     */
    from?: string | undefined;
    /**
     * Return entities related to the specified notification destination. Use a comma separated list to specify multiple notification destination IDs.
     */
    notificationSettingId?: string | undefined;
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
    status?: shared.StatusNotification | undefined;
    /**
     * Return entities up to a specific time.
     */
    to?: string | undefined;
};

/**
 * OK
 */
export type ListNotificationsResponseBody = {
    data: Array<shared.Notification>;
    /**
     * Information about this response.
     */
    meta: shared.MetaPaginated;
};

export type ListNotificationsResponse = {
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
    object?: ListNotificationsResponseBody | undefined;
};

/** @internal */
export namespace ListNotificationsRequest$ {
    export type Inbound = {
        after?: string | undefined;
        filter?: string | undefined;
        from?: string | undefined;
        notification_setting_id?: string | undefined;
        order_by?: string | undefined;
        per_page?: number | undefined;
        search?: string | undefined;
        status?: shared.StatusNotification | undefined;
        to?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListNotificationsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            after: z.string().optional(),
            filter: z.string().optional(),
            from: z.string().optional(),
            notification_setting_id: z.string().optional(),
            order_by: z.string().default("id[ASC]"),
            per_page: z.number().int().default(10),
            search: z.string().optional(),
            status: shared.StatusNotification$.optional(),
            to: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.notification_setting_id === undefined
                    ? null
                    : { notificationSettingId: v.notification_setting_id }),
                ...(v.order_by === undefined ? null : { orderBy: v.order_by }),
                ...(v.per_page === undefined ? null : { perPage: v.per_page }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.to === undefined ? null : { to: v.to }),
            };
        });

    export type Outbound = {
        after?: string | undefined;
        filter?: string | undefined;
        from?: string | undefined;
        notification_setting_id?: string | undefined;
        order_by: string;
        per_page: number;
        search?: string | undefined;
        status?: shared.StatusNotification | undefined;
        to?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListNotificationsRequest> = z
        .object({
            after: z.string().optional(),
            filter: z.string().optional(),
            from: z.string().optional(),
            notificationSettingId: z.string().optional(),
            orderBy: z.string().default("id[ASC]"),
            perPage: z.number().int().default(10),
            search: z.string().optional(),
            status: shared.StatusNotification$.optional(),
            to: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.notificationSettingId === undefined
                    ? null
                    : { notification_setting_id: v.notificationSettingId }),
                order_by: v.orderBy,
                per_page: v.perPage,
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.to === undefined ? null : { to: v.to }),
            };
        });
}

/** @internal */
export namespace ListNotificationsResponseBody$ {
    export type Inbound = {
        data: Array<shared.Notification$.Inbound>;
        meta: shared.MetaPaginated$.Inbound;
    };

    export const inboundSchema: z.ZodType<ListNotificationsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(shared.Notification$.inboundSchema),
            meta: shared.MetaPaginated$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<shared.Notification$.Outbound>;
        meta: shared.MetaPaginated$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListNotificationsResponseBody> =
        z
            .object({
                data: z.array(shared.Notification$.outboundSchema),
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
export namespace ListNotificationsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: ListNotificationsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListNotificationsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => ListNotificationsResponseBody$.inboundSchema).optional(),
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
        object?: ListNotificationsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListNotificationsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => ListNotificationsResponseBody$.outboundSchema).optional(),
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
