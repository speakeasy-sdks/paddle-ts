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

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.businesses.create({
    businessCreateInput: {
      companyNumber: "123456789",
      contacts: [
        {
          email: "weloveyourproduct@paddle.com",
          name: "online",
        },
      ],
      id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      name: "Configuration",
      taxIdentifier: "AB0123456789",
    },
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateBusinessRequest](../../models/operations/createbusinessrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateBusinessResponse](../../models/operations/createbusinessresponse.md)>**


## get

Returns a business for a customer using its ID and related customer ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.businesses.get({
    businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetBusinessRequest](../../models/operations/getbusinessrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetBusinessResponse](../../models/operations/getbusinessresponse.md)>**


## list

Returns a paginated list of businesses for a customer. Use the query parameters to page through results.

By default, Paddle returns businesses that are `active`. Use the `status` query parameter to return businesses that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { Status } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.businesses.list({
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
    search: "upgrade",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListBusinessesRequest](../../models/operations/listbusinessesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListBusinessesResponse](../../models/operations/listbusinessesresponse.md)>**


## update

Updates a business for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated business entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { Schemasstatus } from "Paddle/dist/sdk/models/shared";

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.businesses.update({
    businessInput: {
      companyNumber: "123456789",
      contacts: [
        {
          email: "weloveyourproduct@paddle.com",
          name: "Van",
        },
      ],
      id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      taxIdentifier: "AB0123456789",
    },
    businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
    customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateBusinessRequest](../../models/operations/updatebusinessrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateBusinessResponse](../../models/operations/updatebusinessresponse.md)>**

