/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { ErrorT, ErrorT$ } from "./error";
import { z } from "zod";

/**
 * General error response
 */
export type UpdateCustomerCustomersResponse500ResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class UpdateCustomerCustomersResponse500ResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdateCustomerCustomersResponse500ResponseBodyData;

    constructor(err: UpdateCustomerCustomersResponse500ResponseBodyData) {
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

        this.name = "UpdateCustomerCustomersResponse500ResponseBody";
    }
}

/**
 * General error response
 */
export type UpdateCustomerCustomersResponse404ResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class UpdateCustomerCustomersResponse404ResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdateCustomerCustomersResponse404ResponseBodyData;

    constructor(err: UpdateCustomerCustomersResponse404ResponseBodyData) {
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

        this.name = "UpdateCustomerCustomersResponse404ResponseBody";
    }
}

/**
 * General error response
 */
export type UpdateCustomerCustomersResponseResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class UpdateCustomerCustomersResponseResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdateCustomerCustomersResponseResponseBodyData;

    constructor(err: UpdateCustomerCustomersResponseResponseBodyData) {
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

        this.name = "UpdateCustomerCustomersResponseResponseBody";
    }
}

/**
 * General error response
 */
export type UpdateCustomerCustomersResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;
};

/**
 * General error response
 */
export class UpdateCustomerCustomersResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: ErrorT | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdateCustomerCustomersResponseBodyData;

    constructor(err: UpdateCustomerCustomersResponseBodyData) {
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

        this.name = "UpdateCustomerCustomersResponseBody";
    }
}

/**
 * Error response for validation
 */
export type UpdateCustomerResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: shared.ErrorValidation | undefined;
};

/**
 * Error response for validation
 */
export class UpdateCustomerResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    error?: shared.ErrorValidation | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdateCustomerResponseBodyData;

    constructor(err: UpdateCustomerResponseBodyData) {
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

        this.name = "UpdateCustomerResponseBody";
    }
}

/** @internal */
export namespace UpdateCustomerCustomersResponse500ResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateCustomerCustomersResponse500ResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new UpdateCustomerCustomersResponse500ResponseBody({
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
        UpdateCustomerCustomersResponse500ResponseBody
    > = z
        .instanceof(UpdateCustomerCustomersResponse500ResponseBody)
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
export namespace UpdateCustomerCustomersResponse404ResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateCustomerCustomersResponse404ResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new UpdateCustomerCustomersResponse404ResponseBody({
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
        UpdateCustomerCustomersResponse404ResponseBody
    > = z
        .instanceof(UpdateCustomerCustomersResponse404ResponseBody)
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
export namespace UpdateCustomerCustomersResponseResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateCustomerCustomersResponseResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new UpdateCustomerCustomersResponseResponseBody({
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
        UpdateCustomerCustomersResponseResponseBody
    > = z
        .instanceof(UpdateCustomerCustomersResponseResponseBody)
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
export namespace UpdateCustomerCustomersResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateCustomerCustomersResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new UpdateCustomerCustomersResponseBody({
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
        UpdateCustomerCustomersResponseBody
    > = z
        .instanceof(UpdateCustomerCustomersResponseBody)
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
export namespace UpdateCustomerResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error?: shared.ErrorValidation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateCustomerResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error: shared.ErrorValidation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return new UpdateCustomerResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error?: shared.ErrorValidation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCustomerResponseBody> = z
        .instanceof(UpdateCustomerResponseBody)
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
                    error: shared.ErrorValidation$.outboundSchema.optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.error === undefined ? null : { error: v.error }),
                    };
                })
        );
}
