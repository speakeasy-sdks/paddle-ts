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
    bearerAuth: "",
  },
});

sdk.discounts.create({
  amount: "illum",
  code: "maiores",
  currencyCode: CurrencyCode2.Rub,
  description: "dicta",
  enabledForCheckout: false,
  expiresAt: new Date("2024-10-12T07:20:50.52Z"),
  id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
  maximumRecurringIntervals: 297437,
  recur: false,
  restrictTo: [
    "facere",
    "ea",
    "aliquid",
    "laborum",
  ],
  type: DiscountCreateType.Percentage,
  usageLimit: 249796,
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
    bearerAuth: "",
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
    bearerAuth: "",
  },
});

sdk.discounts.list({
  after: "occaecati",
  code: "BLACKFRIDAY",
  id: "5efb9ba8-8f3a-4669-9707-4ba4469b6e21",
  orderBy: "magnam",
  perPage: 92373,
  status: StatusDiscount.Expired,
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
    bearerAuth: "",
  },
});

sdk.discounts.update({
  discountInput: {
    amount: "ullam",
    code: "provident",
    currencyCode: CurrencyCode2.Mxn,
    description: "sint",
    enabledForCheckout: false,
    expiresAt: new Date("2024-10-12T07:20:50.52Z"),
    id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    maximumRecurringIntervals: 33625,
    recur: false,
    restrictTo: [
      "reiciendis",
      "mollitia",
      "ad",
    ],
    status: SchemasstatusDiscount.Archived,
    type: DiscountType.Flat,
    usageLimit: 896547,
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
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateDiscountResponse](../../models/operations/updatediscountresponse.md)>**

