# Pagination2

Keys used for working with paginated results.


## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   | Example                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `estimatedTotal`                                                                                                                                                                              | *number*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Estimated number of entities for this response.                                                                                                                                               | 999                                                                                                                                                                                           |
| `hasMore`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                            | Whether this response has another page.                                                                                                                                                       |                                                                                                                                                                                               |
| `next`                                                                                                                                                                                        | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | URL containing the query parameters of the original request, along with the `after` parameter that marks the starting point of the next page. Always returned, even if `has_more` is `false`. |                                                                                                                                                                                               |
| `perPage`                                                                                                                                                                                     | *number*                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | Number of entities per page for this response. May differ from the number requested if the requested number is too high.                                                                      |                                                                                                                                                                                               |