/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error";
import { z } from "zod";

/**
 * General error response
 */
export type GetSubscriptionSubscriptionsResponseResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class GetSubscriptionSubscriptionsResponseResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSubscriptionSubscriptionsResponseResponseBodyData;

    constructor(err: GetSubscriptionSubscriptionsResponseResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.error != null) {
            this.error = err.error;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GetSubscriptionSubscriptionsResponseResponseBody";
    }
}

/**
 * General error response
 */
export type GetSubscriptionSubscriptionsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class GetSubscriptionSubscriptionsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSubscriptionSubscriptionsResponseBodyData;

    constructor(err: GetSubscriptionSubscriptionsResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.error != null) {
            this.error = err.error;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GetSubscriptionSubscriptionsResponseBody";
    }
}

/**
 * General error response
 */
export type GetSubscriptionResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class GetSubscriptionResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetSubscriptionResponseBodyData;

    constructor(err: GetSubscriptionResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.error != null) {
            this.error = err.error;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GetSubscriptionResponseBody";
    }
}

/** @internal */
export namespace GetSubscriptionSubscriptionsResponseResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetSubscriptionSubscriptionsResponseResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new GetSubscriptionSubscriptionsResponseResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSubscriptionSubscriptionsResponseResponseBody
    > = z
        .instanceof(GetSubscriptionSubscriptionsResponseResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    error: ErrorT$.outboundSchema.optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.error === undefined ? null : { error: v.error }),
                    };
                })
        );
}

/** @internal */
export namespace GetSubscriptionSubscriptionsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetSubscriptionSubscriptionsResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new GetSubscriptionSubscriptionsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSubscriptionSubscriptionsResponseBody
    > = z
        .instanceof(GetSubscriptionSubscriptionsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    error: ErrorT$.outboundSchema.optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.error === undefined ? null : { error: v.error }),
                    };
                })
        );
}

/** @internal */
export namespace GetSubscriptionResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSubscriptionResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new GetSubscriptionResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSubscriptionResponseBody> = z
        .instanceof(GetSubscriptionResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    error: ErrorT$.outboundSchema.optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.error === undefined ? null : { error: v.error }),
                    };
                })
        );
}
