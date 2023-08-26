# adjustmentService

### Available Operations

* [createAdjustment](#createadjustment) - Create an adjustment
* [listAdjustments](#listadjustments) - List adjustments
* [listCreditBalances](#listcreditbalances) - List credit balances for a customer

## createAdjustment

Creates an adjustment for one or more transaction items.

You may create adjustments for `billed` or `completed` transactions:

* Where an adjustment is for a manually-collected transaction with the status of `billed` (an issued invoice), credit adjustments reduce the balance to pay on the invoice.
* Where an adjustment is a refund, the total is returned to a customer's original payment method.

You can't create credits for automatically-collected transactions. Paddle creates and manages credits for automatically-collected transactions when you make changes to the related subscription and choose to prorate.

Refunds must be approved by Paddle. They're created with the status `pending_approval`, before moving to `approved` or `rejected`.

Adjustments can apply to some or all items on a transaction. You'll need the Paddle ID of the transaction to create a refund or credit for,
along with the Paddle ID of any transaction items (`details.line_items[].id`).

If successful, your response includes a copy of the new adjustment entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreateAdjustmentResponse } from "Paddle/dist/sdk/models/operations";
import {
  AdjustmentCreateAdjustmentItemType,
  CurrencyCode2,
  CurrencyCodeChargeback,
  CurrencyCodePayouts,
  Schemasaction,
  SchemasstatusAdjustment,
} from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.adjustmentService.createAdjustment({
  action: Schemasaction.Credit,
  currencyCode: CurrencyCode2.Huf,
  customerId: "ctm_01grnn4zta5a1mf02jjze7y2ys",
  id: "adj_01gya6twkp8y0tv1e19rsgst9m",
  items: [
    {
      amount: "ab",
      id: "adjitm_01gw4rs4kex0prncwfne87ft8x",
      itemId: "txnitm_01gm302t81w94gyjpjpqypkzkf",
      type: AdjustmentCreateAdjustmentItemType.Full,
    },
  ],
  payoutTotals: {
    chargebackFee: {
      amount: "1680",
      original: {
        amount: "1500",
        currencyCode: CurrencyCodeChargeback.Usd,
      },
    },
    currencyCode: CurrencyCodePayouts.Pln,
    earnings: "15120",
    fee: "300",
    subtotal: "15000",
    tax: "1500",
    total: "16500",
  },
  reason: "ipsam",
  status: SchemasstatusAdjustment.Approved,
  subscriptionId: "sub_01h04vsc0qhwtsbsxh3422wjs4",
  transactionId: "autem",
}).then((res: CreateAdjustmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.AdjustmentCreateInput](../../models/shared/adjustmentcreateinput.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateAdjustmentResponse](../../models/operations/createadjustmentresponse.md)>**


## listAdjustments

Returns a paginated list of adjustments. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListAdjustmentsResponse } from "Paddle/dist/sdk/models/operations";
import { Action, StatusAdjustment } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.adjustmentService.listAdjustments({
  action: Action.CreditReverse,
  after: "eaque",
  customerId: "ctm_01gt25aq4b2zcfw12szwtjrbdt",
  id: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
  orderBy: "perspiciatis",
  perPage: 31838,
  status: StatusAdjustment.Reversed,
  subscriptionId: "sub_01gvne45dvdhg5gdxrz6hh511r",
  transactionId: "txn_01gw225vv6tjbb5gnt062a3k5v",
}).then((res: ListAdjustmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListAdjustmentsRequest](../../models/operations/listadjustmentsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListAdjustmentsResponse](../../models/operations/listadjustmentsresponse.md)>**


## listCreditBalances

Returns a list of credit balances for each currency for a customer. Each balance has three totals:

* `available`: total available to use.
* `reserved`: total temporarily reserved for billed transactions.
* `used`: total amount of credit used.

Credit is added to the `available` total initially. When used, it moves to the `used` total.

The `reserved` total is used when a credit balance is applied to a transaction that's marked as `billed`, like when working with an issued invoice. It's not available for other transactions at this point, but isn't considered `used` until the transaction is completed. If a `billed` transaction is `canceled`, any reserved credit moves back to `available`.

The response is not paginated.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListCreditBalancesResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.adjustmentService.listCreditBalances({
  currencyCode: "EUR",
  customerId: "ctm_01gw1xk43eqy2rrf0cs93zvm6t",
}).then((res: ListCreditBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCreditBalancesRequest](../../models/operations/listcreditbalancesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCreditBalancesResponse](../../models/operations/listcreditbalancesresponse.md)>**

