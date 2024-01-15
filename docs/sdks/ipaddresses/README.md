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

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const result = await sdk.ipAddresses.get();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetIpAddressesResponse](../../sdk/models/operations/getipaddressesresponse.md)>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetIpAddressesResponseBody | 500                               | application/json                  |
| errors.SDKError                   | 4xx-5xx                           | */*                               |
