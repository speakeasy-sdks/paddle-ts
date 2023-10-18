# Subscriptions
(*subscriptions*)

## Overview

Work with subscriptions.

Subscriptions - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/subscriptions>
### Available Operations

* [cancel](#cancel) - Cancel a subscription
* [create](#create) - Create a one-time charge for a subscription
* [createPreview](#createpreview) - Preview one-off charge for a subscription
* [get](#get) - Get a subscription
* [getUpdatedPaymentMethodTransaction](#getupdatedpaymentmethodtransaction) - Get a transaction to update payment method
* [list](#list) - List subscriptions
* [pause](#pause) - Pause a subscription
* [previewSubscription](#previewsubscription) - Preview an update to a subscription
* [resumeSubscription](#resumesubscription) - Resume a paused subscription
* [update](#update) - Update a subscription

## cancel

Cancels a subscription using its ID.

For active subscriptions, cancellation takes place at the end of a subscription billing period. If successful, your response includes a copy of the updated subscription entity with a `schedule_change` to say that the subscription should cancel at the end of the billing period. Its `status` remains the same until after the effective date of the scheduled change, at which point it changes to `canceled`.

For paused subscriptions, cancellation takes place immediately. If successful, your response includes a copy of the updated subscription entity with the `status` of `canceled`.

You cannot reactivate a canceled subscription.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { EffectiveFromNullable } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.cancel({
    requestBody: {},
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CancelSubscriptionRequest](../../models/operations/cancelsubscriptionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CancelSubscriptionResponse](../../models/operations/cancelsubscriptionresponse.md)>**


## create

Creates a new one-time charge for a subscription. Use to bill non-recurring items to a subscription. Non-recurring items are price entities where the `billing_cycle` is `null`.

If successful, Paddle responds with the updated subscription entity. However, one-time charges aren't held against the subscription entity, so the charges billed aren't returned in the response.

Once created, to get details of a one-time charge:

* When created with `effective_from` as `next_billing_period`, get the subscription the charge was billed to and use the `include` query parameter with the `next_transaction` value.
* When created with `effective_from` as `immediately`, list transactions and use the `subscription_id` query parameter with the subscription ID of the subscription the charge was billed to.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { EffectiveFrom } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.create({
    subscriptionCharge: {
      effectiveFrom: EffectiveFrom.NextBillingPeriod,
      items: [
        {
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
          quantity: 5,
        },
      ],
    },
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateSubscriptionChargeRequest](../../models/operations/createsubscriptionchargerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateSubscriptionChargeResponse](../../models/operations/createsubscriptionchargeresponse.md)>**


## createPreview

Previews a new one-off charge for a subscription. Use to preview the outcome of adding non-recurring items to a subscription.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { EffectiveFrom } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.createPreview({
    subscriptionCharge: {
      effectiveFrom: EffectiveFrom.NextBillingPeriod,
      items: [
        {
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
          quantity: 5,
        },
      ],
    },
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreateSubscriptionChargePreviewRequest](../../models/operations/createsubscriptionchargepreviewrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreateSubscriptionChargePreviewResponse](../../models/operations/createsubscriptionchargepreviewresponse.md)>**


## get

Returns a subscription using its ID.

Use the `include` parameter to include transaction information in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludeSubscription } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.get({
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSubscriptionRequest](../../models/operations/getsubscriptionrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSubscriptionResponse](../../models/operations/getsubscriptionresponse.md)>**


## getUpdatedPaymentMethodTransaction

Returns a transaction that you can pass to a checkout to let customers update their payment details. Only for subscriptions where `collection_mode` is `automatic`.

The transaction returned depends on the status of the related subscription:

* Where a subscription is `past_due`, it returns the most recent `past_due` transaction.
* Where a subscription is `active`, it creates a new zero amount transaction for the items on a subscription.

You can use the returned `checkout.url`, or pass the returned transaction ID to Paddle.js to open a checkout to present customers with a way of updating their payment details.

### Example Usage

```typescript
import { Paddle } from "Paddle";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.getUpdatedPaymentMethodTransaction({
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetSubscriptionUpdatePaymentMethodTransactionRequest](../../models/operations/getsubscriptionupdatepaymentmethodtransactionrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `retries`                                                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetSubscriptionUpdatePaymentMethodTransactionResponse](../../models/operations/getsubscriptionupdatepaymentmethodtransactionresponse.md)>**


## list

Returns a paginated list of subscriptions. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { StatusSubscription } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.list({
    customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
    priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListSubscriptionsRequest](../../models/operations/listsubscriptionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListSubscriptionsResponse](../../models/operations/listsubscriptionsresponse.md)>**


## pause

Pauses a subscription using its ID.

To create an open-ended pause, send an empty request body. The subscription remains paused until you send a resume request.

To set a resume date, include the `resume_at` field in your request. The subscription remains paused until the resume date, or until you send a resume request.

Pauses take place at the end of a subscription billing period. If successful, your response includes a copy of the updated subscription entity with a `schedule_change` to say that the subscription should pause at the end of the billing period. Its `status` remains the same until after the effective date of the scheduled change, at which point it changes to `paused`.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { EffectiveFromNullable } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.pause({
    requestBody: {
      resumeAt: new Date("2019-10-12T07:20:50.52Z"),
    },
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PauseSubscriptionRequest](../../models/operations/pausesubscriptionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PauseSubscriptionResponse](../../models/operations/pausesubscriptionresponse.md)>**


## previewSubscription

Previews an update for a subscription without applying those changes. Typically used for previewing proration before making changes to a subscription.

If successful, your response includes `immediate_transaction`, `next_transaction`, and `recurring_transaction_details` so you can see expected transactions for the changes.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import {
  CollectionMode2,
  CurrencyCode2,
  EffectiveFrom,
  Period2Interval,
  SubscriptionUpdateProrationBillingMode,
} from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.previewSubscription({
    subscriptionUpdate: {
      addressId: "add_01gm302t81w94gyjpjpqypkzkf",
      billingDetails: {
        paymentTerms: {
          frequency: 243733,
          interval: Period2Interval.Month,
        },
      },
      businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      customData: {},
      customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
      discount: {
        effectiveFrom: EffectiveFrom.NextBillingPeriod,
        id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
      },
      items: [
        {
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        },
      ],
      nextBilledAt: new Date("2024-10-12T07:20:50.52Z"),
    },
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PreviewSubscriptionRequest](../../models/operations/previewsubscriptionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PreviewSubscriptionResponse](../../models/operations/previewsubscriptionresponse.md)>**


## resumeSubscription

Resumes a paused subscription using its ID. Only `paused` subscriptions can be resumed. You cannot resume a `canceled` subscription.

On resume, Paddle bills for a subscription immediately. Subscription billing dates are recalculated based on the resume date.

If successful, Paddle returns a copy of the updated subscription entity. The subscription status is `active`, and billing dates are updated to reflect the resume date.

### Example Usage

```typescript
import { Paddle } from "Paddle";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.resumeSubscription({
    requestBody: "Hyundai",
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ResumeSubscriptionRequest](../../models/operations/resumesubscriptionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ResumeSubscriptionResponse](../../models/operations/resumesubscriptionresponse.md)>**


## update

Updates a subscription using its ID.

When making changes to items on a subscription, you must include the `proration_billing_mode` field to tell Paddle how to bill for those changes. Paddle returns an error if this field is missing when sending `items`.

Send the complete list of items that you'd like to be on a subscription — including existing items. If you omit items, they're removed from the subscription.

For each item, send `price_id` and `quantity`. Paddle responds with the full price object for each price. If you're updating an existing item, you can omit the `quantity` if you don't want to update it.

If successful, your response includes a copy of the updated subscription entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import {
  CollectionMode2,
  CurrencyCode2,
  EffectiveFrom,
  Period2Interval,
  SubscriptionUpdateProrationBillingMode,
} from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.subscriptions.update({
    subscriptionUpdate: {
      addressId: "add_01gm302t81w94gyjpjpqypkzkf",
      billingDetails: {
        paymentTerms: {
          frequency: 857478,
          interval: Period2Interval.Day,
        },
      },
      businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      customData: {},
      customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
      discount: {
        effectiveFrom: EffectiveFrom.Immediately,
        id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
      },
      items: [
        {
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        },
      ],
      nextBilledAt: new Date("2024-10-12T07:20:50.52Z"),
    },
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateSubscriptionRequest](../../models/operations/updatesubscriptionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateSubscriptionResponse](../../models/operations/updatesubscriptionresponse.md)>**

