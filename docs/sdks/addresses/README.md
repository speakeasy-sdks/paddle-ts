# addresses

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
import { CreateAddressResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.addresses.create({
  addressCreateInput: {
    city: "Astoria",
    countryCode: CountryCode2.Ph,
    description: "Paddle.com",
    firstLine: "3811 Ditmars Blvd",
    id: "add_01gm302t81w94gyjpjpqypkzkf",
    postalCode: "11105-1803",
    region: "NY",
    secondLine: "quibusdam",
  },
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: CreateAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateAddressRequest](../../models/operations/createaddressrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateAddressResponse](../../models/operations/createaddressresponse.md)>**


## get

Returns an address for a customer using its ID and related customer ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetAddressResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.addresses.get({
  addressId: "add_01gvcz6r0t0g5cphhwd8n952gb",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: GetAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAddressRequest](../../models/operations/getaddressrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAddressResponse](../../models/operations/getaddressresponse.md)>**


## list

Returns a paginated list of addresses for a customer. Use the query parameters to page through results.

By default, Paddle returns addresses that are `active`. Use the `status` query parameter to return addresses that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListAddressesResponse } from "Paddle/dist/sdk/models/operations";
import { Status } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.addresses.list({
  after: "unde",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  id: "d8d69a67-4e0f-4467-8c87-96ed151a05df",
  orderBy: "quo",
  perPage: 140350,
  search: "upgrade",
  status: Status.Archived,
}).then((res: ListAddressesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListAddressesRequest](../../models/operations/listaddressesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListAddressesResponse](../../models/operations/listaddressesresponse.md)>**


## update

Updates an address for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated address entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateAddressResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2, Schemasstatus } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.addresses.update({
  addressInput: {
    city: "Astoria",
    countryCode: CountryCode2.Th,
    description: "Paddle.com",
    firstLine: "3811 Ditmars Blvd",
    id: "add_01gm302t81w94gyjpjpqypkzkf",
    postalCode: "11105-1803",
    region: "NY",
    secondLine: "maiores",
    status: Schemasstatus.Active,
  },
  addressId: "add_01gvcz6r0t0g5cphhwd8n952gb",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: UpdateAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateAddressRequest](../../models/operations/updateaddressrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateAddressResponse](../../models/operations/updateaddressresponse.md)>**

