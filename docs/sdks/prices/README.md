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
import { CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.prices.create({
    billingCycle: {
      frequency: 486589,
      interval: Period2Interval.Week,
    },
    customData: {},
    description: "Proactive systematic Graphical User Interface",
    productId: "string",
    quantity: {
      maximum: 100,
      minimum: 1,
    },
    trialPeriod: {
      frequency: 288408,
      interval: Period2Interval.Day,
    },
    unitPrice: {
      amount: "786.55",
      currencyCode: CurrencyCode2.Brl,
    },
    unitPriceOverrides: [
      {
        countryCodes: [
          CountryCode2.Zm,
        ],
        unitPrice: {
          amount: "796.48",
          currencyCode: CurrencyCode2.Hkd,
        },
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.PriceCreate](../../sdk/models/shared/pricecreate.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreatePriceResponse](../../sdk/models/operations/createpriceresponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.CreatePriceResponseBody               | 400                                          | application/json                             |
| errors.CreatePricePricesResponseBody         | 403                                          | application/json                             |
| errors.CreatePricePricesResponseResponseBody | 500                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |

## get

Returns a price using its ID.

Use the `include` parameter to include the related product entity in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludePrice } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.prices.get({
    priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPriceRequest](../../sdk/models/operations/getpricerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPriceResponse](../../sdk/models/operations/getpriceresponse.md)>**
### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetPriceResponseBody               | 401                                       | application/json                          |
| errors.GetPricePricesResponseBody         | 404                                       | application/json                          |
| errors.GetPricePricesResponseResponseBody | 500                                       | application/json                          |
| errors.SDKError                           | 4xx-5xx                                   | */*                                       |

## list

Returns a paginated list of prices. Use the query parameters to page through results.

By default, Paddle returns prices that are `active`. Use the `status` query parameter to return prices that are archived.

Use the `include` parameter to include the related product entity in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludePrice, Status } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.prices.list({
    productId: "pro_01gsz4vmqbjk3x4vvtafffd540",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPricesRequest](../../sdk/models/operations/listpricesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListPricesResponse](../../sdk/models/operations/listpricesresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ListPricesResponseBody       | 401                                 | application/json                    |
| errors.ListPricesPricesResponseBody | 500                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |

## update

Updates a price using its ID.

If successful, your response includes a copy of the updated price entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CurrencyCode2, Period2Interval, SchemaStatus, TaxMode1 } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.prices.update({
    priceUpdate: {
      billingCycle: {
        frequency: 857478,
        interval: Period2Interval.Day,
      },
      customData: {},
      quantity: {
        maximum: 100,
        minimum: 1,
      },
      trialPeriod: {
        frequency: 597129,
        interval: Period2Interval.Day,
      },
      unitPrice: {
        amount: "344.62",
        currencyCode: CurrencyCode2.Rub,
      },
      unitPriceOverrides: [
        {
          countryCodes: [
            CountryCode2.Za,
          ],
          unitPrice: {
            amount: "270.32",
            currencyCode: CurrencyCode2.Nzd,
          },
        },
      ],
    },
    priceId: "pri_01gvne87kv8vbqa9jkfbmgtsed",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePriceRequest](../../sdk/models/operations/updatepricerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdatePriceResponse](../../sdk/models/operations/updatepriceresponse.md)>**
### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UpdatePriceResponseBody               | 401                                          | application/json                             |
| errors.UpdatePricePricesResponseBody         | 404                                          | application/json                             |
| errors.UpdatePricePricesResponseResponseBody | 500                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |
