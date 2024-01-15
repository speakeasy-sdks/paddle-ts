# Products
(*products*)

## Overview

Work with products.

Products - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/products>
### Available Operations

* [create](#create) - Create a product
* [get](#get) - Get a product
* [list](#list) - List products
* [update](#update) - Update a product

## create

Creates a new product.

Paddle does not upload product images to a CDN. For `image_url`, you should host images on an HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).

If successful, your response includes a copy of the new product entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { TaxCategory1 } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.products.create({
    customData: {},
    name: "string",
    taxCategory: TaxCategory1.Saas,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ProductCreate](../../sdk/models/shared/productcreate.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateProductResponse](../../sdk/models/operations/createproductresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CreateProductResponseBody                 | 400                                              | application/json                                 |
| errors.CreateProductProductsResponseBody         | 401                                              | application/json                                 |
| errors.CreateProductProductsResponseResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## get

Returns a product using its ID.

Use the `include` parameter to include related price entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludeProduct } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.products.get({
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
| `request`                                                                                                                                                                      | [operations.GetProductRequest](../../sdk/models/operations/getproductrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetProductResponse](../../sdk/models/operations/getproductresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetProductResponseBody                 | 401                                           | application/json                              |
| errors.GetProductProductsResponseBody         | 404                                           | application/json                              |
| errors.GetProductProductsResponseResponseBody | 500                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |

## list

Returns a paginated list of products. Use the query parameters to page through results.

By default, Paddle returns products that are `active`. Use the `status` query parameter to return products that are archived.

Use the `include` parameter to include related price entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludeProduct, Status, TaxCategory } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.products.list({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProductsRequest](../../sdk/models/operations/listproductsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListProductsResponse](../../sdk/models/operations/listproductsresponse.md)>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.ListProductsResponseBody         | 401                                     | application/json                        |
| errors.ListProductsProductsResponseBody | 500                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## update

Updates a product using its ID.

Paddle does not upload product images to a CDN. For `image_url`, you should host images on an HTTPS server that's publicly accessible. We recommend using square images (`1:1` ratio).

If successful, your response includes a copy of the updated product entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { SchemaStatus, TaxCategory1 } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.products.update({
    productPatch: {
      customData: {},
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateProductRequest](../../sdk/models/operations/updateproductrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateProductResponse](../../sdk/models/operations/updateproductresponse.md)>**
### Errors

| Error Object                                        | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.UpdateProductResponseBody                    | 400                                                 | application/json                                    |
| errors.UpdateProductProductsResponseBody            | 401                                                 | application/json                                    |
| errors.UpdateProductProductsResponseResponseBody    | 404                                                 | application/json                                    |
| errors.UpdateProductProductsResponse500ResponseBody | 500                                                 | application/json                                    |
| errors.SDKError                                     | 4xx-5xx                                             | */*                                                 |
