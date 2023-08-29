# NotificationSettingUpdate

Represents a notification destination.


## Fields

| Field                                                                                                                                                                                                             | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                | Whether Paddle should try to deliver events to this notification destination.                                                                                                                                     |
| `apiVersion`                                                                                                                                                                                                      | *number*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | API version that returned objects for events should conform to. Must be a valid version of the Paddle API. Cannot be a version older than your account default. Defaults to your account default if not included. |
| `description`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | Short description for this notification destination. Shown in the Paddle Dashboard.                                                                                                                               |
| `destination`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                | Webhook endpoint URL or email address.                                                                                                                                                                            |
| `includeSensitiveFields`                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                | Whether potentially sensitive fields should be sent to this notification destination.                                                                                                                             |
| `subscribedEvents`                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                | Subscribed events for this notification destination. When creating or updating a notification destination, pass an array of event type names only. Paddle returns the complete event type object.                 |