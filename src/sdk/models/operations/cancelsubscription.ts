/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CancelSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * When this scheduled change should take effect from. `immediately` is only allowed when canceling or resuming a paused subscription.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "effective_from" })
    effectiveFrom?: shared.EffectiveFromNullable;
}

export class CancelSubscriptionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CancelSubscriptionRequestBody;

    /**
     * Paddle ID of the subscription entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;
}

/**
 * OK
 */
export class CancelSubscription200ApplicationJSON extends SpeakeasyBase {
    /**
     * Represents a subscription entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.Subscription1)
    data: shared.Subscription1;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class CancelSubscriptionResponse extends SpeakeasyBase {
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
    cancelSubscription200ApplicationJSONObject?: CancelSubscription200ApplicationJSON;
}