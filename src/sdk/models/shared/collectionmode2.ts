/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * How payment is collected. `automatic` for checkout, `manual` for invoices.
 */
export enum CollectionMode2 {
    Automatic = "automatic",
    Manual = "manual",
}

/** @internal */
export const CollectionMode2$ = z.nativeEnum(CollectionMode2);
