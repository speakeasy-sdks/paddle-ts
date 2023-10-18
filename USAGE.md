<!-- Start SDK Example Usage -->


```typescript
import { Paddle } from "Paddle";
import { CountryCode2 } from "Paddle/dist/sdk/models/shared";

(async () => {
    const sdk = new Paddle({
        security: {
            bearerAuth: "YOUR_API_KEY",
        },
    });

    const res = await sdk.addresses.create({
        addressCreateInput: {
            city: "Astoria",
            countryCode: CountryCode2.Kn,
            description: "Paddle.com",
            firstLine: "3811 Ditmars Blvd",
            id: "add_01gm302t81w94gyjpjpqypkzkf",
            postalCode: "11105-1803",
            region: "NY",
        },
        customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->