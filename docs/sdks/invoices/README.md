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
import { CancelInvoiceResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.cancel({
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: CancelInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CancelInvoiceRequest](../../models/operations/cancelinvoicerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CancelInvoiceResponse](../../models/operations/cancelinvoiceresponse.md)>**


## create

Creates a draft invoice.

Invoices are always created with the `status` as `draft`. This means they don't have an `invoice_number` and you can make changes to the invoice and its items.

If successful, your response includes a copy of the new invoice entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreateInvoiceResponse } from "Paddle/dist/sdk/models/operations";
import { CurrencyCodeInvoice, InvoiceBillingPeriodType, Period1Interval, TaxCategory1 } from "Paddle/dist/sdk/models/shared";
import { RFCDate } from "Paddle/dist/sdk/types";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.create({
  addressId: "add_01ghbkbv8s6kjram8fbfz49p45",
  billingDetails: {
    additionalInformation: "bluetooth Extended",
    enableCheckout: false,
    paymentTerms: {
      frequency: 134365,
      interval: Period1Interval.Year,
    },
    purchaseOrderNumber: "shred",
  },
  billingPeriod: {
    endsAt: new RFCDate("2022-02-17"),
    startsAt: new RFCDate("2023-11-08"),
    type: InvoiceBillingPeriodType.Service,
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
          description: "Multi-channelled client-driven encryption",
          id: "pro_01gsz97mq9pa4fkyy0wqenepkz",
          imageUrl: "http://salty-shadowbox.org",
          name: "quantify Polestar mobile",
          taxCategory: TaxCategory1.SoftwareProgrammingServices,
        },
        quantity: 357021,
        taxRate: "Fresh",
      },
    ],
  },
  items: [
    {
      price: {
        productId: "pro_01ghbkd0frb9k95cnhwd1bxpvk",
        unitPrice: {
          amount: "17.76",
          currencyCode: CurrencyCodeInvoice.Gbp,
        },
      },
      quantity: 230313,
    },
  ],
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.InvoiceInput](../../models/shared/invoiceinput.md)          | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateInvoiceResponse](../../models/operations/createinvoiceresponse.md)>**


## get

Returns an invoice using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetInvoiceResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.get({
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetInvoiceRequest](../../models/operations/getinvoicerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


## getPdf

Generates a PDF for an invoice, then returns a link to it.

The link returned is not a permanent link. It expires at the date and time returned in the `Expires` header.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetInvoicePdfResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.getPdf({
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: GetInvoicePdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetInvoicePdfRequest](../../models/operations/getinvoicepdfrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetInvoicePdfResponse](../../models/operations/getinvoicepdfresponse.md)>**


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
import { IssueInvoiceResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.issueInvoice({
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: IssueInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.IssueInvoiceRequest](../../models/operations/issueinvoicerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.IssueInvoiceResponse](../../models/operations/issueinvoiceresponse.md)>**


## list

Returns a paginated list of invoices. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListInvoicesResponse } from "Paddle/dist/sdk/models/operations";
import { StatusInvoice } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.list({
  after: "Northeast Metal Canada",
  id: "<ID>",
  perPage: 917416,
  search: "upgrade",
  status: StatusInvoice.Unpaid,
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)>**


## update

Updates a draft invoice using its ID.

Only invoices with the status of `draft` can be updated. You cannot update invoices that are issued, canceled, or paid.

If successful, your response includes a copy of the updated invoice entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateInvoiceResponse } from "Paddle/dist/sdk/models/operations";
import { CurrencyCodeInvoice, InvoiceForPatchBillingPeriodType, Period1Interval } from "Paddle/dist/sdk/models/shared";
import { RFCDate } from "Paddle/dist/sdk/types";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.invoices.update({
  invoiceForPatch: {
    addressId: "add_01ghbm9egqcxtz4ap4dfg8dtaf",
    billingDetails: {
      additionalInformation: "New Reactive dock",
      enableCheckout: false,
      paymentTerms: {
        frequency: 627690,
        interval: Period1Interval.Month,
      },
      purchaseOrderNumber: "invoice Arizona",
    },
    billingPeriod: {
      endsAt: new RFCDate("2021-11-01"),
      startsAt: new RFCDate("2023-09-09"),
      type: InvoiceForPatchBillingPeriodType.Contract,
    },
    businessId: "biz_01ghbmaszjgjd47g5f3d9vw7hg",
    currencyCode: CurrencyCodeInvoice.Gbp,
    customData: {},
    customerId: "ctm_01ghbm8g2qxsjp07p5ywsy61cs",
    items: [
      {
        price: {
          productId: "pro_01ghbkd0frb9k95cnhwd1bxpvk",
          unitPrice: {
            amount: "369.18",
            currencyCode: CurrencyCodeInvoice.Eur,
          },
        },
        quantity: 788440,
      },
    ],
  },
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateInvoiceRequest](../../models/operations/updateinvoicerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../models/operations/updateinvoiceresponse.md)>**

