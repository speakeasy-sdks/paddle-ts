# transactions

## Overview

Work with transactions.

Transactions - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/transactions>
### Available Operations

* [getTransactionInvoice](#gettransactioninvoice) - Get a PDF invoice for a transaction

## getTransactionInvoice

Returns a link to an invoice PDF for a transaction.

Invoice PDFs are created for both automatically and manually-collected transactions.

* The PDF for manually-collected transactions includes payment terms, purchase order number, and notes for your customer. It's a demand for payment from your customer.
* The PDF for automatically-collected transactions lets your customer know that payment was taken successfully. Customers may require this for for tax-reporting purposes.

The link returned is not a permanent link. It expires at the date and time returned in the `Expires` header.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetTransactionInvoiceResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.transactions.getTransactionInvoice({
  transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
}).then((res: GetTransactionInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetTransactionInvoiceRequest](../../models/operations/gettransactioninvoicerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetTransactionInvoiceResponse](../../models/operations/gettransactioninvoiceresponse.md)>**

