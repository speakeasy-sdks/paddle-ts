/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Unit of time.
 */
export enum Period2Interval {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

export class Period2 extends SpeakeasyBase {
    /**
     * Amount of time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency: number;

    /**
     * Unit of time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval: Period2Interval;
}
