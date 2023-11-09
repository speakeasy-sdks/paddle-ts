# Status

The status of the transaction itself. This field can be updated via a `PATCH` but you can only set a transaction to be `billed` or `canceled` manually. All other statuses are automatic.


## Values

| Name        | Value       |
| ----------- | ----------- |
| `Draft`     | draft       |
| `Ready`     | ready       |
| `Billed`    | billed      |
| `Completed` | completed   |
| `Canceled`  | canceled    |
| `PastDue`   | past_due    |