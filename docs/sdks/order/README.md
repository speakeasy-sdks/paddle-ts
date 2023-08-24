# order

### Available Operations

* [deleteOrder](#deleteorder) - Delete an order
* [getOrder](#getorder) - Get an order
* [upsertOrder](#upsertorder) - Create an order

## deleteOrder

Delete an order

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { DeleteOrderResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    apiKey: "",
  },
});

sdk.order.deleteOrder({
  orderID: 592845,
}).then((res: DeleteOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteOrderResponse](../../models/operations/deleteorderresponse.md)>**


## getOrder

Get an order

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetOrderResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    apiKey: "",
  },
});

sdk.order.getOrder({
  orderID: 715190,
}).then((res: GetOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetOrderRequest](../../models/operations/getorderrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetOrderResponse](../../models/operations/getorderresponse.md)>**


## upsertOrder

Create an order

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpsertOrderResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    apiKey: "",
  },
});

sdk.order.upsertOrder({
  description: "quibusdam",
  image: "unde",
  name: "Johnnie Stamm",
  price: 6458.94,
  teaser: "suscipit",
}).then((res: UpsertOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.CreateOrderInput](../../models/shared/createorderinput.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.UpsertOrderResponse](../../models/operations/upsertorderresponse.md)>**

