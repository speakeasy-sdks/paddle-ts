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