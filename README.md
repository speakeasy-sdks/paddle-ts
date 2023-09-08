<div align="center">
    <img src="https://github.com/speakeasy-sdks/paddle-ts/assets/6267663/929e90c9-ded4-4400-8239-2ffc0f8d9299" width="300">
    <h1>Typescript SDK</h1>
   <p>One platform for tax, payments, and subscriptions</p>
   <a href="https://developer.paddle.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
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
import { DeleteOrderResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    apiKey: "",
  },
});

sdk.order.deleteOrder({
  orderID: 548814,
}).then((res: DeleteOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [order](docs/sdks/order/README.md)

* [deleteOrder](docs/sdks/order/README.md#deleteorder) - Delete an order
* [getOrder](docs/sdks/order/README.md#getorder) - Get an order
* [upsertOrder](docs/sdks/order/README.md#upsertorder) - Create an order
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
