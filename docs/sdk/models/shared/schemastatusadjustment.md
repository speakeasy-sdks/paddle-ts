# SchemaStatusAdjustment

Status of this adjustment. Set automatically by Paddle. 

`refund` adjustments must be approved by Paddle, and are created with the status `pending_approval` 
until they move to `approved` or `rejected` on review.  `credit` adjustments are created with the status `approved`.


## Values

| Name              | Value             |
| ----------------- | ----------------- |
| `PendingApproval` | pending_approval  |
| `Approved`        | approved          |
| `Rejected`        | rejected          |