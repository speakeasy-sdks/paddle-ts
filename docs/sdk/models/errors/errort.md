# ErrorT

If the subscription is locked and can not be changed. This happens 30 min before the renewal time.


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `code`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `detail`                                                | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `documentationUrl`                                      | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `errors`                                                | [errors.Errors](../../../sdk/models/errors/errors.md)[] | :heavy_minus_sign:                                      | N/A                                                     |
| `extra`                                                 | [errors.Extra](../../../sdk/models/errors/extra.md)     | :heavy_minus_sign:                                      | N/A                                                     |
| `type`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |