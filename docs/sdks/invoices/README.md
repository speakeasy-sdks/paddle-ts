# Invoices
(*invoices*)

## Overview

Work with invoices.

Invoices - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/invoices>
### Available Operations

* [cancel](#cancel) - Cancel an invoice
* [create](#create) - Create a draft invoice
* [get](#get) - Get an invoice
* [getPdf](#getpdf) - Get a PDF for an invoice
* [issueInvoice](#issueinvoice) - Issue an invoice
* [list](#list) - List invoices
* [update](#update) - Update a draft invoice

## cancel

Cancels an invoice using its ID.

Invoices can only be canceled where they are not `paid` or already canceled.

If successful, your response includes a copy of the invoice entity with the `status` of `canceled`.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.cancel({
    invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
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
| `request`                                                                              | [operations.CancelInvoiceRequest](../../sdk/models/operations/cancelinvoicerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CancelInvoiceResponse](../../sdk/models/operations/cancelinvoiceresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CancelInvoiceResponseBody                 | 401                                              | application/json                                 |
| errors.CancelInvoiceInvoicesResponseBody         | 404                                              | application/json                                 |
| errors.CancelInvoiceInvoicesResponseResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## create

Creates a draft invoice.

Invoices are always created with the `status` as `draft`. This means they don't have an `invoice_number` and you can make changes to the invoice and its items.

If successful, your response includes a copy of the new invoice entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CurrencyCodeInvoice, Interval, InvoiceType, TaxCategory1 } from "Paddle/dist/sdk/models/shared";
import { RFCDate } from "Paddle/dist/sdk/types";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.create({
    addressId: "add_01ghbkbv8s6kjram8fbfz49p45",
    billingDetails: {
      paymentTerms: {
        frequency: 486589,
        interval: Interval.Week,
      },
    },
    billingPeriod: {
      endsAt: new RFCDate("2023-12-01"),
      startsAt: new RFCDate("2024-07-30"),
      type: InvoiceType.Contract,
    },
    businessId: "biz_01ghbkcbs88yxj4fxecevjz9g7",
    currencyCode: CurrencyCodeInvoice.Eur,
    customData: {},
    customerId: "ctm_01ghbkbbm326p19wh85fnr0xft",
    details: {
      lineItems: [
        {
          product: {
            customData: {},
            id: "pro_01gsz97mq9pa4fkyy0wqenepkz",
          },
        },
      ],
    },
    items: [
      {
        price: {
          productId: "pro_01ghbkd0frb9k95cnhwd1bxpvk",
          unitPrice: {
            amount: "134.36",
            currencyCode: CurrencyCodeInvoice.Usd,
          },
        },
        quantity: 69025,
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.InvoiceInput](../../sdk/models/shared/invoiceinput.md)      | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateInvoiceResponse](../../sdk/models/operations/createinvoiceresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CreateInvoiceResponseBody                 | 400                                              | application/json                                 |
| errors.CreateInvoiceInvoicesResponseBody         | 401                                              | application/json                                 |
| errors.CreateInvoiceInvoicesResponseResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## get

Returns an invoice using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.get({
    invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
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
| `request`                                                                        | [operations.GetInvoiceRequest](../../sdk/models/operations/getinvoicerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetInvoiceResponse](../../sdk/models/operations/getinvoiceresponse.md)>**
### Errors

| Error Object                                  | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.GetInvoiceResponseBody                 | 401                                           | application/json                              |
| errors.GetInvoiceInvoicesResponseBody         | 404                                           | application/json                              |
| errors.GetInvoiceInvoicesResponseResponseBody | 500                                           | application/json                              |
| errors.SDKError                               | 4xx-5xx                                       | */*                                           |

## getPdf

Generates a PDF for an invoice, then returns a link to it.

The link returned is not a permanent link. It expires at the date and time returned in the `Expires` header.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.getPdf({
    invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
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
| `request`                                                                              | [operations.GetInvoicePdfRequest](../../sdk/models/operations/getinvoicepdfrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetInvoicePdfResponse](../../sdk/models/operations/getinvoicepdfresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.GetInvoicePdfResponseBody                 | 401                                              | application/json                                 |
| errors.GetInvoicePdfInvoicesResponseBody         | 404                                              | application/json                                 |
| errors.GetInvoicePdfInvoicesResponseResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 4xx-5xx                                          | */*                                              |

## issueInvoice

Issues a draft invoice, changing the `status` from `draft` to either:

* `pending_acceptance`, where a customer hasn't yet accepted the Paddle merchant of record terms
* `unpaid` otherwise

At this point, Paddle:

* assigns an `invoice_number`
* sends a copy of the invoice to your customer and any `contacts` against the business on the invoice

Issued invoices are considered a legal document, so you can't make any changes to them. Cancel an invoice and create another if you need to make changes.

If successful, your response includes a copy of the invoice entity with the new status.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.issueInvoice({
    invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.IssueInvoiceRequest](../../sdk/models/operations/issueinvoicerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.IssueInvoiceResponse](../../sdk/models/operations/issueinvoiceresponse.md)>**
### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.IssueInvoiceResponseBody                    | 400                                                | application/json                                   |
| errors.IssueInvoiceInvoicesResponseBody            | 401                                                | application/json                                   |
| errors.IssueInvoiceInvoicesResponseResponseBody    | 404                                                | application/json                                   |
| errors.IssueInvoiceInvoicesResponse422ResponseBody | 422                                                | application/json                                   |
| errors.IssueInvoiceInvoicesResponse500ResponseBody | 500                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |

## list

Returns a paginated list of invoices. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { StatusInvoice } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.list({
    search: "upgrade",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListInvoicesRequest](../../sdk/models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListInvoicesResponse](../../sdk/models/operations/listinvoicesresponse.md)>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.ListInvoicesResponseBody         | 401                                     | application/json                        |
| errors.ListInvoicesInvoicesResponseBody | 500                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## update

Updates a draft invoice using its ID.

Only invoices with the status of `draft` can be updated. You cannot update invoices that are issued, canceled, or paid.

If successful, your response includes a copy of the updated invoice entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CurrencyCodeInvoice, Interval, InvoiceForPatchType } from "Paddle/dist/sdk/models/shared";
import { RFCDate } from "Paddle/dist/sdk/types";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.invoices.update({
    invoiceForPatch: {
      addressId: "add_01ghbm9egqcxtz4ap4dfg8dtaf",
      billingDetails: {
        paymentTerms: {
          frequency: 857478,
          interval: Interval.Day,
        },
      },
      billingPeriod: {
        endsAt: new RFCDate("2023-10-17"),
        startsAt: new RFCDate("2022-01-18"),
        type: InvoiceForPatchType.Contract,
      },
      businessId: "biz_01ghbmaszjgjd47g5f3d9vw7hg",
      customData: {},
      customerId: "ctm_01ghbm8g2qxsjp07p5ywsy61cs",
      items: [
        {
          price: {
            productId: "pro_01ghbkd0frb9k95cnhwd1bxpvk",
            unitPrice: {
              amount: "708.46",
              currencyCode: CurrencyCodeInvoice.Usd,
            },
          },
          quantity: 270324,
        },
      ],
    },
    invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
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
| `request`                                                                              | [operations.UpdateInvoiceRequest](../../sdk/models/operations/updateinvoicerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../sdk/models/operations/updateinvoiceresponse.md)>**
### Errors

| Error Object                                        | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.UpdateInvoiceResponseBody                    | 400                                                 | application/json                                    |
| errors.UpdateInvoiceInvoicesResponseBody            | 401                                                 | application/json                                    |
| errors.UpdateInvoiceInvoicesResponseResponseBody    | 404                                                 | application/json                                    |
| errors.UpdateInvoiceInvoicesResponse422ResponseBody | 422                                                 | application/json                                    |
| errors.UpdateInvoiceInvoicesResponse500ResponseBody | 500                                                 | application/json                                    |
| errors.SDKError                                     | 4xx-5xx                                             | */*                                                 |
