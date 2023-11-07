# Card

Information about the credit or debit card used to pay. Only returned when `type` is `card`.


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `expiryMonth`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | Month of the expiry date of the card used to pay.                                  |
| `expiryYear`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | Year of the expiry year of the card used to pay.                                   |
| `last4`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Last four digits of the card used to pay.                                          |
| `type`                                                                             | [shared.MethodDetailsSchemasType](../../models/shared/methoddetailsschemastype.md) | :heavy_minus_sign:                                                                 | Type of credit or debit card used to pay.                                          |