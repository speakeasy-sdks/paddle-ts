/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum StatusSubscription {
    Active = "active",
    Canceled = "canceled",
    PastDue = "past_due",
    Paused = "paused",
    Trialing = "trialing",
}

/** @internal */
export const StatusSubscription$ = z.nativeEnum(StatusSubscription);
