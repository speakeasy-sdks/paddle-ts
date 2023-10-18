# TransactionPricingPreviewLineItem

Information about line items for this preview. Includes totals calculated by Paddle. Considered the source of truth for line item totals.


## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `discounts`                                                                                                   | [TransactionPricingPreviewLineItemDiscount](../../models/shared/transactionpricingpreviewlineitemdiscount.md) | :heavy_minus_sign:                                                                                            | Array of discounts applied to this preview line item. Empty if no discounts applied.                          |                                                                                                               |
| `formattedTotals`                                                                                             | [TotalsFormatted](../../models/shared/totalsformatted.md)                                                     | :heavy_minus_sign:                                                                                            | The financial breakdown of a charge in the format of a given currency.                                        |                                                                                                               |
| `formattedUnitTotals`                                                                                         | [UnitTotalsFormatted](../../models/shared/unittotalsformatted.md)                                             | :heavy_minus_sign:                                                                                            | Breakdown of the charge for one unit in the format of a given currency.                                       |                                                                                                               |
| `price`                                                                                                       | [Price](../../models/shared/price.md)                                                                         | :heavy_minus_sign:                                                                                            | Represents a price entity.                                                                                    |                                                                                                               |
| `product`                                                                                                     | [Product](../../models/shared/product.md)                                                                     | :heavy_minus_sign:                                                                                            | Represents a product entity.                                                                                  |                                                                                                               |
| `quantity`                                                                                                    | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Quantity of this preview line item.                                                                           |                                                                                                               |
| `taxRate`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Rate used to calculate tax for this preview line item.                                                        | 0.2                                                                                                           |
| `totals`                                                                                                      | [Totals2](../../models/shared/totals2.md)                                                                     | :heavy_minus_sign:                                                                                            | The financial breakdown of a charge in the lowest denomination of a currency (eg cents for USD).              |                                                                                                               |
| `unitTotals`                                                                                                  | [UnitTotals](../../models/shared/unittotals.md)                                                               | :heavy_minus_sign:                                                                                            | Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for USD).           |                                                                                                               |