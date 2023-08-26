# invoices

## Overview

Work with invoices.

Invoices - Paddle Developer Center
<https://paddle.stoplight.io/docs/next-gen-billing/entities/invoices>
### Available Operations

* [getInvoicePdf](#getinvoicepdf) - Get a PDF for an invoice

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

sdk.invoices.getInvoicePdf({
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

