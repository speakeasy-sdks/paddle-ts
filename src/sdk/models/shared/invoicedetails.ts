/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Product } from "./product";
import { Totals2 } from "./totals2";
import { Expose, Type } from "class-transformer";

export class LineItems extends SpeakeasyBase {
    /**
     * Represents a product entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "product" })
    @Type(() => Product)
    product?: Product;

    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate" })
    taxRate?: string;

    /**
     * The financial breakdown of a charge in the lowest denomination of a currency (eg cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => Totals2)
    totals?: Totals2;

    /**
     * The financial breakdown of a charge in the lowest denomination of a currency (eg cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_totals" })
    @Type(() => Totals2)
    unitTotals?: Totals2;
}

export class InvoiceDetails extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: LineItems })
    @Expose({ name: "line_items" })
    @Type(() => LineItems)
    lineItems?: LineItems[];

    /**
     * The financial breakdown of a charge in the lowest denomination of a currency (eg cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => Totals2)
    totals?: Totals2;
}
