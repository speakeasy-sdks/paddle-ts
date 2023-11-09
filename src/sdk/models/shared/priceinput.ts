/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomData } from "./customdata";
import { Money2 } from "./money2";
import { Period2 } from "./period2";
import { PriceQuantity } from "./pricequantity";
import { TaxMode1 } from "./taxmode1";
import { UnitPriceOverride } from "./unitpriceoverride";
import { Expose, Type } from "class-transformer";

/**
 * Represents a price entity.
 */
export class PriceInput extends SpeakeasyBase {
    /**
     * How often this price should be charged. `null` if price is non-recurring (one-time).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_cycle" })
    @Type(() => Period2)
    billingCycle?: Period2;

    /**
     * Your own structured key-value data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_data" })
    @Type(() => CustomData)
    customData?: CustomData;

    /**
     * Short description for this price. Typically describes how often the related product bills.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Unique Paddle ID for this price, prefixed with `pri_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Unique Paddle ID for this product, prefixed with `pro_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "product_id" })
    productId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    @Type(() => PriceQuantity)
    quantity?: PriceQuantity;

    /**
     * How tax is calculated for this price.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_mode" })
    taxMode?: TaxMode1;

    /**
     * Trial period for the product related to this price. The billing cycle begins once the trial period is over. `null` for no trial period. Requires `billing_cycle`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trial_period" })
    @Type(() => Period2)
    trialPeriod?: Period2;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_price" })
    @Type(() => Money2)
    unitPrice?: Money2;

    /**
     * List of unit price overrides. Use to override the base price with a custom price and currency for a country or group of countries.
     */
    @SpeakeasyMetadata({ elemType: UnitPriceOverride })
    @Expose({ name: "unit_price_overrides" })
    @Type(() => UnitPriceOverride)
    unitPriceOverrides?: UnitPriceOverride[];
}
