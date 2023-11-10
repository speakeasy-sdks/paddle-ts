# ErrorCode

Reason why a payment attempt failed. `null` if payment captured successfully.


## Values

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `Unknown`                 | unknown                   |
| `AlreadyCanceled`         | already_canceled          |
| `AlreadyRefunded`         | already_refunded          |
| `AuthenticationFailed`    | authentication_failed     |
| `BlockedCard`             | blocked_card              |
| `Canceled`                | canceled                  |
| `Declined`                | declined                  |
| `ExpiredCard`             | expired_card              |
| `Fraud`                   | fraud                     |
| `SystemError`             | system_error              |
| `InvalidAmount`           | invalid_amount            |
| `IssuerUnavailable`       | issuer_unavailable        |
| `InvalidPaymentDetails`   | invalid_payment_details   |
| `NotEnoughBalance`        | not_enough_balance        |
| `PspError`                | psp_error                 |
| `RedactedPaymentMethod`   | redacted_payment_method   |
| `TransactionNotPermitted` | transaction_not_permitted |