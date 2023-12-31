/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { ErrorT } from "./error";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose, Type } from "class-transformer";

/**
 * General error response
 */
export class UpdateNotificationSettingNotificationsResponse500ResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateNotificationSettingNotificationsResponse500ResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateNotificationSettingNotificationsResponse500ResponseBody";
        Object.setPrototypeOf(
            this,
            UpdateNotificationSettingNotificationsResponse500ResponseBody.prototype
        );
    }
}

/**
 * General error response
 */
export class UpdateNotificationSettingNotificationsResponseResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateNotificationSettingNotificationsResponseResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateNotificationSettingNotificationsResponseResponseBody";
        Object.setPrototypeOf(
            this,
            UpdateNotificationSettingNotificationsResponseResponseBody.prototype
        );
    }
}

/**
 * General error response
 */
export class UpdateNotificationSettingNotificationsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    constructor(err?: UpdateNotificationSettingNotificationsResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateNotificationSettingNotificationsResponseBody";
        Object.setPrototypeOf(this, UpdateNotificationSettingNotificationsResponseBody.prototype);
    }
}

/**
 * Error response for validation
 */
export class UpdateNotificationSettingResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => shared.ErrorValidation)
    error?: shared.ErrorValidation;

    constructor(err?: UpdateNotificationSettingResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "UpdateNotificationSettingResponseBody";
        Object.setPrototypeOf(this, UpdateNotificationSettingResponseBody.prototype);
    }
}
