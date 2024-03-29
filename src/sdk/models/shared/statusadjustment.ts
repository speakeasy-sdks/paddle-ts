/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum StatusAdjustment {
    Approved = "approved",
    PendingApproval = "pending_approval",
    Rejected = "rejected",
    Reversed = "reversed",
}

/** @internal */
export const StatusAdjustment$ = z.nativeEnum(StatusAdjustment);
