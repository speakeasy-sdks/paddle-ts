/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CountryCode2, CountryCode2$ } from "./countrycode2";
import { SchemaStatus, SchemaStatus$ } from "./schemastatus";
import { z } from "zod";

/**
 * Represents an address entity.
 */
export type AddressInput = {
    /**
     * City of this address.
     */
    city?: string | null | undefined;
    /**
     * Supported two-letter ISO 3166-1 alpha-2 country code.
     */
    countryCode?: CountryCode2 | undefined;
    /**
     * Memorable description for this address.
     */
    description?: string | null | undefined;
    /**
     * First line of this address.
     */
    firstLine?: string | null | undefined;
    /**
     * Unique Paddle ID for this address entity, prefixed with `add_`.
     */
    id?: string | undefined;
    /**
     * ZIP or postal code of this address. Required for some countries.
     */
    postalCode?: string | null | undefined;
    /**
     * State, county, or region of this address.
     */
    region?: string | null | undefined;
    /**
     * Second line of this address.
     */
    secondLine?: string | null | undefined;
    /**
     * Whether this entity can be used in Paddle.
     */
    status?: SchemaStatus | undefined;
};

/** @internal */
export namespace AddressInput$ {
    export type Inbound = {
        city?: string | null | undefined;
        country_code?: CountryCode2 | undefined;
        description?: string | null | undefined;
        first_line?: string | null | undefined;
        id?: string | undefined;
        postal_code?: string | null | undefined;
        region?: string | null | undefined;
        second_line?: string | null | undefined;
        status?: SchemaStatus | undefined;
    };

    export const inboundSchema: z.ZodType<AddressInput, z.ZodTypeDef, Inbound> = z
        .object({
            city: z.nullable(z.string()).optional(),
            country_code: CountryCode2$.optional(),
            description: z.nullable(z.string()).optional(),
            first_line: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            postal_code: z.nullable(z.string()).optional(),
            region: z.nullable(z.string()).optional(),
            second_line: z.nullable(z.string()).optional(),
            status: SchemaStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.country_code === undefined ? null : { countryCode: v.country_code }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.first_line === undefined ? null : { firstLine: v.first_line }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.postal_code === undefined ? null : { postalCode: v.postal_code }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.second_line === undefined ? null : { secondLine: v.second_line }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        city?: string | null | undefined;
        country_code?: CountryCode2 | undefined;
        description?: string | null | undefined;
        first_line?: string | null | undefined;
        id?: string | undefined;
        postal_code?: string | null | undefined;
        region?: string | null | undefined;
        second_line?: string | null | undefined;
        status?: SchemaStatus | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressInput> = z
        .object({
            city: z.nullable(z.string()).optional(),
            countryCode: CountryCode2$.optional(),
            description: z.nullable(z.string()).optional(),
            firstLine: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            postalCode: z.nullable(z.string()).optional(),
            region: z.nullable(z.string()).optional(),
            secondLine: z.nullable(z.string()).optional(),
            status: SchemaStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.countryCode === undefined ? null : { country_code: v.countryCode }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.firstLine === undefined ? null : { first_line: v.firstLine }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.postalCode === undefined ? null : { postal_code: v.postalCode }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.secondLine === undefined ? null : { second_line: v.secondLine }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
