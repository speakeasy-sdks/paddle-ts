# customerService

### Available Operations

* [createAddress](#createaddress) - Create an address for a customer
* [createBusiness](#createbusiness) - Create a business for a customer
* [createCustomer](#createcustomer) - Create a customer
* [getAddress](#getaddress) - Get an address for a customer
* [getBusiness](#getbusiness) - Get a business for a customer
* [getCustomer](#getcustomer) - Get a customer
* [listAddresses](#listaddresses) - List addresses for a customer
* [listBusinesses](#listbusinesses) - List businesses for a customer
* [listCustomers](#listcustomers) - List customers
* [updateAddress](#updateaddress) - Update an address for a customer
* [updateBusiness](#updatebusiness) - Update a business for a customer
* [updateCustomer](#updatecustomer) - Update a customer

## createAddress

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

sdk.customerService.createAddress({
  addressCreateInput: {
    city: "Astoria",
    countryCode: CountryCode2.Ci,
    description: "Paddle.com",
    firstLine: "3811 Ditmars Blvd",
    id: "add_01gm302t81w94gyjpjpqypkzkf",
    postalCode: "11105-1803",
    region: "NY",
    secondLine: "blanditiis",
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


## createBusiness

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

sdk.customerService.createBusiness({
  businessCreateInput: {
    companyNumber: "123456789",
    contacts: [
      {
        email: "weloveyourproduct@paddle.com",
        name: "Violet Price",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Edwin Morar",
      },
      {
        email: "weloveyourproduct@paddle.com",
        name: "Rene Rolfson",
      },
    ],
    id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    name: "Billie Jacobi",
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


## createCustomer

Creates a new customer.

If successful, your response includes a copy of the new customer entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreateCustomerResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.customerService.createCustomer({
  email: "weloveyourproduct@paddle.com",
  id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  locale: "dolor",
  name: "Tiffany Welch",
}).then((res: CreateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CustomerCreateInput](../../models/shared/customercreateinput.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateCustomerResponse](../../models/operations/createcustomerresponse.md)>**


## getAddress

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

sdk.customerService.getAddress({
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


## getBusiness

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

sdk.customerService.getBusiness({
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


## getCustomer

Returns a customer using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetCustomerResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.customerService.getCustomer({
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## listAddresses

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

sdk.customerService.listAddresses({
  after: "voluptate",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  id: "7f3a4100-674e-4bf6-9280-d1ba77a89ebf",
  orderBy: "nihil",
  perPage: 216897,
  search: "upgrade",
  status: Status.Active,
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


## listBusinesses

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

sdk.customerService.listBusinesses({
  after: "id",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
  id: "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c",
  orderBy: "tenetur",
  perPage: 229442,
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


## listCustomers

Returns a paginated list of customers. Use the query parameters to page through results.

By default, Paddle returns customers that are `active`. Use the `status` query parameter to return customers that are archived.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListCustomersResponse } from "Paddle/dist/sdk/models/operations";
import { Status } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.customerService.listCustomers({
  after: "accusamus",
  id: "453f870b-326b-45a7-b429-cdb1a8422bb6",
  orderBy: "quam",
  perPage: 565421,
  search: "upgrade",
  status: Status.Archived,
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)>**


## updateAddress

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

sdk.customerService.updateAddress({
  addressInput: {
    city: "Astoria",
    countryCode: CountryCode2.Cn,
    description: "Paddle.com",
    firstLine: "3811 Ditmars Blvd",
    id: "add_01gm302t81w94gyjpjpqypkzkf",
    postalCode: "11105-1803",
    region: "NY",
    secondLine: "neque",
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


## updateBusiness

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

sdk.customerService.updateBusiness({
  businessInput: {
    companyNumber: "123456789",
    contacts: [
      {
        email: "weloveyourproduct@paddle.com",
        name: "Ashley Hermiston",
      },
    ],
    id: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    name: "Erma Rogahn PhD",
    status: Schemasstatus.Active,
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


## updateCustomer

Updates a customer using its ID.

If successful, your response includes a copy of the updated customer entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateCustomerResponse } from "Paddle/dist/sdk/models/operations";
import { Schemasstatus } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.customerService.updateCustomer({
  customerInput: {
    email: "weloveyourproduct@paddle.com",
    id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    locale: "veritatis",
    name: "Isaac Reynolds DVM",
    status: Schemasstatus.Active,
  },
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**

