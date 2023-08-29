# ListDiscountsRequest


## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Return entities after the specified cursor. Used for working through paginated results.                        |                                                                                                                |
| `code`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Return entities that match the discount code. Use a comma separated list to specify multiple discount codes.   | BLACKFRIDAY                                                                                                    |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Return only the IDs specified. Use a comma separated list to get multiple entities.                            |                                                                                                                |
| `orderBy`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`).                            |                                                                                                                |
| `perPage`                                                                                                      | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Set how many entities are returned per page.                                                                   |                                                                                                                |
| `status`                                                                                                       | [shared.StatusDiscount](../../models/shared/statusdiscount.md)                                                 | :heavy_minus_sign:                                                                                             | Return entities that match the specified status. Use a comma separated list to specify multiple status values. |                                                                                                                |