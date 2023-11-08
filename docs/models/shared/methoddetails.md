# MethodDetails

Information about the payment method used for a payment attempt.


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `card`                                                                                       | [shared.Card](../../models/shared/card.md)                                                   | :heavy_minus_sign:                                                                           | Information about the credit or debit card used to pay. Only returned when `type` is `card`. |
| `type`                                                                                       | [shared.MethodDetailsType](../../models/shared/methoddetailstype.md)                         | :heavy_minus_sign:                                                                           | Type of payment method used for this payment attempt.                                        |