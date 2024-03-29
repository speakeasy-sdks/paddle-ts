/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Status of this notification.
 */
export enum SchemaStatusNotification {
    NotAttempted = "not_attempted",
    NeedsRetry = "needs_retry",
    Delivered = "delivered",
    Failed = "failed",
}

/** @internal */
export const SchemaStatusNotification$ = z.nativeEnum(SchemaStatusNotification);
