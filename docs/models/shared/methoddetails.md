# MethodDetails

Information about the payment method used for a payment attempt.


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `card`                                                                                       | [MethodDetailsCard](../../models/shared/methoddetailscard.md)                                | :heavy_minus_sign:                                                                           | Information about the credit or debit card used to pay. Only returned when `type` is `card`. |
| `type`                                                                                       | [MethodDetailsType](../../models/shared/methoddetailstype.md)                                | :heavy_minus_sign:                                                                           | Type of payment method used for this payment attempt.                                        |