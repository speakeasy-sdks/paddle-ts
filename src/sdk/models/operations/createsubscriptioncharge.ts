/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateSubscriptionChargeRequest = {
    subscriptionCharge?: shared.SubscriptionCharge | undefined;
    /**
     * Paddle ID of the subscription entity to work with.
     */
    subscriptionId: string;
};

/**
 * OK
 */
export type CreateSubscriptionChargeResponseBody = {
    /**
     * Represents a subscription entity.
     */
    data: shared.Subscription1;
    /**
     * Information about this response.
     */
    meta: shared.Meta;
};

export type CreateSubscriptionChargeResponse = {
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
    object?: CreateSubscriptionChargeResponseBody | undefined;
};

/** @internal */
export namespace CreateSubscriptionChargeRequest$ {
    export type Inbound = {
        "subscription-charge"?: shared.SubscriptionCharge$.Inbound | undefined;
        subscription_id: string;
    };

    export const inboundSchema: z.ZodType<CreateSubscriptionChargeRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                "subscription-charge": shared.SubscriptionCharge$.inboundSchema.optional(),
                subscription_id: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v["subscription-charge"] === undefined
                        ? null
                        : { subscriptionCharge: v["subscription-charge"] }),
                    subscriptionId: v.subscription_id,
                };
            });

    export type Outbound = {
        "subscription-charge"?: shared.SubscriptionCharge$.Outbound | undefined;
        subscription_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateSubscriptionChargeRequest
    > = z
        .object({
            subscriptionCharge: shared.SubscriptionCharge$.outboundSchema.optional(),
            subscriptionId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.subscriptionCharge === undefined
                    ? null
                    : { "subscription-charge": v.subscriptionCharge }),
                subscription_id: v.subscriptionId,
            };
        });
}

/** @internal */
export namespace CreateSubscriptionChargeResponseBody$ {
    export type Inbound = {
        data: shared.Subscription1$.Inbound;
        meta: shared.Meta$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        CreateSubscriptionChargeResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: shared.Subscription1$.inboundSchema,
            meta: shared.Meta$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: shared.Subscription1$.Outbound;
        meta: shared.Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateSubscriptionChargeResponseBody
    > = z
        .object({
            data: shared.Subscription1$.outboundSchema,
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
export namespace CreateSubscriptionChargeResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: CreateSubscriptionChargeResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateSubscriptionChargeResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                Headers: z.record(z.array(z.string())),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                object: z
                    .lazy(() => CreateSubscriptionChargeResponseBody$.inboundSchema)
                    .optional(),
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
        object?: CreateSubscriptionChargeResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateSubscriptionChargeResponse
    > = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateSubscriptionChargeResponseBody$.outboundSchema).optional(),
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
