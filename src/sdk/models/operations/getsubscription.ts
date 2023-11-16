/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSubscriptionRequest extends SpeakeasyBase {
    /**
     * Include related entities in the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.IncludeSubscription;

    /**
     * Paddle ID of the subscription entity to work with.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
    subscriptionId: string;
}

/**
 * OK
 */
export class GetSubscriptionResponseBody extends SpeakeasyBase {
    /**
     * Represents a subscription entity with included entities.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.SubscriptionIncludes)
    data: shared.SubscriptionIncludes;

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class GetSubscriptionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: GetSubscriptionResponseBody;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
