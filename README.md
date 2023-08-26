# Paddle

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
    bearerAuth: "",
  },
});

sdk.addresses.createAddress({
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

* [createAddress](docs/sdks/addresses/README.md#createaddress) - Create an address for a customer
* [getAddress](docs/sdks/addresses/README.md#getaddress) - Get an address for a customer
* [listAddresses](docs/sdks/addresses/README.md#listaddresses) - List addresses for a customer
* [updateAddress](docs/sdks/addresses/README.md#updateaddress) - Update an address for a customer

### [adjustments](docs/sdks/adjustments/README.md)

* [createAdjustment](docs/sdks/adjustments/README.md#createadjustment) - Create an adjustment
* [listAdjustments](docs/sdks/adjustments/README.md#listadjustments) - List adjustments
* [listCreditBalances](docs/sdks/adjustments/README.md#listcreditbalances) - List credit balances for a customer

### [businesses](docs/sdks/businesses/README.md)

* [createBusiness](docs/sdks/businesses/README.md#createbusiness) - Create a business for a customer
* [getBusiness](docs/sdks/businesses/README.md#getbusiness) - Get a business for a customer
* [listBusinesses](docs/sdks/businesses/README.md#listbusinesses) - List businesses for a customer
* [updateBusiness](docs/sdks/businesses/README.md#updatebusiness) - Update a business for a customer

### [customers](docs/sdks/customers/README.md)

* [createCustomer](docs/sdks/customers/README.md#createcustomer) - Create a customer
* [getCustomer](docs/sdks/customers/README.md#getcustomer) - Get a customer
* [listCreditBalances](docs/sdks/customers/README.md#listcreditbalances) - List credit balances for a customer
* [listCustomers](docs/sdks/customers/README.md#listcustomers) - List customers
* [updateCustomer](docs/sdks/customers/README.md#updatecustomer) - Update a customer

### [discounts](docs/sdks/discounts/README.md)

* [createDiscount](docs/sdks/discounts/README.md#creatediscount) - Create a discount
* [getDiscount](docs/sdks/discounts/README.md#getdiscount) - Get a discount
* [listDiscounts](docs/sdks/discounts/README.md#listdiscounts) - List discounts
* [updateDiscount](docs/sdks/discounts/README.md#updatediscount) - Update a discount

### [events](docs/sdks/events/README.md)

* [listEventTypes](docs/sdks/events/README.md#listeventtypes) - List events types
* [listEvents](docs/sdks/events/README.md#listevents) - List events

### [ipAddresses](docs/sdks/ipaddresses/README.md)

* [getIpAddresses](docs/sdks/ipaddresses/README.md#getipaddresses) - Get Paddle IP addresses

### [invoices](docs/sdks/invoices/README.md)

* [getInvoicePdf](docs/sdks/invoices/README.md#getinvoicepdf) - Get a PDF for an invoice

### [notifications](docs/sdks/notifications/README.md)

* [createNotificationSetting](docs/sdks/notifications/README.md#createnotificationsetting) - Create a notification setting
* [deleteNotificationSetting](docs/sdks/notifications/README.md#deletenotificationsetting) - Delete a notification setting
* [getNotification](docs/sdks/notifications/README.md#getnotification) - Get a notification
* [getNotificationSetting](docs/sdks/notifications/README.md#getnotificationsetting) - Get a notification setting
* [listNotificationLogs](docs/sdks/notifications/README.md#listnotificationlogs) - List logs for a notification
* [listNotificationSettings](docs/sdks/notifications/README.md#listnotificationsettings) - List notification settings
* [listNotifications](docs/sdks/notifications/README.md#listnotifications) - List notifications
* [postNotificationSettingsNotificationSettingIdReplay](docs/sdks/notifications/README.md#postnotificationsettingsnotificationsettingidreplay) - Replay notifications by notification setting
* [replayNotification](docs/sdks/notifications/README.md#replaynotification) - Replay a notification
* [updateNotificationSetting](docs/sdks/notifications/README.md#updatenotificationsetting) - Update a notification setting

### [subscriptions](docs/sdks/subscriptions/README.md)

* [cancelSubscription](docs/sdks/subscriptions/README.md#cancelsubscription) - Cancel a subscription
* [createSubscriptionCharge](docs/sdks/subscriptions/README.md#createsubscriptioncharge) - Create a one-time charge for a subscription
* [listSubscriptions](docs/sdks/subscriptions/README.md#listsubscriptions) - List subscriptions
* [pauseSubscription](docs/sdks/subscriptions/README.md#pausesubscription) - Pause a subscription

### [transactions](docs/sdks/transactions/README.md)

* [getTransactionInvoice](docs/sdks/transactions/README.md#gettransactioninvoice) - Get a PDF invoice for a transaction

### [adjustmentService](docs/sdks/adjustmentservice/README.md)

* [createAdjustment](docs/sdks/adjustmentservice/README.md#createadjustment) - Create an adjustment
* [listAdjustments](docs/sdks/adjustmentservice/README.md#listadjustments) - List adjustments
* [listCreditBalances](docs/sdks/adjustmentservice/README.md#listcreditbalances) - List credit balances for a customer

### [customerService](docs/sdks/customerservice/README.md)

* [createAddress](docs/sdks/customerservice/README.md#createaddress) - Create an address for a customer
* [createBusiness](docs/sdks/customerservice/README.md#createbusiness) - Create a business for a customer
* [createCustomer](docs/sdks/customerservice/README.md#createcustomer) - Create a customer
* [getAddress](docs/sdks/customerservice/README.md#getaddress) - Get an address for a customer
* [getBusiness](docs/sdks/customerservice/README.md#getbusiness) - Get a business for a customer
* [getCustomer](docs/sdks/customerservice/README.md#getcustomer) - Get a customer
* [listAddresses](docs/sdks/customerservice/README.md#listaddresses) - List addresses for a customer
* [listBusinesses](docs/sdks/customerservice/README.md#listbusinesses) - List businesses for a customer
* [listCustomers](docs/sdks/customerservice/README.md#listcustomers) - List customers
* [updateAddress](docs/sdks/customerservice/README.md#updateaddress) - Update an address for a customer
* [updateBusiness](docs/sdks/customerservice/README.md#updatebusiness) - Update a business for a customer
* [updateCustomer](docs/sdks/customerservice/README.md#updatecustomer) - Update a customer

### [discountService](docs/sdks/discountservice/README.md)

* [createDiscount](docs/sdks/discountservice/README.md#creatediscount) - Create a discount
* [getDiscount](docs/sdks/discountservice/README.md#getdiscount) - Get a discount
* [listDiscounts](docs/sdks/discountservice/README.md#listdiscounts) - List discounts
* [updateDiscount](docs/sdks/discountservice/README.md#updatediscount) - Update a discount

### [invoiceService](docs/sdks/invoiceservice/README.md)

* [getInvoicePdf](docs/sdks/invoiceservice/README.md#getinvoicepdf) - Get a PDF for an invoice
* [getTransactionInvoice](docs/sdks/invoiceservice/README.md#gettransactioninvoice) - Get a PDF invoice for a transaction

### [notificationService](docs/sdks/notificationservice/README.md)

* [createNotificationSetting](docs/sdks/notificationservice/README.md#createnotificationsetting) - Create a notification setting
* [deleteNotificationSetting](docs/sdks/notificationservice/README.md#deletenotificationsetting) - Delete a notification setting
* [getIpAddresses](docs/sdks/notificationservice/README.md#getipaddresses) - Get Paddle IP addresses
* [getNotification](docs/sdks/notificationservice/README.md#getnotification) - Get a notification
* [getNotificationSetting](docs/sdks/notificationservice/README.md#getnotificationsetting) - Get a notification setting
* [listEventTypes](docs/sdks/notificationservice/README.md#listeventtypes) - List events types
* [listEvents](docs/sdks/notificationservice/README.md#listevents) - List events
* [listNotificationLogs](docs/sdks/notificationservice/README.md#listnotificationlogs) - List logs for a notification
* [listNotificationSettings](docs/sdks/notificationservice/README.md#listnotificationsettings) - List notification settings
* [listNotifications](docs/sdks/notificationservice/README.md#listnotifications) - List notifications
* [postNotificationSettingsNotificationSettingIdReplay](docs/sdks/notificationservice/README.md#postnotificationsettingsnotificationsettingidreplay) - Replay notifications by notification setting
* [replayNotification](docs/sdks/notificationservice/README.md#replaynotification) - Replay a notification
* [updateNotificationSetting](docs/sdks/notificationservice/README.md#updatenotificationsetting) - Update a notification setting

### [subscriptionService](docs/sdks/subscriptionservice/README.md)

* [cancelSubscription](docs/sdks/subscriptionservice/README.md#cancelsubscription) - Cancel a subscription
* [createSubscriptionCharge](docs/sdks/subscriptionservice/README.md#createsubscriptioncharge) - Create a one-time charge for a subscription
* [listSubscriptions](docs/sdks/subscriptionservice/README.md#listsubscriptions) - List subscriptions
* [pauseSubscription](docs/sdks/subscriptionservice/README.md#pausesubscription) - Pause a subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
