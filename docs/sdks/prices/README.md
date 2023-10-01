# Prices
(*prices*)

## Overview

Work with prices.

Prices - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/prices>
### Available Operations

* [create](#create) - Create a price
* [get](#get) - Get a price
* [list](#list) - List prices
* [update](#update) - Update a price

## create

Creates a new price.

Prices describe how you charge for products. You must include a `product_id` in your request to relate this price to a product.

If you omit the `quantity` object, Paddle automatically sets a minimum of `1` and a maximum of `100` for you. This means the most units that a customer can buy is 100. Set a quantity if you'd like to offer a different amount.

If successful, your response includes a copy of the new price entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreatePriceResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2, CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.prices.create({
  billingCycle: {
    frequency: 486589,
    interval: Period2Interval.Week,
  },
  customData: {},
  description: "Proactive systematic Graphical User Interface",
  productId: "South",
  quantity: {
    maximum: 100,
    minimum: 1,
  },
  taxMode: TaxMode1.Internal,
  trialPeriod: {
    frequency: 796474,
    interval: Period2Interval.Week,
  },
  unitPrice: {
    amount: "951.07",
    currencyCode: CurrencyCode2.Twd,
  },
  unitPriceOverrides: [
    {
      countryCodes: [
        CountryCode2.Ad,
      ],
      unitPrice: {
        amount: "455.22",
        currencyCode: CurrencyCode2.Chf,
      },
    },
  ],
}).then((res: CreatePriceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.PriceCreate](../../models/shared/pricecreate.md)            | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreatePriceResponse](../../models/operations/createpriceresponse.md)>**


## get

Returns a price using its ID.

Use the `include` parameter to include the related product entity in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetPriceResponse } from "Paddle/dist/sdk/models/operations";
import { IncludePrice } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.prices.get({
  include: IncludePrice.Product,
  priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
}).then((res: GetPriceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetPriceRequest](../../models/operations/getpricerequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                   | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetPriceResponse](../../models/operations/getpriceresponse.md)>**


## list

Returns a paginated list of prices. Use the query parameters to page through results.

By default, Paddle returns prices that are `active`. Use the `status` query parameter to return prices that are archived.

Use the `include` parameter to include the related product entity in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListPricesResponse } from "Paddle/dist/sdk/models/operations";
import { IncludePrice, Status } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.prices.list({
  after: "Northeast Metal Canada",
  id: "<ID>",
  include: IncludePrice.Product,
  orderBy: "Data Response West",
  perPage: 718303,
  productId: "pro_01gsz4vmqbjk3x4vvtafffd540",
  recurring: false,
  status: Status.Archived,
}).then((res: ListPricesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListPricesRequest](../../models/operations/listpricesrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListPricesResponse](../../models/operations/listpricesresponse.md)>**


## update

Updates a price using its ID.

If successful, your response includes a copy of the updated price entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdatePriceResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2, CurrencyCode2, Period2Interval, Schemasstatus, TaxMode1 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.prices.update({
  priceUpdate: {
    billingCycle: {
      frequency: 857478,
      interval: Period2Interval.Day,
    },
    customData: {},
    description: "Persistent 24/7 focus group",
    quantity: {
      maximum: 100,
      minimum: 1,
    },
    status: Schemasstatus.Archived,
    taxMode: TaxMode1.Internal,
    trialPeriod: {
      frequency: 270324,
      interval: Period2Interval.Month,
    },
    unitPrice: {
      amount: "684.20",
      currencyCode: CurrencyCode2.Jpy,
    },
    unitPriceOverrides: [
      {
        countryCodes: [
          CountryCode2.It,
        ],
        unitPrice: {
          amount: "984.01",
          currencyCode: CurrencyCode2.Cad,
        },
      },
    ],
  },
  priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
}).then((res: UpdatePriceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdatePriceRequest](../../models/operations/updatepricerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdatePriceResponse](../../models/operations/updatepriceresponse.md)>**

