# customers

## Overview

Work with customers.

Customers - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/customers>
### Available Operations

* [createCustomer](#createcustomer) - Create a customer
* [getCustomer](#getcustomer) - Get a customer
* [listCreditBalances](#listcreditbalances) - List credit balances for a customer
* [listCustomers](#listcustomers) - List customers
* [updateCustomer](#updatecustomer) - Update a customer

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

sdk.customers.createCustomer({
  email: "weloveyourproduct@paddle.com",
  id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  locale: "voluptates",
  name: "Dr. Casey Mayer",
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

sdk.customers.getCustomer({
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
import { ListCreditBalancesResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.customers.listCreditBalances({
  currencyCode: "EUR",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: ListCreditBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCreditBalancesRequest](../../models/operations/listcreditbalancesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCreditBalancesResponse](../../models/operations/listcreditbalancesresponse.md)>**


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

sdk.customers.listCustomers({
  after: "enim",
  id: "0ad2abd4-4269-4802-9502-a94bb4f63c96",
  orderBy: "provident",
  perPage: 896039,
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

sdk.customers.updateCustomer({
  customerInput: {
    email: "weloveyourproduct@paddle.com",
    id: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    locale: "officia",
    name: "Raquel Wilderman",
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

