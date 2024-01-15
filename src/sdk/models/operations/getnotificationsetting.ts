/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetNotificationSettingRequest = {
    /**
     * Paddle ID of the notification setting entity (notification destination) to work with.
     */
    notificationSettingId: string;
};

/**
 * OK
 */
export type GetNotificationSettingResponseBody = {
    /**
     * Represents a notification destination.
     */
    data: shared.NotificationSettingComplete;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type GetNotificationSettingResponse = {
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
    object?: GetNotificationSettingResponseBody | undefined;
};

/** @internal */
export namespace GetNotificationSettingRequest$ {
    export type Inbound = {
        notification_setting_id: string;
    };

    export const inboundSchema: z.ZodType<GetNotificationSettingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            notification_setting_id: z.string(),
        })
        .transform((v) => {
            return {
                notificationSettingId: v.notification_setting_id,
            };
        });

    export type Outbound = {
        notification_setting_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationSettingRequest> =
        z
            .object({
                notificationSettingId: z.string(),
            })
            .transform((v) => {
                return {
                    notification_setting_id: v.notificationSettingId,
                };
            });
}

/** @internal */
export namespace GetNotificationSettingResponseBody$ {
    export type Inbound = {
        data: shared.NotificationSettingComplete$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        GetNotificationSettingResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: shared.NotificationSettingComplete$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.NotificationSettingComplete$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetNotificationSettingResponseBody
    > = z
        .object({
            data: shared.NotificationSettingComplete$.outboundSchema,
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
export namespace GetNotificationSettingResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: GetNotificationSettingResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetNotificationSettingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetNotificationSettingResponseBody$.inboundSchema).optional(),
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
        object?: GetNotificationSettingResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationSettingResponse> =
        z
            .object({
                contentType: z.string(),
                headers: z.record(z.array(z.string())),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => GetNotificationSettingResponseBody$.outboundSchema).optional(),
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
