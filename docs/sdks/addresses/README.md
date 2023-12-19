# Addresses
(*addresses*)

## Overview

Work with addresses for a customer.

Addresses - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/customers#address-object>
### Available Operations

* [create](#create) - Create an address for a customer
* [get](#get) - Get an address for a customer
* [list](#list) - List addresses for a customer
* [update](#update) - Update an address for a customer

## create

Creates a new address for a customer.

For tax calculation, fraud prevention, and compliance purposes, you must include a `postal_code` when creating addresses for some countries. For example, ZIP codes in the USA and postcodes in the UK. See: [Supported countries](/concepts/sell/supported-countries-locales)

If successful, your response includes a copy of the new address entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CountryCode2 } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.addresses.create({
    addressCreate: {
      city: "Astoria",
      countryCode: CountryCode2.Kn,
      description: "Paddle.com",
      firstLine: "3811 Ditmars Blvd",
      id: "add_01gm302t81w94gyjpjpqypkzkf",
      postalCode: "11105-1803",
      region: "NY",
    },
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateAddressRequest](../../sdk/models/operations/createaddressrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateAddressResponse](../../sdk/models/operations/createaddressresponse.md)>**
### Errors

| Error Object                                         | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.CreateAddressResponseBody                     | 400                                                  | application/json                                     |
| errors.CreateAddressAddressesResponseBody            | 401                                                  | application/json                                     |
| errors.CreateAddressAddressesResponseResponseBody    | 403                                                  | application/json                                     |
| errors.CreateAddressAddressesResponse404ResponseBody | 404                                                  | application/json                                     |
| errors.CreateAddressAddressesResponse500ResponseBody | 500                                                  | application/json                                     |
| errors.SDKError                                      | 4xx-5xx                                              | */*                                                  |

## get

Returns an address for a customer using its ID and related customer ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.addresses.get({
    addressId: "add_01gvcz6r0t0g5cphhwd8n952gb",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAddressRequest](../../sdk/models/operations/getaddressrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetAddressResponse](../../sdk/models/operations/getaddressresponse.md)>**
### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.GetAddressResponseBody                     | 400                                               | application/json                                  |
| errors.GetAddressAddressesResponseBody            | 401                                               | application/json                                  |
| errors.GetAddressAddressesResponseResponseBody    | 403                                               | application/json                                  |
| errors.GetAddressAddressesResponse404ResponseBody | 404                                               | application/json                                  |
| errors.GetAddressAddressesResponse500ResponseBody | 500                                               | application/json                                  |
| errors.SDKError                                   | 4xx-5xx                                           | */*                                               |

## list

Returns a paginated list of addresses for a customer. Use the query parameters to page through results.

By default, Paddle returns addresses that are `active`. Use the `status` query parameter to return addresses that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { Status } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.addresses.list({
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
    search: "upgrade",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListAddressesRequest](../../sdk/models/operations/listaddressesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListAddressesResponse](../../sdk/models/operations/listaddressesresponse.md)>**
### Errors

| Error Object                                         | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.ListAddressesResponseBody                     | 401                                                  | application/json                                     |
| errors.ListAddressesAddressesResponseBody            | 403                                                  | application/json                                     |
| errors.ListAddressesAddressesResponseResponseBody    | 404                                                  | application/json                                     |
| errors.ListAddressesAddressesResponse500ResponseBody | 500                                                  | application/json                                     |
| errors.SDKError                                      | 4xx-5xx                                              | */*                                                  |

## update

Updates an address for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated address entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CountryCode2, SchemaStatus } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.addresses.update({
    address: {
      city: "Astoria",
      description: "Paddle.com",
      firstLine: "3811 Ditmars Blvd",
      id: "add_01gm302t81w94gyjpjpqypkzkf",
      postalCode: "11105-1803",
      region: "NY",
    },
    addressId: "add_01gvcz6r0t0g5cphhwd8n952gb",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateAddressRequest](../../sdk/models/operations/updateaddressrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateAddressResponse](../../sdk/models/operations/updateaddressresponse.md)>**
### Errors

| Error Object                                         | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.UpdateAddressResponseBody                     | 400                                                  | application/json                                     |
| errors.UpdateAddressAddressesResponseBody            | 401                                                  | application/json                                     |
| errors.UpdateAddressAddressesResponseResponseBody    | 403                                                  | application/json                                     |
| errors.UpdateAddressAddressesResponse404ResponseBody | 404                                                  | application/json                                     |
| errors.UpdateAddressAddressesResponse500ResponseBody | 500                                                  | application/json                                     |
| errors.SDKError                                      | 4xx-5xx                                              | */*                                                  |
