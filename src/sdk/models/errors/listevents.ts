/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error";
import { z } from "zod";

/**
 * General error response
 */
export type ListEventsEventsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListEventsEventsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListEventsEventsResponseBodyData;

    constructor(err: ListEventsEventsResponseBodyData) {
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

        this.name = "ListEventsEventsResponseBody";
    }
}

/**
 * General error response
 */
export type ListEventsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListEventsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListEventsResponseBodyData;

    constructor(err: ListEventsResponseBodyData) {
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

        this.name = "ListEventsResponseBody";
    }
}

/** @internal */
export namespace ListEventsEventsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListEventsEventsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListEventsEventsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListEventsEventsResponseBody> = z
        .instanceof(ListEventsEventsResponseBody)
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
export namespace ListEventsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListEventsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListEventsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListEventsResponseBody> = z
        .instanceof(ListEventsResponseBody)
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
