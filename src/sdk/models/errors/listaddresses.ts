/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error";
import { z } from "zod";

/**
 * General error response
 */
export type ListAddressesAddressesResponse500ResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListAddressesAddressesResponse500ResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAddressesAddressesResponse500ResponseBodyData;

    constructor(err: ListAddressesAddressesResponse500ResponseBodyData) {
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

        this.name = "ListAddressesAddressesResponse500ResponseBody";
    }
}

/**
 * General error response
 */
export type ListAddressesAddressesResponseResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListAddressesAddressesResponseResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAddressesAddressesResponseResponseBodyData;

    constructor(err: ListAddressesAddressesResponseResponseBodyData) {
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

        this.name = "ListAddressesAddressesResponseResponseBody";
    }
}

/**
 * General error response
 */
export type ListAddressesAddressesResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListAddressesAddressesResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAddressesAddressesResponseBodyData;

    constructor(err: ListAddressesAddressesResponseBodyData) {
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

        this.name = "ListAddressesAddressesResponseBody";
    }
}

/**
 * General error response
 */
export type ListAddressesResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class ListAddressesResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAddressesResponseBodyData;

    constructor(err: ListAddressesResponseBodyData) {
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

        this.name = "ListAddressesResponseBody";
    }
}

/** @internal */
export namespace ListAddressesAddressesResponse500ResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAddressesAddressesResponse500ResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListAddressesAddressesResponse500ResponseBody({
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
        ListAddressesAddressesResponse500ResponseBody
    > = z
        .instanceof(ListAddressesAddressesResponse500ResponseBody)
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
export namespace ListAddressesAddressesResponseResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAddressesAddressesResponseResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListAddressesAddressesResponseResponseBody({
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
        ListAddressesAddressesResponseResponseBody
    > = z
        .instanceof(ListAddressesAddressesResponseResponseBody)
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
export namespace ListAddressesAddressesResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAddressesAddressesResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListAddressesAddressesResponseBody({
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
        ListAddressesAddressesResponseBody
    > = z
        .instanceof(ListAddressesAddressesResponseBody)
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
export namespace ListAddressesResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListAddressesResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new ListAddressesResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAddressesResponseBody> = z
        .instanceof(ListAddressesResponseBody)
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
