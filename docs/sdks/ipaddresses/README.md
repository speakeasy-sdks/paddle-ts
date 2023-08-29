# ipAddresses

## Overview

Get Paddle IP addresses.

### Available Operations

* [get](#get) - Get Paddle IP addresses

## get

Returns Paddle IP addresses. You can add these IP addresses to your allowlist.

IP addresses returned are for the environment that you're making the request in. For example, making the request to the production base URL returns all production IP addresses.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetIpAddressesResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.ipAddresses.get().then((res: GetIpAddressesResponse) => {
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

**Promise<[operations.GetIpAddressesResponse](../../models/operations/getipaddressesresponse.md)>**

