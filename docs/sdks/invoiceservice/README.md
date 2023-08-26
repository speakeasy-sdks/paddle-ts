# invoiceService

### Available Operations

* [getInvoicePdf](#getinvoicepdf) - Get a PDF for an invoice
* [getTransactionInvoice](#gettransactioninvoice) - Get a PDF invoice for a transaction

## getInvoicePdf

Generates a PDF for an invoice, then returns a link to it.

The link returned is not a permanent link. It expires at the date and time returned in the `Expires` header.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetInvoicePdfResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.invoiceService.getInvoicePdf({
  invoiceId: "inv_01gt24rqm9618yds0pkaynrgx0",
}).then((res: GetInvoicePdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetInvoicePdfRequest](../../models/operations/getinvoicepdfrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetInvoicePdfResponse](../../models/operations/getinvoicepdfresponse.md)>**


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

sdk.invoiceService.getTransactionInvoice({
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

