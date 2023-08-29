# notifications

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
import { CreateNotificationSettingResponse } from "Paddle/dist/sdk/models/operations";
import { NotificationSettingCreateType } from "Paddle/dist/sdk/models/shared";

const sdk = new Paddle({
  security: {
    bearerAuth: "",
  },
});

sdk.notifications.createSetting({
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


## deleteSetting

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

sdk.notifications.deleteSetting({
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


## get

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

sdk.notifications.get({
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


## getSetting

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

sdk.notifications.getSetting({
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


## list

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

sdk.notifications.list({
  after: "in",
  filter: "txn_01h3cgmh9qn7yezn4rgze4nrg2",
  from: "2023-04-18T17:03:26",
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  orderBy: "architecto",
  perPage: 919483,
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


## listLogs

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

sdk.notifications.listLogs({
  after: "expedita",
  notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  perPage: 469249,
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


## listSettings

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

sdk.notifications.listSettings().then((res: ListNotificationSettingsResponse) => {
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


## replay

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

sdk.notifications.replay({
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


## replayBySetting

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

sdk.notifications.replayBySetting({
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


## updateSettings

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

sdk.notifications.updateSettings({
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

