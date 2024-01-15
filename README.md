<div align="center">
    <img src="https://github.com/speakeasy-sdks/paddle-ts/assets/6267663/929e90c9-ded4-4400-8239-2ffc0f8d9299" width="300">
    <h1>Typescript SDK</h1>
   <p>One platform for tax, payments, and subscriptions</p>
   <a href="https://developer.paddle.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/paddle-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/paddle-ts
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create({
        action: SchemaAction.Refund,
        customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
        id: "adj_01gya6twkp8y0tv1e19rsgst9m",
        items: [
            {
                id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                type: AdjustmentCreateType.Full,
            },
        ],
        payoutTotals: {
            chargebackFee: {
                amount: "1680",
                original: {
                    amount: "1500",
                },
            },
            earnings: "15120",
            fee: "300",
            subtotal: "15000",
            tax: "1500",
            total: "16500",
        },
        reason: "string",
        subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
        transactionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [adjustments](docs/sdks/adjustments/README.md)

* [create](docs/sdks/adjustments/README.md#create) - Create an adjustment
* [list](docs/sdks/adjustments/README.md#list) - List adjustments

### [customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create a customer
* [get](docs/sdks/customers/README.md#get) - Get a customer
* [list](docs/sdks/customers/README.md#list) - List customers
* [listCreditBalances](docs/sdks/customers/README.md#listcreditbalances) - List credit balances for a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer

### [addresses](docs/sdks/addresses/README.md)

* [create](docs/sdks/addresses/README.md#create) - Create an address for a customer
* [get](docs/sdks/addresses/README.md#get) - Get an address for a customer
* [list](docs/sdks/addresses/README.md#list) - List addresses for a customer
* [update](docs/sdks/addresses/README.md#update) - Update an address for a customer

### [businesses](docs/sdks/businesses/README.md)

* [create](docs/sdks/businesses/README.md#create) - Create a business for a customer
* [get](docs/sdks/businesses/README.md#get) - Get a business for a customer
* [list](docs/sdks/businesses/README.md#list) - List businesses for a customer
* [update](docs/sdks/businesses/README.md#update) - Update a business for a customer

### [discounts](docs/sdks/discounts/README.md)

* [create](docs/sdks/discounts/README.md#create) - Create a discount
* [get](docs/sdks/discounts/README.md#get) - Get a discount
* [list](docs/sdks/discounts/README.md#list) - List discounts
* [update](docs/sdks/discounts/README.md#update) - Update a discount

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List events
* [listTypes](docs/sdks/events/README.md#listtypes) - List events types

### [invoices](docs/sdks/invoices/README.md)

* [cancel](docs/sdks/invoices/README.md#cancel) - Cancel an invoice
* [create](docs/sdks/invoices/README.md#create) - Create a draft invoice
* [get](docs/sdks/invoices/README.md#get) - Get an invoice
* [getPdf](docs/sdks/invoices/README.md#getpdf) - Get a PDF for an invoice
* [issueInvoice](docs/sdks/invoices/README.md#issueinvoice) - Issue an invoice
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [update](docs/sdks/invoices/README.md#update) - Update a draft invoice

### [ipAddresses](docs/sdks/ipaddresses/README.md)

* [get](docs/sdks/ipaddresses/README.md#get) - Get Paddle IP addresses

### [notifications](docs/sdks/notifications/README.md)

* [createSetting](docs/sdks/notifications/README.md#createsetting) - Create a notification setting
* [deleteSetting](docs/sdks/notifications/README.md#deletesetting) - Delete a notification setting
* [get](docs/sdks/notifications/README.md#get) - Get a notification
* [getSetting](docs/sdks/notifications/README.md#getsetting) - Get a notification setting
* [list](docs/sdks/notifications/README.md#list) - List notifications
* [listLogs](docs/sdks/notifications/README.md#listlogs) - List logs for a notification
* [listSettings](docs/sdks/notifications/README.md#listsettings) - List notification settings
* [replay](docs/sdks/notifications/README.md#replay) - Replay a notification
* [replayBySetting](docs/sdks/notifications/README.md#replaybysetting) - Replay notifications by notification setting
* [updateSettings](docs/sdks/notifications/README.md#updatesettings) - Update a notification setting

### [prices](docs/sdks/prices/README.md)

* [create](docs/sdks/prices/README.md#create) - Create a price
* [get](docs/sdks/prices/README.md#get) - Get a price
* [list](docs/sdks/prices/README.md#list) - List prices
* [update](docs/sdks/prices/README.md#update) - Update a price

### [transactions](docs/sdks/transactions/README.md)

* [create](docs/sdks/transactions/README.md#create) - Create a transaction
* [get](docs/sdks/transactions/README.md#get) - Get a transaction
* [getInvoice](docs/sdks/transactions/README.md#getinvoice) - Get a PDF invoice for a transaction
* [list](docs/sdks/transactions/README.md#list) - List transactions
* [previewTransaction](docs/sdks/transactions/README.md#previewtransaction) - Preview a transaction
* [pricePreview](docs/sdks/transactions/README.md#pricepreview) - Preview prices
* [update](docs/sdks/transactions/README.md#update) - Update a transaction

### [transactionService](docs/sdks/transactionservice/README.md)

* [create](docs/sdks/transactionservice/README.md#create) - Create a transaction
* [get](docs/sdks/transactionservice/README.md#get) - Get a transaction
* [list](docs/sdks/transactionservice/README.md#list) - List transactions
* [previewTransaction](docs/sdks/transactionservice/README.md#previewtransaction) - Preview a transaction
* [pricePreview](docs/sdks/transactionservice/README.md#pricepreview) - Preview prices
* [update](docs/sdks/transactionservice/README.md#update) - Update a transaction

### [products](docs/sdks/products/README.md)

* [create](docs/sdks/products/README.md#create) - Create a product
* [get](docs/sdks/products/README.md#get) - Get a product
* [list](docs/sdks/products/README.md#list) - List products
* [update](docs/sdks/products/README.md#update) - Update a product

### [subscriptions](docs/sdks/subscriptions/README.md)

* [cancel](docs/sdks/subscriptions/README.md#cancel) - Cancel a subscription
* [create](docs/sdks/subscriptions/README.md#create) - Create a one-time charge for a subscription
* [createPreview](docs/sdks/subscriptions/README.md#createpreview) - Preview one-off charge for a subscription
* [get](docs/sdks/subscriptions/README.md#get) - Get a subscription
* [getUpdatedPaymentMethodTransaction](docs/sdks/subscriptions/README.md#getupdatedpaymentmethodtransaction) - Get a transaction to update payment method
* [list](docs/sdks/subscriptions/README.md#list) - List subscriptions
* [pause](docs/sdks/subscriptions/README.md#pause) - Pause a subscription
* [previewSubscription](docs/sdks/subscriptions/README.md#previewsubscription) - Preview an update to a subscription
* [resumeSubscription](docs/sdks/subscriptions/README.md#resumesubscription) - Resume a paused subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update a subscription
<!-- End Available Resources and Operations [operations] -->







<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create(
        {
            action: SchemaAction.Refund,
            customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
            id: "adj_01gya6twkp8y0tv1e19rsgst9m",
            items: [
                {
                    id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                    itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                    type: AdjustmentCreateType.Full,
                },
            ],
            payoutTotals: {
                chargebackFee: {
                    amount: "1680",
                    original: {
                        amount: "1500",
                    },
                },
                earnings: "15120",
                fee: "300",
                subtotal: "15000",
                tax: "1500",
                total: "16500",
            },
            reason: "string",
            subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
            transactionId: "string",
        },
        {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        }
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        retry_config: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create({
        action: SchemaAction.Refund,
        customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
        id: "adj_01gya6twkp8y0tv1e19rsgst9m",
        items: [
            {
                id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                type: AdjustmentCreateType.Full,
            },
        ],
        payoutTotals: {
            chargebackFee: {
                amount: "1680",
                original: {
                    amount: "1500",
                },
            },
            earnings: "15120",
            fee: "300",
            subtotal: "15000",
            tax: "1500",
            total: "16500",
        },
        reason: "string",
        subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
        transactionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Retries [retries] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                              | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.CreateAdjustmentResponseBody                       | 400                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponseBody            | 404                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponseResponseBody    | 409                                                       | application/json                                          |
| errors.CreateAdjustmentAdjustmentsResponse500ResponseBody | 500                                                       | application/json                                          |
| errors.SDKError                                           | 4xx-5xx                                                   | */*                                                       |

Example

```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    let res;
    try {
        res = await sdk.adjustments.create({
            action: SchemaAction.Refund,
            customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
            id: "adj_01gya6twkp8y0tv1e19rsgst9m",
            items: [
                {
                    id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                    itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                    type: AdjustmentCreateType.Full,
                },
            ],
            payoutTotals: {
                chargebackFee: {
                    amount: "1680",
                    original: {
                        amount: "1500",
                    },
                },
                earnings: "15120",
                fee: "300",
                subtotal: "15000",
                tax: "1500",
                total: "16500",
            },
            reason: "string",
            subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
            transactionId: "string",
        });
    } catch (err) {
        if (err instanceof errors.CreateAdjustmentResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.CreateAdjustmentAdjustmentsResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.CreateAdjustmentAdjustmentsResponseResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.CreateAdjustmentAdjustmentsResponse500ResponseBody) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.paddle.com` | None |
| 1 | `https://sandbox-api.paddle.com` | None |

#### Example

```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        serverIdx: 1,
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create({
        action: SchemaAction.Refund,
        customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
        id: "adj_01gya6twkp8y0tv1e19rsgst9m",
        items: [
            {
                id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                type: AdjustmentCreateType.Full,
            },
        ],
        payoutTotals: {
            chargebackFee: {
                amount: "1680",
                original: {
                    amount: "1500",
                },
            },
            earnings: "15120",
            fee: "300",
            subtotal: "15000",
            tax: "1500",
            total: "16500",
        },
        reason: "string",
        subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
        transactionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        serverURL: "https://api.paddle.com",
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create({
        action: SchemaAction.Refund,
        customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
        id: "adj_01gya6twkp8y0tv1e19rsgst9m",
        items: [
            {
                id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                type: AdjustmentCreateType.Full,
            },
        ],
        payoutTotals: {
            chargebackFee: {
                amount: "1680",
                original: {
                    amount: "1500",
                },
            },
            earnings: "15120",
            fee: "300",
            subtotal: "15000",
            tax: "1500",
            total: "16500",
        },
        reason: "string",
        subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
        transactionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { Paddle } from "Paddle";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Paddle({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Paddle } from "Paddle";
import {
    AdjustmentCreateType,
    CurrencyCode2,
    CurrencyCodeChargeback,
    CurrencyCodePayouts,
    SchemaAction,
    SchemaStatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

async function run() {
    const sdk = new Paddle({
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.adjustments.create({
        action: SchemaAction.Refund,
        customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
        id: "adj_01gya6twkp8y0tv1e19rsgst9m",
        items: [
            {
                id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
                itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
                type: AdjustmentCreateType.Full,
            },
        ],
        payoutTotals: {
            chargebackFee: {
                amount: "1680",
                original: {
                    amount: "1500",
                },
            },
            earnings: "15120",
            fee: "300",
            subtotal: "15000",
            tax: "1500",
            total: "16500",
        },
        reason: "string",
        subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
        transactionId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
