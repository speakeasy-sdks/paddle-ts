/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCustomersRequest extends SpeakeasyBase {
    /**
     * Return entities after the specified cursor. Used for working through paginated results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Return only the IDs specified. Use a comma separated list to get multiple entities.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
    id?: string;

    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
    orderBy?: string;

    /**
     * Set how many entities are returned per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
    search?: string;

    /**
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: shared.Status;
}

/**
 * OK
 */
export class ListCustomers200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Customer })
    @Expose({ name: "data" })
    @Type(() => shared.Customer)
    data: shared.Customer[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListCustomersResponse extends SpeakeasyBase {
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
    listCustomers200ApplicationJSONObject?: ListCustomers200ApplicationJSON;
}