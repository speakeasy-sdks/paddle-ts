# SubscriptionUpdateProrationBillingMode

How Paddle should handle proration calculation for changes made to a subscription or its items. Required when making changes that impact billing.


## Values

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `ProratedImmediately`        | prorated_immediately         |
| `ProratedNextBillingPeriod`  | prorated_next_billing_period |
| `FullImmediately`            | full_immediately             |
| `FullNextBillingPeriod`      | full_next_billing_period     |
| `DoNotBill`                  | do_not_bill                  |