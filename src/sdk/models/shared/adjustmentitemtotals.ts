/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Breakdown of the total for an adjustment item.
 */
export class AdjustmentItemTotals extends SpeakeasyBase {
    /**
     * Amount multiplied by quantity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subtotal" })
    subtotal?: string;

    /**
     * Total tax on the subtotal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax" })
    tax?: string;

    /**
     * Total after tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: string;
}