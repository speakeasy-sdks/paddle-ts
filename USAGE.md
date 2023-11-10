<!-- Start SDK Example Usage -->
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

(async () => {
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
})();

```
<!-- End SDK Example Usage -->