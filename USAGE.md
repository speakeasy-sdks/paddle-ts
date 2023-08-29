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