/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Unit of time.
 */
export enum Period2Interval {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

export type Period2 = {
    /**
     * Amount of time.
     */
    frequency: number;
    /**
     * Unit of time.
     */
    interval: Period2Interval;
};

/** @internal */
export const Period2Interval$ = z.nativeEnum(Period2Interval);

/** @internal */
export namespace Period2$ {
    export type Inbound = {
        frequency: number;
        interval: Period2Interval;
    };

    export const inboundSchema: z.ZodType<Period2, z.ZodTypeDef, Inbound> = z
        .object({
            frequency: z.number().int(),
            interval: Period2Interval$,
        })
        .transform((v) => {
            return {
                frequency: v.frequency,
                interval: v.interval,
            };
        });

    export type Outbound = {
        frequency: number;
        interval: Period2Interval;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Period2> = z
        .object({
            frequency: z.number().int(),
            interval: Period2Interval$,
        })
        .transform((v) => {
            return {
                frequency: v.frequency,
                interval: v.interval,
            };
        });
}
