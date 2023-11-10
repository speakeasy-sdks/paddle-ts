# IPAddresses
(*ipAddresses*)

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

(async() => {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.ipAddresses.get();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetIpAddressesResponse](../../sdk/models/operations/getipaddressesresponse.md)>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetIpAddressesResponseBody | 500                               | application/json                  |
| errors.SDKError                   | 400-600                           | */*                               |
