# notifications

## Overview

Work with notifications and notification settings.

### Available Operations

* [createNotificationSetting](#createnotificationsetting) - Create a notification setting
* [deleteNotificationSetting](#deletenotificationsetting) - Delete a notification setting
* [getNotification](#getnotification) - Get a notification
* [getNotificationSetting](#getnotificationsetting) - Get a notification setting
* [listNotificationLogs](#listnotificationlogs) - List logs for a notification
* [listNotificationSettings](#listnotificationsettings) - List notification settings
* [listNotifications](#listnotifications) - List notifications
* [postNotificationSettingsNotificationSettingIdReplay](#postnotificationsettingsnotificationsettingidreplay) - Replay notifications by notification setting
* [replayNotification](#replaynotification) - Replay a notification
* [updateNotificationSetting](#updatenotificationsetting) - Update a notification setting

## createNotificationSetting

Creates a new notification setting (notification destination).

Pass an array of event type names to `subscribed_events` to say which events you'd like to subscribe to. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the new notification setting entity. Use the returned `endpoint_secret_key` for webhook signature verification.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { CreateNotificationSettingResponse } from "Paddle/dist/sdk/models/operations";
import { NotificationSettingCreateType } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.createNotificationSetting({
  active: false,
  apiVersion: 435865,
  description: "doloribus",
  destination: "debitis",
  includeSensitiveFields: false,
  subscribedEvents: [
    "maxime",
    "deleniti",
  ],
  type: NotificationSettingCreateType.Url,
}).then((res: CreateNotificationSettingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.NotificationSettingCreateInput](../../models/shared/notificationsettingcreateinput.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateNotificationSettingResponse](../../models/operations/createnotificationsettingresponse.md)>**


## deleteNotificationSetting

Deletes a notification setting (notification destination) using its ID.

When you delete a notification setting, it's permanently removed from your account. Paddle stops sending events to your destination, and you'll lose access to all the logs for this notification setting.

There's no way to recover a deleted notification setting. Deactivate a notification setting using the update notification setting operation if you'll need access to the logs or want to reactivate later on.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { DeleteNotificationSettingResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.deleteNotificationSetting({
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
}).then((res: DeleteNotificationSettingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteNotificationSettingRequest](../../models/operations/deletenotificationsettingrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteNotificationSettingResponse](../../models/operations/deletenotificationsettingresponse.md)>**


## getNotification

Returns a notification using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetNotificationResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.getNotification({
  notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
}).then((res: GetNotificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetNotificationRequest](../../models/operations/getnotificationrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetNotificationResponse](../../models/operations/getnotificationresponse.md)>**


## getNotificationSetting

Returns a notification setting (notification destination) using its ID.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { GetNotificationSettingResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.getNotificationSetting({
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
}).then((res: GetNotificationSettingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetNotificationSettingRequest](../../models/operations/getnotificationsettingrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetNotificationSettingResponse](../../models/operations/getnotificationsettingresponse.md)>**


## listNotificationLogs

Returns a paginated list of notification logs for a notification. A log includes information about delivery attempts, including failures.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListNotificationLogsResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.listNotificationLogs({
  after: "in",
  notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  perPage: 100226,
}).then((res: ListNotificationLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListNotificationLogsRequest](../../models/operations/listnotificationlogsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListNotificationLogsResponse](../../models/operations/listnotificationlogsresponse.md)>**


## listNotificationSettings

Returns a list of notification settings (notification destinations).

The response is not paginated.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListNotificationSettingsResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.listNotificationSettings().then((res: ListNotificationSettingsResponse) => {
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

**Promise<[operations.ListNotificationSettingsResponse](../../models/operations/listnotificationsettingsresponse.md)>**


## listNotifications

Returns a paginated list of notifications. Use the query parameters to page through results.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ListNotificationsResponse } from "Paddle/dist/sdk/models/operations";
import { StatusNotification } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.listNotifications({
  after: "architecto",
  filter: "sub_01gw4rrmfrqcwkhjm04hr3ah4n",
  from: "2023-04-18T17:03:26",
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  orderBy: "ullam",
  perPage: 714242,
  search: "upgrade",
  status: StatusNotification.Failed,
  to: "2023-04-18T17:03:26",
}).then((res: ListNotificationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListNotificationsRequest](../../models/operations/listnotificationsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListNotificationsResponse](../../models/operations/listnotificationsresponse.md)>**


## postNotificationSettingsNotificationSettingIdReplay

Replay notifications by notification setting

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { PostNotificationSettingsNotificationSettingIdReplayResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.postNotificationSettingsNotificationSettingIdReplay({
  requestBody: {
    filter: "sub_01gw4rrmfrqcwkhjm04hr3ah4n",
    from: new Date("2019-10-12T07:20:50.52Z"),
    to: new Date("2019-10-12T07:20:50.52Z"),
  },
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
}).then((res: PostNotificationSettingsNotificationSettingIdReplayResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PostNotificationSettingsNotificationSettingIdReplayRequest](../../models/operations/postnotificationsettingsnotificationsettingidreplayrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PostNotificationSettingsNotificationSettingIdReplayResponse](../../models/operations/postnotificationsettingsnotificationsettingidreplayresponse.md)>**


## replayNotification

Attempts to resend a `delivered` or `failed` notification using its ID.

Paddle creates a new notification entity for the replay, related to the same `event_id`.

The new notification replay is sent to the `destination` against the `notification_setting_id`.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { ReplayNotificationResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.replayNotification({
  notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
}).then((res: ReplayNotificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ReplayNotificationRequest](../../models/operations/replaynotificationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ReplayNotificationResponse](../../models/operations/replaynotificationresponse.md)>**


## updateNotificationSetting

Updates a notification setting (notification destination) using its ID.

When updating subscribed events, send the complete list of event types that you'd like to subscribe to — including existing event types. If you omit event types, they're removed from the notification setting.

You only need to pass an event type name. Paddle responds with the full event type object for each event type.

If successful, your response includes a copy of the updated notification setting entity.

### Example Usage

```typescript
import { Paddle } from "Paddle";
import { UpdateNotificationSettingResponse } from "Paddle/dist/sdk/models/operations";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.updateNotificationSetting({
  notificationSettingUpdate: {
    active: false,
    apiVersion: 841140,
    description: "sed",
    destination: "saepe",
    includeSensitiveFields: false,
    subscribedEvents: [
      "accusantium",
      "consequuntur",
      "praesentium",
      "natus",
    ],
  },
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
}).then((res: UpdateNotificationSettingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateNotificationSettingRequest](../../models/operations/updatenotificationsettingrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateNotificationSettingResponse](../../models/operations/updatenotificationsettingresponse.md)>**

