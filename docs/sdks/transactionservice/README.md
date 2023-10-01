# TransactionService
(*transactionService*)

### Available Operations

* [create](#create) - Create a transaction
* [get](#get) - Get a transaction
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
import { CreateTransactionResponse } from "Paddle/dist/sdk/models/operations";
import {
  CollectionMode2,
  CountryCode2,
  CurrencyCode2,
  IncludeTransaction,
  Period2Interval,
  TaxMode1,
} from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.create({
  include: IncludeTransaction.AdjustmentsTotals,
  transactionCreateInput: {
    addressId: "bluetooth",
    billedAt: new Date("2024-10-12T07:20:50.52Z"),
    billingDetails: {
      additionalInformation: "Money blue shred",
      enableCheckout: false,
      paymentTerms: {
        frequency: 376844,
        interval: Period2Interval.Year,
      },
      purchaseOrderNumber: "East orange Northwest",
    },
    billingPeriod: {
      endsAt: new Date("2024-10-12T07:20:50.52Z"),
      startsAt: new Date("2024-10-12T07:20:50.52Z"),
    },
    businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    collectionMode: CollectionMode2.Manual,
    currencyCode: CurrencyCode2.Try,
    customData: {},
    customerId: "Gasoline",
    discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    id: "txn_01h04vsbhqc62t8hmd4z3b578c",
    items: [
      {
        price: {
          billingCycle: {
            frequency: 586220,
            interval: Period2Interval.Year,
          },
          customData: {},
          description: "Reverse-engineered human-resource time-frame",
          id: "pri_01gsz8z1q1n00f12qt82y31smh",
          productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          taxMode: TaxMode1.External,
          trialPeriod: {
            frequency: 357021,
            interval: Period2Interval.Day,
          },
          unitPrice: {
            amount: "259.63",
            currencyCode: CurrencyCode2.Uah,
          },
          unitPriceOverrides: [
            {
              countryCodes: [
                CountryCode2.Al,
              ],
              unitPrice: {
                amount: "519.03",
                currencyCode: CurrencyCode2.Czk,
              },
            },
          ],
        },
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 207565,
      },
    ],
    status: "Fish",
    subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
  },
}).then((res: CreateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateTransactionRequest](../../models/operations/createtransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateTransactionResponse](../../models/operations/createtransactionresponse.md)>**


## get

Returns a transaction using its ID.

Use the `include` parameter to include related entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetTransactionResponse } from "Paddle/dist/sdk/models/operations";
import { IncludeTransaction } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.get({
  include: IncludeTransaction.Customer,
  transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
}).then((res: GetTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTransactionRequest](../../models/operations/gettransactionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTransactionResponse](../../models/operations/gettransactionresponse.md)>**


## list

Returns a paginated list of transactions. Use the query parameters to page through results.

Use the `include` parameter to include related entities in the response.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListTransactionsResponse } from "Paddle/dist/sdk/models/operations";
import { CollectionMode, IncludeTransaction, StatusTransaction } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.list({
  after: "Northeast Metal Canada",
  billedAt: "2023-04-18T17:03:26",
  collectionMode: CollectionMode.Manual,
  createdAt: "2023-04-18T17:03:26",
  customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
  id: "<ID>",
  include: IncludeTransaction.Business,
  invoiceNumber: "ABC-12345",
  orderBy: "Response West male",
  perPage: 86140,
  status: StatusTransaction.Billed,
  subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  updatedAt: "2023-04-18T17:03:26",
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)>**


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
import { PreviewTransactionResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2, CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.previewTransaction({
  address: {
    countryCode: CountryCode2.Hm,
    postalCode: "11105-1803",
  },
  addressId: "add_01gm302t81w94gyjpjpqypkzkf",
  adjustmentsTotals: {
    otherBalances: [
      "North",
    ],
  },
  businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
  currencyCode: CurrencyCode2.Mxn,
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  customerIpAddress: "Savings transmit tan",
  discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
  ignoreTrials: false,
  items: [
    {
      includeInTotals: false,
      price: {
        billingCycle: {
          frequency: 409285,
          interval: Period2Interval.Year,
        },
        customData: {},
        description: "Down-sized upward-trending parallelism",
        id: "pri_01gsz8z1q1n00f12qt82y31smh",
        productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
        quantity: {
          maximum: 100,
          minimum: 1,
        },
        taxMode: TaxMode1.AccountSetting,
        trialPeriod: {
          frequency: 274981,
          interval: Period2Interval.Week,
        },
        unitPrice: {
          amount: "533.25",
          currencyCode: CurrencyCode2.Dkk,
        },
        unitPriceOverrides: [
          {
            countryCodes: [
              CountryCode2.Je,
            ],
            unitPrice: {
              amount: "250.01",
              currencyCode: CurrencyCode2.Brl,
            },
          },
        ],
      },
      priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
      quantity: 266235,
    },
  ],
}).then((res: PreviewTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.TransactionPreviewInput](../../models/shared/transactionpreviewinput.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PreviewTransactionResponse](../../models/operations/previewtransactionresponse.md)>**


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
import { PricePreviewResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2, CurrencyCode2 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.pricePreview({
  address: {
    countryCode: CountryCode2.Vu,
    postalCode: "11105-1803",
  },
  addressId: "add_01gm302t81w94gyjpjpqypkzkf",
  businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
  currencyCode: CurrencyCode2.Eur,
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  customerIpAddress: "disguise Northeast",
  discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
  items: [
    {
      priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
      quantity: 100959,
    },
  ],
}).then((res: PricePreviewResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.TransactionPricingPreviewInput](../../models/shared/transactionpricingpreviewinput.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PricePreviewResponse](../../models/operations/pricepreviewresponse.md)>**


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
import { UpdateTransactionResponse } from "Paddle/dist/sdk/models/operations";
import { CollectionMode2, CountryCode2, CurrencyCode2, Period2Interval, TaxMode1 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.transactionService.update({
  transactionUpdateInput: {
    addressId: "add_01gm302t81w94gyjpjpqypkzkf",
    billedAt: new Date("2024-10-12T07:20:50.52Z"),
    billingDetails: {
      additionalInformation: "New Reactive dock",
      enableCheckout: false,
      paymentTerms: {
        frequency: 627690,
        interval: Period2Interval.Month,
      },
      purchaseOrderNumber: "invoice Arizona",
    },
    billingPeriod: {
      endsAt: new Date("2024-10-12T07:20:50.52Z"),
      startsAt: new Date("2024-10-12T07:20:50.52Z"),
    },
    businessId: "biz_01grrebrzaee2qj2fqqhmcyzaj",
    collectionMode: CollectionMode2.Automatic,
    currencyCode: CurrencyCode2.Twd,
    customData: {},
    customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
    discountId: "dsc_01gv5kpg05xp104ek2fmgjwttf",
    id: "txn_01h04vsbhqc62t8hmd4z3b578c",
    items: [
      {
        price: {
          billingCycle: {
            frequency: 499557,
            interval: Period2Interval.Week,
          },
          customData: {},
          description: "Horizontal dynamic productivity",
          id: "pri_01gsz8z1q1n00f12qt82y31smh",
          productId: "pro_01gsz97mq9pa4fkyy0wqenepkz",
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          taxMode: TaxMode1.AccountSetting,
          trialPeriod: {
            frequency: 366807,
            interval: Period2Interval.Day,
          },
          unitPrice: {
            amount: "644.71",
            currencyCode: CurrencyCode2.Sgd,
          },
          unitPriceOverrides: [
            {
              countryCodes: [
                CountryCode2.Za,
              ],
              unitPrice: {
                amount: "889.84",
                currencyCode: CurrencyCode2.Hkd,
              },
            },
          ],
        },
        priceId: "pri_01gsz8z1q1n00f12qt82y31smh",
        quantity: 302461,
      },
    ],
    status: "East",
    subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
  },
  transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
}).then((res: UpdateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateTransactionRequest](../../models/operations/updatetransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateTransactionResponse](../../models/operations/updatetransactionresponse.md)>**

