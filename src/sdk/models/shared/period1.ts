/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum Interval {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

/**
 * Defines a period of time
 */
export class Period1 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency: number;

    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval: Interval;
}
