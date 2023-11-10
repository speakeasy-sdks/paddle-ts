/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../../sdk/types";
import { BillingDetails1 } from "./billingdetails1";
import { CurrencyCodeInvoice } from "./currencycodeinvoice";
import { CustomDataInvoice } from "./customdatainvoice";
import { InvoiceItem } from "./invoiceitem";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The billing period type is set to `billing` for subscriptions.
 */
export enum InvoiceForPatchType {
    Billing = "billing",
    Contract = "contract",
    Service = "service",
}

export class InvoiceForPatchBillingPeriod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ends_at" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    endsAt: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "starts_at" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startsAt: RFCDate;

    /**
     * The billing period type is set to `billing` for subscriptions.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: InvoiceForPatchType;
}

export class InvoiceForPatch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address_id" })
    addressId?: string;

    /**
     * Details for invoicing. Required if `collection_mode` is set to `manual`. Otherwise must be `null`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_details" })
    @Type(() => BillingDetails1)
    billingDetails?: BillingDetails1;

    @SpeakeasyMetadata()
    @Expose({ name: "billing_period" })
    @Type(() => InvoiceForPatchBillingPeriod)
    billingPeriod?: InvoiceForPatchBillingPeriod;

    @SpeakeasyMetadata()
    @Expose({ name: "business_id" })
    businessId?: string;

    /**
     * Currency codes accepted for invoice. Current accepted currencies for invoice: EUR, GPB and USD.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCodeInvoice;

    /**
     * Key/value pairs of any custom data
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_data" })
    @Type(() => CustomDataInvoice)
    customData?: CustomDataInvoice;

    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    @SpeakeasyMetadata({ elemType: InvoiceItem })
    @Expose({ name: "items" })
    @Type(() => InvoiceItem)
    items?: InvoiceItem[];
}
