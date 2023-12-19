# Adjustments
(*adjustments*)

## Overview

Work with adjustments.

### Available Operations

* [create](#create) - Create an adjustment
* [list](#list) - List adjustments

## create

Creates an adjustment for one or more transaction items.

You may create adjustments for `billed` or `completed` transactions:

* Where an adjustment is for a manually-collected transaction with the status of `billed` (an issued invoice), credit adjustments reduce the balance to pay on the invoice.
* Where an adjustment is a refund, the total is returned to a customer's original payment method.

You can't create credits for automatically-collected transactions. Paddle creates and manages credits for automatically-collected transactions when you make changes to the related subscription and choose to prorate.

Refunds must be approved by Paddle. They're created with the status `pending_approval`, before moving to `approved` or `rejected`.

Adjustments can apply to some or all items on a transaction. You'll need the Paddle ID of the transaction to create a refund or credit for,
along with the Paddle ID of any transaction items (`details.line_items[].id`).

If successful, your response includes a copy of the new adjustment entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import {
  AdjustmentCreateType,
  CurrencyCode2,
  CurrencyCodeChargeback,
  CurrencyCodePayouts,
  SchemaAction,
  SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.adjustments.create({
    action: SchemaAction.Refund,
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    id: "adj_01gya6twkp8y0tv1e19rsgst9m",
    items: [
      {
        id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
        itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
        type: AdjustmentCreateType.Full,
      },
    ],
    payoutTotals: {
      chargebackFee: {
        amount: "1680",
        original: {
          amount: "1500",
        },
      },
      earnings: "15120",
      fee: "300",
      subtotal: "15000",
      tax: "1500",
      total: "16500",
    },
    reason: "string",
    subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
    transactionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.AdjustmentCreate](../../sdk/models/shared/adjustmentcreate.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `retries`                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)               | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateAdjustmentResponse](../../sdk/models/operations/createadjustmentresponse.md)>**
### Errors

| Error Object                                              | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.CreateAdjustmentResponseBody                       | 400                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponseBody            | 404                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponseResponseBody    | 409                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponse500ResponseBody | 500                                                       | application/json                                          |
| errors.SDKError                                           | 4xx-5xx                                                   | */*                                                       |

## list

Returns a paginated list of adjustments. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { Action, StatusAdjustment } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.adjustments.list({
    customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
    transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListAdjustmentsRequest](../../sdk/models/operations/listadjustmentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListAdjustmentsResponse](../../sdk/models/operations/listadjustmentsresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ListAdjustmentsResponseBody            | 400                                           | application/json                              |
| errors.ListAdjustmentsAdjustmentsResponseBody | 500                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |
