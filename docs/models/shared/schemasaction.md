# Schemasaction

How this adjustment impacts the related transaction. `refund` adjustments must be approved by Paddle, and are created with the status `pending_approval`. `chargeback` and `chargeback_warning` adjustments are created automatically by Paddle.


## Values

| Name                | Value               |
| ------------------- | ------------------- |
| `Credit`            | credit              |
| `Refund`            | refund              |
| `Chargeback`        | chargeback          |
| `ChargebackWarning` | chargeback_warning  |