# events

## Overview

Work with events and the event stream.

### Available Operations

* [list](#list) - List events
* [listTypes](#listtypes) - List events types

## list

Returns a paginated list of events that have occurred. Use the query parameters to page through results.

This is sometimes referred to as "the event stream."

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListEventsResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.events.list({
  after: "odit",
  orderBy: "nemo",
  perPage: 97260,
}).then((res: ListEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListEventsRequest](../../models/operations/listeventsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListEventsResponse](../../models/operations/listeventsresponse.md)>**


## listTypes

Returns a list of event types.

The response is not paginated.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListEventTypesResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.events.listTypes().then((res: ListEventTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListEventTypesResponse](../../models/operations/listeventtypesresponse.md)>**

