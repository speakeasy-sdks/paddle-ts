/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorCode } from "./errorcode";
import { MethodDetails } from "./methoddetails";
import { StatusPaymentAttempt } from "./statuspaymentattempt";
import { Expose, Transform, Type } from "class-transformer";

export class TransactionPaymentAttempt extends SpeakeasyBase {
    /**
     * Amount for collection in the lowest denomination of a currency (e.g. cents for USD).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: string;

    /**
     * RFC 3339 datetime string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "captured_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    capturedAt?: Date;

    /**
     * RFC 3339 datetime string of when this entity was created. Set automatically by Paddle.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Reason why a payment attempt failed. `null` if payment captured successfully.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error_code" })
    errorCode?: ErrorCode;

    /**
     * Information about the payment method used for a payment attempt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "method_details" })
    @Type(() => MethodDetails)
    methodDetails?: MethodDetails;

    /**
     * UUID for this payment attempt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_attempt_id" })
    paymentAttemptId?: string;

    /**
     * Status of this payment attempt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusPaymentAttempt;

    /**
     * UUID for the stored payment method used for this payment attempt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stored_payment_method_id" })
    storedPaymentMethodId?: string;
}
