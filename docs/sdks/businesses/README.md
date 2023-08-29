# businesses

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
import { CreateBusinessResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.businesses.create({
  businessCreateInput: {
    companyNumber: "123456789",
    contacts: [
      {
        email: "weloveyourproduct@paddle.com",
        name: "Cameron Dach",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Della Halvorson",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Velma Batz",
      },
    ],
    id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    name: "Darrin Brakus",
    taxIdentifier: "AB0123456789",
  },
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: CreateBusinessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateBusinessRequest](../../models/operations/createbusinessrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateBusinessResponse](../../models/operations/createbusinessresponse.md)>**


## get

Returns a business for a customer using its ID and related customer ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetBusinessResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.businesses.get({
  businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: GetBusinessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetBusinessRequest](../../models/operations/getbusinessrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetBusinessResponse](../../models/operations/getbusinessresponse.md)>**


## list

Returns a paginated list of businesses for a customer. Use the query parameters to page through results.

By default, Paddle returns businesses that are `active`. Use the `status` query parameter to return businesses that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListBusinessesResponse } from "Paddle/dist/sdk/models/operations";
import { Status } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.businesses.list({
  after: "culpa",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  id: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
  orderBy: "vero",
  perPage: 468651,
  search: "upgrade",
  status: Status.Archived,
}).then((res: ListBusinessesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListBusinessesRequest](../../models/operations/listbusinessesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListBusinessesResponse](../../models/operations/listbusinessesresponse.md)>**


## update

Updates a business for a customer using its ID and related customer ID.

If successful, your response includes a copy of the updated business entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateBusinessResponse } from "Paddle/dist/sdk/models/operations";
import { Schemasstatus } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.businesses.update({
  businessInput: {
    companyNumber: "123456789",
    contacts: [
      {
        email: "weloveyourproduct@paddle.com",
        name: "Geneva Klein Jr.",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Mrs. April Wuckert",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Mildred Pfeffer",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Elvira Bergnaum",
      },
    ],
    id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    name: "Andy Streich",
    status: Schemasstatus.Archived,
    taxIdentifier: "AB0123456789",
  },
  businessId: "biz_01gvcz4m28csa5kem2gqq5ymxn",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: UpdateBusinessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateBusinessRequest](../../models/operations/updatebusinessrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateBusinessResponse](../../models/operations/updatebusinessresponse.md)>**

