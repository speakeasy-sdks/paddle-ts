/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MoneyInvoice } from "./moneyinvoice";
import { Expose, Type } from "class-transformer";

/**
 * The price of the product in the item
 *
 * @remarks
 *
 */
export class InvoiceItemPrice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "product_id" })
    productId: string;

    /**
     * Represents an amount in a particular currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_price" })
    @Type(() => MoneyInvoice)
    unitPrice: MoneyInvoice;
}

export class InvoiceItem extends SpeakeasyBase {
    /**
     * The price of the product in the item
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    @Type(() => InvoiceItemPrice)
    price?: InvoiceItemPrice;

    /**
     * Quantity of the product in the item, greater than 0
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}
