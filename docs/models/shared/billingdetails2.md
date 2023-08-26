# BillingDetails2

Details for invoicing. Required if `collection_mode` is `manual`.


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `additionalInformation`                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Notes or other information to include on this invoice. Appears on invoice documents. |
| `enableCheckout`                                                                     | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the related transaction may be paid using a Paddle Checkout.                 |
| `paymentTerms`                                                                       | [Period2](../../models/shared/period2.md)                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `purchaseOrderNumber`                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | Customer purchase order number. Appears on invoice documents.                        |