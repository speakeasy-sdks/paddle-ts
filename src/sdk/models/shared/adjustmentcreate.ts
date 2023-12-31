/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AdjustmentPayoutTotals } from "./adjustmentpayouttotals";
import { CurrencyCode2 } from "./currencycode2";
import { SchemaAction } from "./schemaaction";
import { SchemaStatusAdjustment } from "./schemastatusadjustment";
import { Expose, Type } from "class-transformer";

/**
 * Type of adjustment for this transaction item. `tax` and `proration` are automatically created by Paddle.
 *
 * @remarks
 * Include `amount` when creating a `partial` adjustment.
 */
export enum AdjustmentCreateType {
    Full = "full",
    Partial = "partial",
    Tax = "tax",
    Proration = "proration",
}

export class AdjustmentCreateAdjustmentItem extends SpeakeasyBase {
    /**
     * Amount adjusted before tax for this transaction item. Required when adjustment type is `partial`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * Unique Paddle ID for this adjustment item, prefixed with `adjitm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Unique Paddle ID for this transaction item, prefixed with `txnitm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "item_id" })
    itemId: string;

    /**
     * Type of adjustment for this transaction item. `tax` and `proration` are automatically created by Paddle.
     *
     * @remarks
     * Include `amount` when creating a `partial` adjustment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AdjustmentCreateType;
}

/**
 * Represents an adjustment entity.
 */
export class AdjustmentCreate extends SpeakeasyBase {
    /**
     * How this adjustment impacts the related transaction. `refund` adjustments must be approved by Paddle, and are created with the status `pending_approval`. `chargeback` and `chargeback_warning` adjustments are created automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action: SchemaAction;

    /**
     * Supported three-letter ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: CurrencyCode2;

    /**
     * Unique Paddle ID for this customer entity, prefixed with `ctm_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_id" })
    customerId?: string;

    /**
     * Unique Paddle ID for this adjustment entity, prefixed with `adj_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * List of items on this adjustment.
     */
    @SpeakeasyMetadata({ elemType: AdjustmentCreateAdjustmentItem })
    @Expose({ name: "items" })
    @Type(() => AdjustmentCreateAdjustmentItem)
    items: AdjustmentCreateAdjustmentItem[];

    /**
     * Breakdown of how this adjustment affects your payout balance.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payout_totals" })
    @Type(() => AdjustmentPayoutTotals)
    payoutTotals?: AdjustmentPayoutTotals;

    /**
     * Why this adjustment was created. Appears in the Paddle Dashboard. Retained for record-keeping purposes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason: string;

    /**
     * Status of this adjustment. Set automatically by Paddle.
     *
     * @remarks
     *
     * `refund` adjustments must be approved by Paddle, and are created with the status `pending_approval`
     * until they move to `approved` or `rejected` on review.  `credit` adjustments are created with the status `approved`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: SchemaStatusAdjustment;

    /**
     * Unique Paddle ID for this subscription entity, prefixed with `sub_`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subscription_id" })
    subscriptionId?: string;

    /**
     * Paddle ID for the transaction related to this adjustment, prefixed with `txn_`.
     *
     * @remarks
     * Transactions must be `billed` or `completed`. You can't create an adjustment for a transaction
     * that has an adjustment that's `pending_approval`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transaction_id" })
    transactionId: any;
}
