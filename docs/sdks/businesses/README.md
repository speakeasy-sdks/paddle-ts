# Businesses
(*businesses*)

## Overview

Work with businesses for a customer.

Businesses - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/customers#business-object>
### Available Operations

* [create](#create) - Create a business for a customer
* [get](#get) - Get a business for a customer
* [list](#list) - List businesses for a customer
* [update](#update) - Update a business for a customer

## create

Creates a new business for a customer.

If successful, your response includes a copy of the new business entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.businesses.create({
    businessCreate: {
      companyNumber: "123456789",
      contacts: [
        {
          email: "weloveyourproduct@paddle.com",
          name: "string",
        },
      ],
      id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      name: "string",
      taxIdentifier: "AB0123456789",
    },
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBusinessRequest](../../sdk/models/operations/createbusinessrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateBusinessResponse](../../sdk/models/operations/createbusinessresponse.md)>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.CreateBusinessResponseBody                      | 400                                                    | application/json                                       |
| errors.CreateBusinessBusinessesResponseBody            | 401                                                    | application/json                                       |
| errors.CreateBusinessBusinessesResponseResponseBody    | 403                                                    | application/json                                       |
| errors.CreateBusinessBusinessesResponse404ResponseBody | 404                                                    | application/json                                       |
| errors.CreateBusinessBusinessesResponse500ResponseBody | 500                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## get

Returns a business for a customer using its ID and related customer ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.businesses.get({
    businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBusinessRequest](../../sdk/models/operations/getbusinessrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetBusinessResponse](../../sdk/models/operations/getbusinessresponse.md)>**
### Errors

| Error Object                                        | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetBusinessResponseBody                      | 401                                                 | application/json                                    |
| errors.GetBusinessBusinessesResponseBody            | 403                                                 | application/json                                    |
| errors.GetBusinessBusinessesResponseResponseBody    | 404                                                 | application/json                                    |
| errors.GetBusinessBusinessesResponse500ResponseBody | 500                                                 | application/json                                    |
| errors.SDKError                                     | 4xx-5xx                                             | */*                                                 |

## list

Returns a paginated list of businesses for a customer. Use the query parameters to page through results.

By default, Paddle returns businesses that are `active`. Use the `status` query parameter to return businesses that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { Status } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.businesses.list({
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
    search: "upgrade",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBusinessesRequest](../../sdk/models/operations/listbusinessesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListBusinessesResponse](../../sdk/models/operations/listbusinessesresponse.md)>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ListBusinessesResponseBody                      | 401                                                    | application/json                                       |
| errors.ListBusinessesBusinessesResponseBody            | 403                                                    | application/json                                       |
| errors.ListBusinessesBusinessesResponseResponseBody    | 404                                                    | application/json                                       |
| errors.ListBusinessesBusinessesResponse500ResponseBody | 500                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## update

Updates a business for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated business entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { SchemaStatus } from "Paddle/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.businesses.update({
    business: {
      companyNumber: "123456789",
      contacts: [
        {
          email: "weloveyourproduct@paddle.com",
          name: "string",
        },
      ],
      id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      taxIdentifier: "AB0123456789",
    },
    businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBusinessRequest](../../sdk/models/operations/updatebusinessrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateBusinessResponse](../../sdk/models/operations/updatebusinessresponse.md)>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.UpdateBusinessResponseBody                      | 400                                                    | application/json                                       |
| errors.UpdateBusinessBusinessesResponseBody            | 401                                                    | application/json                                       |
| errors.UpdateBusinessBusinessesResponseResponseBody    | 403                                                    | application/json                                       |
| errors.UpdateBusinessBusinessesResponse404ResponseBody | 404                                                    | application/json                                       |
| errors.UpdateBusinessBusinessesResponse500ResponseBody | 500                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |
