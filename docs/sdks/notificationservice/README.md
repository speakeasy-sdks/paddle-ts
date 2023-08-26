# notificationService

### Available Operations

* [createNotificationSetting](#createnotificationsetting) - Create a notification setting
* [deleteNotificationSetting](#deletenotificationsetting) - Delete a notification setting
* [getIpAddresses](#getipaddresses) - Get Paddle IP addresses
* [getNotification](#getnotification) - Get a notification
* [getNotificationSetting](#getnotificationsetting) - Get a notification setting
* [listEventTypes](#listeventtypes) - List events types
* [listEvents](#listevents) - List events
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

sdk.notificationService.createNotificationSetting({
  active: false,
  apiVersion: 753570,
  description: "ducimus",
  destination: "alias",
  includeSensitiveFields: false,
  subscribedEvents: [
    "tempora",
    "ipsam",
    "ea",
  ],
  type: NotificationSettingCreateType.Email,
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

sdk.notificationService.deleteNotificationSetting({
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


## getIpAddresses

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

sdk.notificationService.getIpAddresses().then((res: GetIpAddressesResponse) => {
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

sdk.notificationService.getNotification({
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

sdk.notificationService.getNotificationSetting({
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


## listEventTypes

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

sdk.notificationService.listEventTypes().then((res: ListEventTypesResponse) => {
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


## listEvents

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

sdk.notificationService.listEvents({
  after: "vel",
  orderBy: "possimus",
  perPage: 297842,
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

sdk.notificationService.listNotificationLogs({
  after: "ratione",
  notificationId: "ntf_01gt261ms8ew72a0vnm5p5ne2q",
  perPage: 401132,
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

sdk.notificationService.listNotificationSettings().then((res: ListNotificationSettingsResponse) => {
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

sdk.notificationService.listNotifications({
  after: "laudantium",
  filter: "txn_01h3cgmh9qn7yezn4rgze4nrg2",
  from: "2023-04-18T17:03:26",
  notificationSettingId: "ntfset_01gt21c5pdx9q1e4mh1xrsjjn6",
  orderBy: "dolor",
  perPage: 980700,
  search: "upgrade",
  status: StatusNotification.Delivered,
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

sdk.notificationService.postNotificationSettingsNotificationSettingIdReplay({
  requestBody: {
    filter: "ctm_01gw4qna8a0w5ywmy8kb9syy84",
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

sdk.notificationService.replayNotification({
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

sdk.notificationService.updateNotificationSetting({
  notificationSettingUpdate: {
    active: false,
    apiVersion: 862192,
    description: "excepturi",
    destination: "voluptatibus",
    includeSensitiveFields: false,
    subscribedEvents: [
      "sapiente",
      "quisquam",
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

