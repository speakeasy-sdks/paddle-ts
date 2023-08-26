# AdjustmentPayoutTotalsChargebackFeeOriginal

Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the same as the payout currency.


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `amount`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Fee amount for this chargeback in the original currency.                | 1500                                                                    |
| `currencyCode`                                                          | [CurrencyCodeChargeback](../../models/shared/currencycodechargeback.md) | :heavy_minus_sign:                                                      | Three-letter ISO 4217 currency code for chargeback fees.                |                                                                         |