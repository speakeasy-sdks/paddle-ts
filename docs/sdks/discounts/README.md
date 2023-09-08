# discounts

## Overview

Work with discounts.

Discounts - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/discounts>
### Available Operations

* [create](#create) - Create a discount
* [get](#get) - Get a discount
* [list](#list) - List discounts
* [update](#update) - Update a discount

## create

Creates a new discount.

If successful, your response includes a copy of the new discount entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreateDiscountResponse } from "Paddle/dist/sdk/models/operations";
import { CurrencyCode2, DiscountCreateType } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.discounts.create({
  amount: "aliquid",
  code: "cupiditate",
  currencyCode: CurrencyCode2.Mxn,
  description: "perferendis",
  enabledForCheckout: false,
  expiresAt: new Date("2024-10-12T07:20:50.52Z"),
  id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
  maximumRecurringIntervals: 164940,
  recur: false,
  restrictTo: [
    "assumenda",
  ],
  type: DiscountCreateType.FlatPerSeat,
  usageLimit: 4695,
}).then((res: CreateDiscountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.DiscountCreateInput](../../models/shared/discountcreateinput.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                   | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateDiscountResponse](../../models/operations/creatediscountresponse.md)>**


## get

Returns a discount using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetDiscountResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.discounts.get({
  discountId: "dsc_01gt218xfk7yztpvgmcazkes83",
}).then((res: GetDiscountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetDiscountRequest](../../models/operations/getdiscountrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetDiscountResponse](../../models/operations/getdiscountresponse.md)>**


## list

Returns a paginated list of discounts. Use the query parameters to page through results.

By default, Paddle returns discounts that are `active`. Use the `status` query parameter to return discounts that are archived or expired.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListDiscountsResponse } from "Paddle/dist/sdk/models/operations";
import { StatusDiscount } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.discounts.list({
  after: "fugit",
  code: "BLACKFRIDAY",
  id: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
  orderBy: "laborum",
  perPage: 881104,
  status: StatusDiscount.Active,
}).then((res: ListDiscountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListDiscountsRequest](../../models/operations/listdiscountsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListDiscountsResponse](../../models/operations/listdiscountsresponse.md)>**


## update

Updates a discount using its ID.

If successful, your response includes a copy of the updated discount entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateDiscountResponse } from "Paddle/dist/sdk/models/operations";
import { CurrencyCode2, DiscountType, SchemasstatusDiscount } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.discounts.update({
  discountInput: {
    amount: "occaecati",
    code: "enim",
    currencyCode: CurrencyCode2.Twd,
    description: "delectus",
    enabledForCheckout: false,
    expiresAt: new Date("2024-10-12T07:20:50.52Z"),
    id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    maximumRecurringIntervals: 692532,
    recur: false,
    restrictTo: [
      "provident",
    ],
    status: SchemasstatusDiscount.Expired,
    type: DiscountType.FlatPerSeat,
    usageLimit: 501324,
  },
  discountId: "dsc_01gt218xfk7yztpvgmcazkes83",
}).then((res: UpdateDiscountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateDiscountRequest](../../models/operations/updatediscountrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateDiscountResponse](../../models/operations/updatediscountresponse.md)>**

