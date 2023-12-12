# Transactions
(*transactions*)

## Overview

Work with transactions.

Transactions - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/transactions>
### Available Operations

* [create](#create) - Create a transaction
* [get](#get) - Get a transaction
* [getInvoice](#getinvoice) - Get a PDF invoice for a transaction
* [list](#list) - List transactions
* [previewTransaction](#previewtransaction) - Preview a transaction
* [pricePreview](#pricepreview) - Preview prices
* [update](#update) - Update a transaction

## create

Creates a new transaction.

Transactions are typically created with the status of `draft` or `ready` initially:

* Draft transactions have `items` against them, but don't have all of the required fields for billing. Paddle creates draft transactions automatically when a checkout is opened.
* Paddle automatically marks transactions as `ready` when all of the required fields are present for billing. This includes `customer_id` and `address_id` for automatically-collected transactions, and `billing_details` for manually-collected transactions.

The `collection_mode` against a transaction determines how Paddle tries to collect for payment:

* Manually-collected transactions are for sales-assisted billing. Paddle sends an invoice to your customer when a transaction is `billed`. Payment is often by wire transfer.
* Automatically-collected transactions are for self-serve checkouts. Paddle tries to collect using a payment method on file, or you may pass the transaction to a checkout to collect for payment.

When a manually-collected transaction is marked as `billed` or an automatically-collected transaction is `completed`, Paddle automatically creates a related subscription for the items on the transaction.

If successful, your response includes a copy of the new transaction entity.

Use the `include` parameter to include related entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import {
  CollectionMode2,
  CountryCode2,
  CurrencyCode2,
  IncludeTransaction,
  Period2Interval,
  TaxMode1,
} from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.create({
    transactionCreate: {
      billedAt: new Date("2024-10-12T07:20:50.52Z"),
      billingDetails: {
        paymentTerms: {
          frequency: 486589,
          interval: Period2Interval.Week,
        },
      },
      billingPeriod: {
        endsAt: new Date("2024-10-12T07:20:50.52Z"),
        startsAt: new Date("2024-10-12T07:20:50.52Z"),
      },
      businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      customData: {},
      discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
      id: "txn_01h04vsbhqc62t8hmd4z3b578c",
      items: [
        {
          price: {
            billingCycle: {
              frequency: 638424,
              interval: Period2Interval.Year,
            },
            customData: {},
            id: "pri_01gsz8z1q1n00f12qt82y31smh",
            productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
            quantity: {
              maximum: 100,
              minimum: 1,
            },
            trialPeriod: {
              frequency: 417458,
              interval: Period2Interval.Week,
            },
            unitPrice: {
              amount: "134.36",
              currencyCode: CurrencyCode2.Sgd,
            },
            unitPriceOverrides: [
              {
                countryCodes: [
                  CountryCode2.Bb,
                ],
                unitPrice: {
                  amount: "996.71",
                  currencyCode: CurrencyCode2.Thb,
                },
              },
            ],
          },
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
          quantity: 376844,
        },
      ],
      subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateTransactionRequest](../../sdk/models/operations/createtransactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateTransactionResponse](../../sdk/models/operations/createtransactionresponse.md)>**
### Errors

| Error Object                                     | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.CreateTransactionResponseBody             | 401                                              | application/json                                 |
| errors.CreateTransactionTransactionsResponseBody | 500                                              | application/json                                 |
| errors.SDKError                                  | 400-600                                          | */*                                              |

## get

Returns a transaction using its ID.

Use the `include` parameter to include related entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { IncludeTransaction } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.get({
    transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetTransactionRequest](../../sdk/models/operations/gettransactionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTransactionResponse](../../sdk/models/operations/gettransactionresponse.md)>**
### Errors

| Error Object                                                    | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.GetTransactionResponseBody                               | 401                                                             | application/json                                                |
| errors.GetTransactionTransactionsResponseBody                   | 404                                                             | application/json                                                |
| errors.GetTransactionTransactionsTransactionServiceResponseBody | 500                                                             | application/json                                                |
| errors.SDKError                                                 | 400-600                                                         | */*                                                             |

## getInvoice

Returns a link to an invoice PDF for a transaction.

Invoice PDFs are created for both automatically and manually-collected transactions.

* The PDF for manually-collected transactions includes payment terms, purchase order number, and notes for your customer. It's a demand for payment from your customer.
* The PDF for automatically-collected transactions lets your customer know that payment was taken successfully. Customers may require this for for tax-reporting purposes.

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

  const res = await sdk.transactions.getInvoice({
    transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetTransactionInvoiceRequest](../../sdk/models/operations/gettransactioninvoicerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTransactionInvoiceResponse](../../sdk/models/operations/gettransactioninvoiceresponse.md)>**
### Errors

| Error Object                                                 | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.GetTransactionInvoiceResponseBody                     | 401                                                          | application/json                                             |
| errors.GetTransactionInvoiceTransactionsResponseBody         | 404                                                          | application/json                                             |
| errors.GetTransactionInvoiceTransactionsResponseResponseBody | 500                                                          | application/json                                             |
| errors.SDKError                                              | 400-600                                                      | */*                                                          |

## list

Returns a paginated list of transactions. Use the query parameters to page through results.

Use the `include` parameter to include related entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CollectionMode, IncludeTransaction, StatusTransaction } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.list({
    billedAt: "2023-04-18T17:03:26",
    createdAt: "2023-04-18T17:03:26",
    customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
    invoiceNumber: "ABC-12345",
    subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
    updatedAt: "2023-04-18T17:03:26",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTransactionsRequest](../../sdk/models/operations/listtransactionsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTransactionsResponse](../../sdk/models/operations/listtransactionsresponse.md)>**
### Errors

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ListTransactionsResponseBody             | 401                                             | application/json                                |
| errors.ListTransactionsTransactionsResponseBody | 500                                             | application/json                                |
| errors.SDKError                                 | 400-600                                         | */*                                             |

## previewTransaction

Previews a transaction without creating a transaction entity. Typically used for creating more advanced, dynamic pricing pages where users can build their own plans.

Consider using [the preview prices operation](/api-reference/transactions/preview-prices) for simpler pricing pages.

You can provide location information to preview a transaction. Paddle uses this to calculate tax. You can provide one of:

* `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
* `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
* `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate totals. Typically used for logged-in customers.

When supplying items, you can exclude items from the total calculation using the `include_in_totals` boolean.

By default, recurring items with trials are considered to have a zero charge when previewing. Set `ignore_trials` to `true` to ignore trial periods against prices for transaction preview calculations.

If successful, your response includes the data you sent with a `details` object that includes totals for the supplied prices.

Transaction previews do not create transactions, so no `id` is returned.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CountryCode2, CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.previewTransaction({
    address: {
      countryCode: CountryCode2.Hm,
      postalCode: "11105-1803",
    },
    addressId: "add_01gm302t81w94gyjpjpqypkzkf",
    adjustmentsTotals: {
      otherBalances: [
        "string",
      ],
    },
    businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    items: [
      {
        price: {
          billingCycle: {
            frequency: 12239,
            interval: Period2Interval.Day,
          },
          customData: {},
          id: "pri_01gsz8z1q1n00f12qt82y31smh",
          productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          trialPeriod: {
            frequency: 581016,
            interval: Period2Interval.Month,
          },
          unitPrice: {
            amount: "403.36",
            currencyCode: CurrencyCode2.Cny,
          },
          unitPriceOverrides: [
            {
              countryCodes: [
                CountryCode2.Ch,
              ],
              unitPrice: {
                amount: "540.07",
                currencyCode: CurrencyCode2.Thb,
              },
            },
          ],
        },
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 797348,
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.TransactionPreviewInput](../../sdk/models/shared/transactionpreviewinput.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PreviewTransactionResponse](../../sdk/models/operations/previewtransactionresponse.md)>**
### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.PreviewTransactionResponseBody             | 401                                               | application/json                                  |
| errors.PreviewTransactionTransactionsResponseBody | 500                                               | application/json                                  |
| errors.SDKError                                   | 400-600                                           | */*                                               |

## pricePreview

Previews calculations for one or more prices. Typically used for building pricing pages.

You can provide location information when previewing prices. Paddle uses this to calculate tax. You can provide one of:

* `customer_ip_address`: Paddle fetches location using the IP address to calculate totals.
* `address`: Paddle uses the country and ZIP code (where supplied) to calculate totals.
* `customer_id`, `address_id`, `business_id`: Paddle uses existing customer data to calculate totals. Typically used for logged-in customers.

If successful, your response includes the data you sent with a `details` object that includes totals for the supplied prices. 

Each line item includes `formatted_unit_totals` and `formatted_totals` objects that return totals formatted for the country or region you're working with, including the currency symbol.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CountryCode2, CurrencyCode2 } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.pricePreview({
    address: {
      countryCode: CountryCode2.Vu,
      postalCode: "11105-1803",
    },
    addressId: "add_01gm302t81w94gyjpjpqypkzkf",
    businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    items: [
      {
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 276229,
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.TransactionPricingPreview](../../sdk/models/shared/transactionpricingpreview.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PricePreviewResponse](../../sdk/models/operations/pricepreviewresponse.md)>**
### Errors

| Error Object                                | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.PricePreviewResponseBody             | 401                                         | application/json                            |
| errors.PricePreviewTransactionsResponseBody | 500                                         | application/json                            |
| errors.SDKError                             | 400-600                                     | */*                                         |

## update

Updates a transaction using its ID.

You can update transactions that are `draft` or `ready`. `billed` and `completed` transactions are considered records for tax and legal purposes, so they can't be changed. You can either:

* Create [an adjustment](/api-reference/adjustments/overview) to record a refund or credit for a transaction.
* Cancel a `billed` transaction by sending a PATCH request to set `status` to `canceled`.

The transaction `status` may only be set to `billed` or `canceled`. Other statuses are set automatically by Paddle. Set a manually-collected transaction to `billed` to mark it as finalized. This is essentially issuing an invoice. At this point, it becomes a legal record so you can't make changes to it. Paddle automatically assigns an invoice number, creates [a related subscription](/api-reference/subscriptions/overview), and sends it to your customer.

When making changes to items on a transaction, send the complete list of items that you'd like to be on a transaction — including existing items. For each item, send an object containing `price_id` and `quantity`. Paddle responds with the full `price` object for each item. See: [Work with lists](/api-reference/about/lists)

If successful, your response includes a copy of the updated transaction entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CollectionMode2, CountryCode2, CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.transactions.update({
    transactionUpdate: {
      addressId: "add_01gm302t81w94gyjpjpqypkzkf",
      billedAt: new Date("2024-10-12T07:20:50.52Z"),
      billingDetails: {
        paymentTerms: {
          frequency: 857478,
          interval: Period2Interval.Day,
        },
      },
      billingPeriod: {
        endsAt: new Date("2024-10-12T07:20:50.52Z"),
        startsAt: new Date("2024-10-12T07:20:50.52Z"),
      },
      businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
      customData: {},
      customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
      discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
      id: "txn_01h04vsbhqc62t8hmd4z3b578c",
      items: [
        {
          price: {
            billingCycle: {
              frequency: 597129,
              interval: Period2Interval.Day,
            },
            customData: {},
            id: "pri_01gsz8z1q1n00f12qt82y31smh",
            productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
            quantity: {
              maximum: 100,
              minimum: 1,
            },
            trialPeriod: {
              frequency: 344620,
              interval: Period2Interval.Month,
            },
            unitPrice: {
              amount: "991.47",
              currencyCode: CurrencyCode2.Dkk,
            },
            unitPriceOverrides: [
              {
                countryCodes: [
                  CountryCode2.Mw,
                ],
                unitPrice: {
                  amount: "684.20",
                  currencyCode: CurrencyCode2.Jpy,
                },
              },
            ],
          },
          priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
          quantity: 443076,
        },
      ],
      subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
    },
    transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateTransactionRequest](../../sdk/models/operations/updatetransactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateTransactionResponse](../../sdk/models/operations/updatetransactionresponse.md)>**
### Errors

| Error Object                                                       | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.UpdateTransactionResponseBody                               | 401                                                                | application/json                                                   |
| errors.UpdateTransactionTransactionsResponseBody                   | 404                                                                | application/json                                                   |
| errors.UpdateTransactionTransactionsTransactionServiceResponseBody | 500                                                                | application/json                                                   |
| errors.SDKError                                                    | 400-600                                                            | */*                                                                |
