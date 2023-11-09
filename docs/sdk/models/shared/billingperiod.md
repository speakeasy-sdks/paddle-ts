# BillingPeriod


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `endsAt`                                                        | [RFCDate](../../types/rfcdate.md)                               | :heavy_check_mark:                                              | N/A                                                             |
| `startsAt`                                                      | [RFCDate](../../types/rfcdate.md)                               | :heavy_check_mark:                                              | N/A                                                             |
| `type`                                                          | [shared.InvoiceType](../../../sdk/models/shared/invoicetype.md) | :heavy_check_mark:                                              | The billing period type is set to `billing` for subscriptions.  |