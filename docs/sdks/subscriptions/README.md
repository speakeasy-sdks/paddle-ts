# subscriptions

## Overview

Work with subscriptions.

Subscriptions - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/subscriptions>
### Available Operations

* [cancel](#cancel) - Cancel a subscription
* [create](#create) - Create a one-time charge for a subscription
* [list](#list) - List subscriptions
* [pause](#pause) - Pause a subscription

## cancel

Cancels a subscription using its ID.

For active subscriptions, cancellation takes place at the end of a subscription billing period. If successful, your response includes a copy of the updated subscription entity with a `schedule_change` to say that the subscription should cancel at the end of the billing period. Its `status` remains the same until after the effective date of the scheduled change, at which point it changes to `canceled`.

For paused subscriptions, cancellation takes place immediately. If successful, your response includes a copy of the updated subscription entity with the `status` of `canceled`.

You cannot reactivate a canceled subscription.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CancelSubscriptionResponse } from "Paddle/dist/sdk/models/operations";
import { EffectiveFromNullable } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.subscriptions.cancel({
  requestBody: {
    effectiveFrom: EffectiveFromNullable.NextBillingPeriod,
  },
  subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
}).then((res: CancelSubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CancelSubscriptionRequest](../../models/operations/cancelsubscriptionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
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
import { CreateSubscriptionChargeResponse } from "Paddle/dist/sdk/models/operations";
import { EffectiveFrom } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.subscriptions.create({
  subscriptionCharge: {
    effectiveFrom: EffectiveFrom.NextBillingPeriod,
    items: [
      {
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 5,
      },
      {
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 5,
      },
      {
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 5,
      },
      {
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 5,
      },
    ],
  },
  subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
}).then((res: CreateSubscriptionChargeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateSubscriptionChargeRequest](../../models/operations/createsubscriptionchargerequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateSubscriptionChargeResponse](../../models/operations/createsubscriptionchargeresponse.md)>**


## list

Returns a paginated list of subscriptions. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListSubscriptionsResponse } from "Paddle/dist/sdk/models/operations";
import { StatusSubscription } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.subscriptions.list({
  after: "illum",
  customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
  orderBy: "pariatur",
  perPage: 807319,
  priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
  status: StatusSubscription.PastDue,
}).then((res: ListSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListSubscriptionsRequest](../../models/operations/listsubscriptionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
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
import { PauseSubscriptionResponse } from "Paddle/dist/sdk/models/operations";
import { EffectiveFromNullable } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.subscriptions.pause({
  requestBody: {
    effectiveFrom: EffectiveFromNullable.Immediately,
    resumeAt: new Date("2019-10-12T07:20:50.52Z"),
  },
  subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
}).then((res: PauseSubscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PauseSubscriptionRequest](../../models/operations/pausesubscriptionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PauseSubscriptionResponse](../../models/operations/pausesubscriptionresponse.md)>**

