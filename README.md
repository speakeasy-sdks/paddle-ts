<div align="center">
    <img src="https://github.com/speakeasy-sdks/paddle-ts/assets/6267663/929e90c9-ded4-4400-8239-2ffc0f8d9299" width="300">
    <h1>Typescript SDK</h1>
   <p>One platform for tax, payments, and subscriptions</p>
   <a href="https://developer.paddle.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/paddle-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/paddle-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/paddle-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/paddle-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { Paddle } from "Paddle";
import { CreateAddressResponse } from "Paddle/dist/sdk/models/operations";
import { CountryCode2 } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "YOUR_API_KEY",
  },
});

sdk.addresses.create({
  addressCreateInput: {
    city: "Astoria",
    countryCode: CountryCode2.Lv,
    description: "Paddle.com",
    firstLine: "3811 Ditmars Blvd",
    id: "add_01gm302t81w94gyjpjpqypkzkf",
    postalCode: "11105-1803",
    region: "NY",
    secondLine: "provident",
  },
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: CreateAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addresses](docs/sdks/addresses/README.md)

* [create](docs/sdks/addresses/README.md#create) - Create an address for a customer
* [get](docs/sdks/addresses/README.md#get) - Get an address for a customer
* [list](docs/sdks/addresses/README.md#list) - List addresses for a customer
* [update](docs/sdks/addresses/README.md#update) - Update an address for a customer

### [adjustments](docs/sdks/adjustments/README.md)

* [create](docs/sdks/adjustments/README.md#create) - Create an adjustment
* [list](docs/sdks/adjustments/README.md#list) - List adjustments

### [businesses](docs/sdks/businesses/README.md)

* [create](docs/sdks/businesses/README.md#create) - Create a business for a customer
* [get](docs/sdks/businesses/README.md#get) - Get a business for a customer
* [list](docs/sdks/businesses/README.md#list) - List businesses for a customer
* [update](docs/sdks/businesses/README.md#update) - Update a business for a customer

### [customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create a customer
* [get](docs/sdks/customers/README.md#get) - Get a customer
* [list](docs/sdks/customers/README.md#list) - List customers
* [listCreditBalances](docs/sdks/customers/README.md#listcreditbalances) - List credit balances for a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer

### [discounts](docs/sdks/discounts/README.md)

* [create](docs/sdks/discounts/README.md#create) - Create a discount
* [get](docs/sdks/discounts/README.md#get) - Get a discount
* [list](docs/sdks/discounts/README.md#list) - List discounts
* [update](docs/sdks/discounts/README.md#update) - Update a discount

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List events
* [listTypes](docs/sdks/events/README.md#listtypes) - List events types

### [ipAddresses](docs/sdks/ipaddresses/README.md)

* [get](docs/sdks/ipaddresses/README.md#get) - Get Paddle IP addresses

### [invoices](docs/sdks/invoices/README.md)

* [getPdf](docs/sdks/invoices/README.md#getpdf) - Get a PDF for an invoice

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

### [subscriptions](docs/sdks/subscriptions/README.md)

* [cancel](docs/sdks/subscriptions/README.md#cancel) - Cancel a subscription
* [create](docs/sdks/subscriptions/README.md#create) - Create a one-time charge for a subscription
* [list](docs/sdks/subscriptions/README.md#list) - List subscriptions
* [pause](docs/sdks/subscriptions/README.md#pause) - Pause a subscription

### [transactions](docs/sdks/transactions/README.md)

* [getInvoice](docs/sdks/transactions/README.md#getinvoice) - Get a PDF invoice for a transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
