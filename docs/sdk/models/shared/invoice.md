# Invoice


## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addressId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | add_01ghbkbv8s6kjram8fbfz49p45                                                                                                                                                                                                     |
| `billingDetails`                                                                                                                                                                                                                   | [shared.BillingDetails1](../../../sdk/models/shared/billingdetails1.md)                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                 | Details for invoicing. Required if `collection_mode` is set to `manual`. Otherwise must be `null`.                                                                                                                                 |                                                                                                                                                                                                                                    |
| `billingPeriod`                                                                                                                                                                                                                    | [shared.BillingPeriod](../../../sdk/models/shared/billingperiod.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `businessId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | biz_01ghbkcbs88yxj4fxecevjz9g7                                                                                                                                                                                                     |
| `checkout`                                                                                                                                                                                                                         | [shared.Checkout](../../../sdk/models/shared/checkout.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `createdAt`                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `currencyCode`                                                                                                                                                                                                                     | [shared.CurrencyCodeInvoice](../../../sdk/models/shared/currencycodeinvoice.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                 | Currency codes accepted for invoice. Current accepted currencies for invoice: EUR, GPB and USD.                                                                                                                                    |                                                                                                                                                                                                                                    |
| `customData`                                                                                                                                                                                                                       | [shared.CustomDataInvoice](../../../sdk/models/shared/customdatainvoice.md)                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                 | Key/value pairs of any custom data                                                                                                                                                                                                 |                                                                                                                                                                                                                                    |
| `customerId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | ctm_01ghbkbbm326p19wh85fnr0xft                                                                                                                                                                                                     |
| `details`                                                                                                                                                                                                                          | [shared.InvoiceDetails](../../../sdk/models/shared/invoicedetails.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `dueAt`                                                                                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `id`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | inv_01ghbk4xjn4qdsmstcwzgcgg35                                                                                                                                                                                                     |
| `invoiceNumber`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | 123-45678                                                                                                                                                                                                                          |
| `issuedAt`                                                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `items`                                                                                                                                                                                                                            | [shared.InvoiceItem](../../../sdk/models/shared/invoiceitem.md)[]                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `paidAt`                                                                                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `status`                                                                                                                                                                                                                           | [shared.InvoiceStatus](../../../sdk/models/shared/invoicestatus.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                 | The status of the invoice. Most of statuses are self-explanatory. `pending_acceptance` is a state equivalent of `unpaid` but represents the fact that the customer has not yet accept Paddle's invoicing MoR terms and conditions. | paid                                                                                                                                                                                                                               |
| `transactionId`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | txn_01gr689rcf018r2b4bjbrmdh4k                                                                                                                                                                                                     |
| `updatedAt`                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |