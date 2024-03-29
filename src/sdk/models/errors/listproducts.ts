/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error";
import { z } from "zod";

/**
 * General error response
 */
export type ListProductsProductsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListProductsProductsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListProductsProductsResponseBodyData;

    constructor(err: ListProductsProductsResponseBodyData) {
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

        this.name = "ListProductsProductsResponseBody";
    }
}

/**
 * General error response
 */
export type ListProductsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListProductsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListProductsResponseBodyData;

    constructor(err: ListProductsResponseBodyData) {
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

        this.name = "ListProductsResponseBody";
    }
}

/** @internal */
export namespace ListProductsProductsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListProductsProductsResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                RawResponse: z.instanceof(Response).optional(),
                error: ErrorT$.inboundSchema.optional(),
            })
            .transform((v) => {
                return new ListProductsProductsResponseBody({
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
        ListProductsProductsResponseBody
    > = z
        .instanceof(ListProductsProductsResponseBody)
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
export namespace ListProductsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListProductsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListProductsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListProductsResponseBody> = z
        .instanceof(ListProductsResponseBody)
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
