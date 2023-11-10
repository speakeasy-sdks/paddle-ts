# CreditBalance

Represents a credit balance for a customer.


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `balance`                                                               | [shared.CustomerBalance](../../../sdk/models/shared/customerbalance.md) | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `currencyCode`                                                          | [shared.CurrencyCode2](../../../sdk/models/shared/currencycode2.md)     | :heavy_minus_sign:                                                      | Supported three-letter ISO 4217 currency code.                          |                                                                         |
| `customerId`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Unique Paddle ID for this customer entity, prefixed with `ctm_`.        | ctm_01grnn4zta5a1mf02jjze7y2ys                                          |