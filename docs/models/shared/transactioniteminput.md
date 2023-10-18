# TransactionItemInput


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `price`                                                | [PriceInput](../../models/shared/priceinput.md)        | :heavy_minus_sign:                                     | Represents a price entity.                             |                                                        |
| `priceId`                                              | *string*                                               | :heavy_check_mark:                                     | Unique Paddle ID for this price, prefixed with `pri_`. | pri_01gsz8z1q1n00f12qt82y31smh                         |
| `quantity`                                             | *number*                                               | :heavy_check_mark:                                     | Quantity of this item on the transaction.              |                                                        |