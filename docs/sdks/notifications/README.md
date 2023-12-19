# Notifications
(*notifications*)

## Overview

Work with notifications and notification settings.

### Available Operations

* [createSetting](#createsetting) - Create a notification setting
* [deleteSetting](#deletesetting) - Delete a notification setting
* [get](#get) - Get a notification
* [getSetting](#getsetting) - Get a notification setting
* [list](#list) - List notifications
* [listLogs](#listlogs) - List logs for a notification
* [listSettings](#listsettings) - List notification settings
* [replay](#replay) - Replay a notification
* [replayBySetting](#replaybysetting) - Replay notifications by notification setting
* [updateSettings](#updatesettings) - Update a notification setting

## createSetting

Creates a new notification setting (notification destination).

Pass an array of event type names to `subscribed_events` to say which events you'd like to subscribe to. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the new notification setting entity. Use the returned `endpoint_secret_key` for webhook signature verification.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { NotificationSettingCreateType } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.createSetting({
    description: "Profound maximized orchestration",
    destination: "string",
    subscribedEvents: [
      "string",
    ],
    type: NotificationSettingCreateType.Email,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.NotificationSettingCreate](../../sdk/models/shared/notificationsettingcreate.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateNotificationSettingResponse](../../sdk/models/operations/createnotificationsettingresponse.md)>**
### Errors

| Error Object                                                      | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.CreateNotificationSettingResponseBody                      | 400                                                               | application/json                                                  |
| errors.CreateNotificationSettingNotificationsResponseBody         | 401                                                               | application/json                                                  |
| errors.CreateNotificationSettingNotificationsResponseResponseBody | 500                                                               | application/json                                                  |
| errors.SDKError                                                   | 4xx-5xx                                                           | */*                                                               |

## deleteSetting

Deletes a notification setting (notification destination) using its ID.

When you delete a notification setting, it's permanently removed from your account. Paddle stops sending events to your destination, and you'll lose access to all the logs for this notification setting.

There's no way to recover a deleted notification setting. Deactivate a notification setting using the update notification setting operation if you'll need access to the logs or want to reactivate later on.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.deleteSetting({
    notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteNotificationSettingRequest](../../sdk/models/operations/deletenotificationsettingrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteNotificationSettingResponse](../../sdk/models/operations/deletenotificationsettingresponse.md)>**
### Errors

| Error Object                                                      | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.DeleteNotificationSettingResponseBody                      | 401                                                               | application/json                                                  |
| errors.DeleteNotificationSettingNotificationsResponseBody         | 404                                                               | application/json                                                  |
| errors.DeleteNotificationSettingNotificationsResponseResponseBody | 500                                                               | application/json                                                  |
| errors.SDKError                                                   | 4xx-5xx                                                           | */*                                                               |

## get

Returns a notification using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.get({
    notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetNotificationRequest](../../sdk/models/operations/getnotificationrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetNotificationResponse](../../sdk/models/operations/getnotificationresponse.md)>**
### Errors

| Error Object                                            | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.GetNotificationResponseBody                      | 401                                                     | application/json                                        |
| errors.GetNotificationNotificationsResponseBody         | 404                                                     | application/json                                        |
| errors.GetNotificationNotificationsResponseResponseBody | 500                                                     | application/json                                        |
| errors.SDKError                                         | 4xx-5xx                                                 | */*                                                     |

## getSetting

Returns a notification setting (notification destination) using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.getSetting({
    notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetNotificationSettingRequest](../../sdk/models/operations/getnotificationsettingrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetNotificationSettingResponse](../../sdk/models/operations/getnotificationsettingresponse.md)>**
### Errors

| Error Object                                                   | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.GetNotificationSettingResponseBody                      | 401                                                            | application/json                                               |
| errors.GetNotificationSettingNotificationsResponseBody         | 404                                                            | application/json                                               |
| errors.GetNotificationSettingNotificationsResponseResponseBody | 500                                                            | application/json                                               |
| errors.SDKError                                                | 4xx-5xx                                                        | */*                                                            |

## list

Returns a paginated list of notifications. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { StatusNotification } from "Paddle/dist/sdk/models/shared";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.list({
    filter: "sub_01gw4rrmfrqcwkhjm04hr3ah4n",
    from: "2023-04-18T17:03:26",
    notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
    search: "upgrade",
    to: "2023-04-18T17:03:26",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListNotificationsRequest](../../sdk/models/operations/listnotificationsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListNotificationsResponse](../../sdk/models/operations/listnotificationsresponse.md)>**
### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ListNotificationsResponseBody              | 401                                               | application/json                                  |
| errors.ListNotificationsNotificationsResponseBody | 500                                               | application/json                                  |
| errors.SDKError                                   | 4xx-5xx                                           | */*                                               |

## listLogs

Returns a paginated list of notification logs for a notification. A log includes information about delivery attempts, including failures.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.listLogs({
    notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListNotificationLogsRequest](../../sdk/models/operations/listnotificationlogsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListNotificationLogsResponse](../../sdk/models/operations/listnotificationlogsresponse.md)>**
### Errors

| Error Object                                                 | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.ListNotificationLogsResponseBody                      | 401                                                          | application/json                                             |
| errors.ListNotificationLogsNotificationsResponseBody         | 404                                                          | application/json                                             |
| errors.ListNotificationLogsNotificationsResponseResponseBody | 500                                                          | application/json                                             |
| errors.SDKError                                              | 4xx-5xx                                                      | */*                                                          |

## listSettings

Returns a list of notification settings (notification destinations).

The response is not paginated.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.listSettings();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ListNotificationSettingsResponse](../../sdk/models/operations/listnotificationsettingsresponse.md)>**
### Errors

| Error Object                                             | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ListNotificationSettingsResponseBody              | 401                                                      | application/json                                         |
| errors.ListNotificationSettingsNotificationsResponseBody | 500                                                      | application/json                                         |
| errors.SDKError                                          | 4xx-5xx                                                  | */*                                                      |

## replay

Attempts to resend a `delivered` or `failed` notification using its ID.

Paddle creates a new notification entity for the replay, related to the same `event_id`.

The new notification replay is sent to the `destination` against the `notification_setting_id`.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.replay({
    notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ReplayNotificationRequest](../../sdk/models/operations/replaynotificationrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ReplayNotificationResponse](../../sdk/models/operations/replaynotificationresponse.md)>**
### Errors

| Error Object                                               | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ReplayNotificationResponseBody                      | 401                                                        | application/json                                           |
| errors.ReplayNotificationNotificationsResponseBody         | 404                                                        | application/json                                           |
| errors.ReplayNotificationNotificationsResponseResponseBody | 500                                                        | application/json                                           |
| errors.SDKError                                            | 4xx-5xx                                                    | */*                                                        |

## replayBySetting

Replay notifications by notification setting

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.replayBySetting({
    requestBody: {
      filter: "txn_01h3cgmh9qn7yezn4rgze4nrg2",
      from: new Date("2019-10-12T07:20:50.52Z"),
      to: new Date("2019-10-12T07:20:50.52Z"),
    },
    notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PostNotificationSettingsNotificationSettingIdReplayRequest](../../sdk/models/operations/postnotificationsettingsnotificationsettingidreplayrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `retries`                                                                                                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                                |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PostNotificationSettingsNotificationSettingIdReplayResponse](../../sdk/models/operations/postnotificationsettingsnotificationsettingidreplayresponse.md)>**
### Errors

| Error Object                                                                                | Status Code                                                                                 | Content Type                                                                                |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| errors.PostNotificationSettingsNotificationSettingIdReplayResponseBody                      | 401                                                                                         | application/json                                                                            |
| errors.PostNotificationSettingsNotificationSettingIdReplayNotificationsResponseBody         | 404                                                                                         | application/json                                                                            |
| errors.PostNotificationSettingsNotificationSettingIdReplayNotificationsResponseResponseBody | 500                                                                                         | application/json                                                                            |
| errors.SDKError                                                                             | 4xx-5xx                                                                                     | */*                                                                                         |

## updateSettings

Updates a notification setting (notification destination) using its ID.

When updating subscribed events, send the complete list of event types that you'd like to subscribe to — including existing event types. If you omit event types, they're removed from the notification setting.

You only need to pass an event type name. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the updated notification setting entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";

async function run() {
  const sdk = new Paddle({
    security: {
      bearerAuth: "YOUR_API_KEY",
    },
  });

  const res = await sdk.notifications.updateSettings({
    notificationSettingUpdate: {
      subscribedEvents: [
        "string",
      ],
    },
    notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateNotificationSettingRequest](../../sdk/models/operations/updatenotificationsettingrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateNotificationSettingResponse](../../sdk/models/operations/updatenotificationsettingresponse.md)>**
### Errors

| Error Object                                                         | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.UpdateNotificationSettingResponseBody                         | 400                                                                  | application/json                                                     |
| errors.UpdateNotificationSettingNotificationsResponseBody            | 401                                                                  | application/json                                                     |
| errors.UpdateNotificationSettingNotificationsResponseResponseBody    | 404                                                                  | application/json                                                     |
| errors.UpdateNotificationSettingNotificationsResponse500ResponseBody | 500                                                                  | application/json                                                     |
| errors.SDKError                                                      | 4xx-5xx                                                              | */*                                                                  |
