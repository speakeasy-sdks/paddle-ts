/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class ListNotificationSettings200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.NotificationSettingComplete })
    @Expose({ name: "data" })
    @Type(() => shared.NotificationSettingComplete)
    data: shared.NotificationSettingComplete[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class ListNotificationSettingsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    listNotificationSettings200ApplicationJSONObject?: ListNotificationSettings200ApplicationJSON;
}