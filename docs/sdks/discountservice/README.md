# discountService

### Available Operations

* [createDiscount](#creatediscount) - Create a discount
* [getDiscount](#getdiscount) - Get a discount
* [listDiscounts](#listdiscounts) - List discounts
* [updateDiscount](#updatediscount) - Update a discount

## createDiscount

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

sdk.discountService.createDiscount({
  amount: "dolore",
  code: "labore",
  currencyCode: CurrencyCode2.Czk,
  description: "dolorum",
  enabledForCheckout: false,
  expiresAt: new Date("2024-10-12T07:20:50.52Z"),
  id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
  maximumRecurringIntervals: 100294,
  recur: false,
  restrictTo: [
    "aut",
  ],
  type: DiscountCreateType.FlatPerSeat,
  usageLimit: 929530,
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


## getDiscount

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

sdk.discountService.getDiscount({
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


## listDiscounts

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

sdk.discountService.listDiscounts({
  after: "consequatur",
  code: "BLACKFRIDAY",
  id: "adcf4b92-1879-4fce-953f-73ef7fbc7abd",
  orderBy: "ducimus",
  perPage: 293020,
  status: StatusDiscount.Used,
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


## updateDiscount

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

sdk.discountService.updateDiscount({
  discountInput: {
    amount: "illum",
    code: "sequi",
    currencyCode: CurrencyCode2.Nok,
    description: "impedit",
    enabledForCheckout: false,
    expiresAt: new Date("2024-10-12T07:20:50.52Z"),
    id: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    maximumRecurringIntervals: 13236,
    recur: false,
    restrictTo: [
      "exercitationem",
      "nulla",
      "fugit",
      "porro",
    ],
    status: SchemasstatusDiscount.Used,
    type: DiscountType.Percentage,
    usageLimit: 478370,
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

