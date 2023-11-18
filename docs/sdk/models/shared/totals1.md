# Totals1

Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD).


## Fields

| Field                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discount`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | Total discount as a result of any discounts applied.<br/><br/>Except for percentage discounts, Paddle applies tax to discounts based on the line item `price.tax_mode`. If `price.tax_mode` for a line item is `internal`, Paddle removes tax from the discount applied. | 0                                                                                                                                                                                                                                                                |
| `subtotal`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | Subtotal before discount, tax, and deductions. If an item, unit price multiplied by quantity.                                                                                                                                                                    | 15000                                                                                                                                                                                                                                                            |
| `tax`                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | Total tax on the subtotal.                                                                                                                                                                                                                                       | 1500                                                                                                                                                                                                                                                             |
| `total`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | Total after discount and tax.                                                                                                                                                                                                                                    | 16500                                                                                                                                                                                                                                                            |