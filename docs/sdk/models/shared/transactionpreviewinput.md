# TransactionPreviewInput

Represents a transaction entity when previewing.


## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                                                                            | [shared.AddressPreview](../../../sdk/models/shared/addresspreview.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                   | Represents an address entity.                                                                                                                                                                        |                                                                                                                                                                                                      |
| `addressId`                                                                                                                                                                                          | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Unique Paddle ID for this address entity, prefixed with `add_`.                                                                                                                                      | add_01gm302t81w94gyjpjpqypkzkf                                                                                                                                                                       |
| `adjustmentsTotals`                                                                                                                                                                                  | [shared.TransactionPreviewAdjustmentTotals](../../../sdk/models/shared/transactionpreviewadjustmenttotals.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Breakdown of the total for adjustments for a transaction preview in a given currency.                                                                                                                |                                                                                                                                                                                                      |
| `businessId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Unique Paddle ID for this business entity, prefixed with `biz_`.                                                                                                                                     | biz_01grrebrzaee2qj2fqqhmcyzaj                                                                                                                                                                       |
| `currencyCode`                                                                                                                                                                                       | [shared.CurrencyCode2](../../../sdk/models/shared/currencycode2.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                   | Supported three-letter ISO 4217 currency code.                                                                                                                                                       |                                                                                                                                                                                                      |
| `customerId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Unique Paddle ID for this customer entity, prefixed with `ctm_`.                                                                                                                                     | ctm_01grnn4zta5a1mf02jjze7y2ys                                                                                                                                                                       |
| `customerIpAddress`                                                                                                                                                                                  | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the `address` object when previewing.                                                                   |                                                                                                                                                                                                      |
| `discountId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Unique Paddle ID for this discount, prefixed with `dsc_`.                                                                                                                                            | dsc_01gv5kpg05xp104ek2fmgjwttf                                                                                                                                                                       |
| `ignoreTrials`                                                                                                                                                                                       | *boolean*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                   | Whether trials should be ignored for transaction preview calculations.<br/><br/>By default, recurring items with trials are considered to have a zero charge when previewing. Set to `true` to disable this. |                                                                                                                                                                                                      |
| `items`                                                                                                                                                                                              | [shared.TransactionPreviewTransactionItemPreview](../../../sdk/models/shared/transactionpreviewtransactionitempreview.md)[]                                                                          | :heavy_check_mark:                                                                                                                                                                                   | List of items to preview transaction calculations for.                                                                                                                                               |                                                                                                                                                                                                      |