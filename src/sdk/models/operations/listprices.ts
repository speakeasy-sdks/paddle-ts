/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListPricesRequest extends SpeakeasyBase {
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
     * Include related entities in the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
    include?: shared.IncludePrice;

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

    /**
     * Return entities related to the specified product. Use a comma separated list to specify multiple product IDs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_id" })
    productId?: string;

    /**
     * Determine whether returned entities are for recurring prices (`true`) or one-time prices (`false`).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recurring" })
    recurring?: boolean;

    /**
     * Return entities that match the specified status. Use a comma separated list to specify multiple status values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: shared.Status;
}

/**
 * OK
 */
export class ListPricesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.PriceIncludes })
    @Expose({ name: "data" })
    @Type(() => shared.PriceIncludes)
    data: shared.PriceIncludes[];

    /**
     * Information about this response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.MetaPaginated)
    meta: shared.MetaPaginated;
}

export class ListPricesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: ListPricesResponseBody;

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
