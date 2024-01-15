/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Indicates what initiated this transaction. Read only for sellers - read/write for Paddle
 */
export enum TransactionOrigin {
    Web = "web",
    Api = "api",
    SubscriptionRecurring = "subscription_recurring",
    SubscriptionUpdate = "subscription_update",
    SubscriptionCharge = "subscription_charge",
    SubscriptionPaymentMethodChange = "subscription_payment_method_change",
}

/** @internal */
export const TransactionOrigin$ = z.nativeEnum(TransactionOrigin);
