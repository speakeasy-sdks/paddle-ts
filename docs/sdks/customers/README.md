# Customers
(*customers*)

## Overview

Work with customers.

Customers - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/customers>
### Available Operations

* [create](#create) - Create a customer
* [get](#get) - Get a customer
* [list](#list) - List customers
* [listCreditBalances](#listcreditbalances) - List credit balances for a customer
* [update](#update) - Update a customer

## create

Creates a new customer.

If successful, your response includes a copy of the new customer entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.customers.create({
    email: "weloveyourproduct@paddle.com",
    id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CustomerCreate](../../sdk/models/shared/customercreate.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateCustomerResponse](../../sdk/models/operations/createcustomerresponse.md)>**
### Errors

| Error Object                                          | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.CreateCustomerResponseBody                     | 400                                                   | application/json                                      |
| errors.CreateCustomerCustomersResponseBody            | 401                                                   | application/json                                      |
| errors.CreateCustomerCustomersResponseResponseBody    | 403                                                   | application/json                                      |
| errors.CreateCustomerCustomersResponse500ResponseBody | 500                                                   | application/json                                      |
| errors.SDKError                                       | 4xx-5xx                                               | */*                                                   |

## get

Returns a customer using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.customers.get({
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
| `request`                                                                                                                                                                      | [operations.GetCustomerRequest](../../sdk/models/operations/getcustomerrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCustomerResponse](../../sdk/models/operations/getcustomerresponse.md)>**
### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetCustomerResponseBody                     | 401                                                | application/json                                   |
| errors.GetCustomerCustomersResponseBody            | 403                                                | application/json                                   |
| errors.GetCustomerCustomersResponseResponseBody    | 404                                                | application/json                                   |
| errors.GetCustomerCustomersResponse500ResponseBody | 500                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |

## list

Returns a paginated list of customers. Use the query parameters to page through results.

By default, Paddle returns customers that are `active`. Use the `status` query parameter to return customers that are archived.

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

  const result = await sdk.customers.list({
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
| `request`                                                                                                                                                                      | [operations.ListCustomersRequest](../../sdk/models/operations/listcustomersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListCustomersResponse](../../sdk/models/operations/listcustomersresponse.md)>**
### Errors

| Error Object                                         | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.ListCustomersResponseBody                     | 401                                                  | application/json                                     |
| errors.ListCustomersCustomersResponseBody            | 403                                                  | application/json                                     |
| errors.ListCustomersCustomersResponseResponseBody    | 404                                                  | application/json                                     |
| errors.ListCustomersCustomersResponse500ResponseBody | 500                                                  | application/json                                     |
| errors.SDKError                                      | 4xx-5xx                                              | */*                                                  |

## listCreditBalances

Returns a list of credit balances for each currency for a customer. Each balance has three totals:

* `available`: total available to use.
* `reserved`: total temporarily reserved for billed transactions.
* `used`: total amount of credit used.

Credit is added to the `available` total initially. When used, it moves to the `used` total.

The `reserved` total is used when a credit balance is applied to a transaction that's marked as `billed`, like when working with an issued invoice. It's not available for other transactions at this point, but isn't considered `used` until the transaction is completed. If a `billed` transaction is `canceled`, any reserved credit moves back to `available`.

The response is not paginated.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.customers.listCreditBalances({
    currencyCode: "EUR",
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
| `request`                                                                                                                                                                      | [operations.ListCreditBalancesRequest](../../sdk/models/operations/listcreditbalancesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListCreditBalancesResponse](../../sdk/models/operations/listcreditbalancesresponse.md)>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ListCreditBalancesResponseBody                  | 400                                                    | application/json                                       |
| errors.ListCreditBalancesCustomersResponseBody         | 404                                                    | application/json                                       |
| errors.ListCreditBalancesCustomersResponseResponseBody | 500                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## update

Updates a customer using its ID.

If successful, your response includes a copy of the updated customer entity.

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

  const result = await sdk.customers.update({
    customer: {
      email: "weloveyourproduct@paddle.com",
      id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
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
| `request`                                                                                                                                                                      | [operations.UpdateCustomerRequest](../../sdk/models/operations/updatecustomerrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateCustomerResponse](../../sdk/models/operations/updatecustomerresponse.md)>**
### Errors

| Error Object                                          | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.UpdateCustomerResponseBody                     | 400                                                   | application/json                                      |
| errors.UpdateCustomerCustomersResponseBody            | 401                                                   | application/json                                      |
| errors.UpdateCustomerCustomersResponseResponseBody    | 403                                                   | application/json                                      |
| errors.UpdateCustomerCustomersResponse404ResponseBody | 404                                                   | application/json                                      |
| errors.UpdateCustomerCustomersResponse500ResponseBody | 500                                                   | application/json                                      |
| errors.SDKError                                       | 4xx-5xx                                               | */*                                                   |
