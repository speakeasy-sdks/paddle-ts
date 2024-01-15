/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SchemaStatus, SchemaStatus$ } from "./schemastatus";
import { z } from "zod";

export type BusinessContacts = {
    /**
     * Email address for this entity.
     */
    email: string;
    /**
     * Full name.
     */
    name: string;
};

/**
 * Represents a business entity.
 */
export type Business = {
    /**
     * Company number for this business.
     */
    companyNumber?: string | null | undefined;
    /**
     * List of contacts related to this business, typically used for sending invoices.
     */
    contacts?: Array<BusinessContacts> | undefined;
    /**
     * RFC 3339 datetime string of when this entity was created. Set automatically by Paddle.
     */
    createdAt?: Date | undefined;
    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    id?: string | undefined;
    /**
     * Full name.
     */
    name?: string | undefined;
    /**
     * Whether this entity can be used in Paddle.
     */
    status?: SchemaStatus | undefined;
    /**
     * Tax or VAT Number for this business.
     */
    taxIdentifier?: string | null | undefined;
    /**
     * RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle.
     */
    updatedAt?: Date | undefined;
};

/**
 * Represents a business entity.
 */
export type BusinessInput = {
    /**
     * Company number for this business.
     */
    companyNumber?: string | null | undefined;
    /**
     * List of contacts related to this business, typically used for sending invoices.
     */
    contacts?: Array<BusinessContacts> | undefined;
    /**
     * Unique Paddle ID for this business entity, prefixed with `biz_`.
     */
    id?: string | undefined;
    /**
     * Full name.
     */
    name?: string | undefined;
    /**
     * Whether this entity can be used in Paddle.
     */
    status?: SchemaStatus | undefined;
    /**
     * Tax or VAT Number for this business.
     */
    taxIdentifier?: string | null | undefined;
};

/** @internal */
export namespace BusinessContacts$ {
    export type Inbound = {
        email: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<BusinessContacts, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                name: v.name,
            };
        });

    export type Outbound = {
        email: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BusinessContacts> = z
        .object({
            email: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                name: v.name,
            };
        });
}

/** @internal */
export namespace Business$ {
    export type Inbound = {
        company_number?: string | null | undefined;
        contacts?: Array<BusinessContacts$.Inbound> | undefined;
        created_at?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: SchemaStatus | undefined;
        tax_identifier?: string | null | undefined;
        updated_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Business, z.ZodTypeDef, Inbound> = z
        .object({
            company_number: z.nullable(z.string()).optional(),
            contacts: z.array(z.lazy(() => BusinessContacts$.inboundSchema)).optional(),
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            status: SchemaStatus$.optional(),
            tax_identifier: z.nullable(z.string()).optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.company_number === undefined ? null : { companyNumber: v.company_number }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tax_identifier === undefined ? null : { taxIdentifier: v.tax_identifier }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        company_number?: string | null | undefined;
        contacts?: Array<BusinessContacts$.Outbound> | undefined;
        created_at?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: SchemaStatus | undefined;
        tax_identifier?: string | null | undefined;
        updated_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Business> = z
        .object({
            companyNumber: z.nullable(z.string()).optional(),
            contacts: z.array(z.lazy(() => BusinessContacts$.outboundSchema)).optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            status: SchemaStatus$.optional(),
            taxIdentifier: z.nullable(z.string()).optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.companyNumber === undefined ? null : { company_number: v.companyNumber }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.taxIdentifier === undefined ? null : { tax_identifier: v.taxIdentifier }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace BusinessInput$ {
    export type Inbound = {
        company_number?: string | null | undefined;
        contacts?: Array<BusinessContacts$.Inbound> | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: SchemaStatus | undefined;
        tax_identifier?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<BusinessInput, z.ZodTypeDef, Inbound> = z
        .object({
            company_number: z.nullable(z.string()).optional(),
            contacts: z.array(z.lazy(() => BusinessContacts$.inboundSchema)).optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            status: SchemaStatus$.optional(),
            tax_identifier: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.company_number === undefined ? null : { companyNumber: v.company_number }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tax_identifier === undefined ? null : { taxIdentifier: v.tax_identifier }),
            };
        });

    export type Outbound = {
        company_number?: string | null | undefined;
        contacts?: Array<BusinessContacts$.Outbound> | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: SchemaStatus | undefined;
        tax_identifier?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BusinessInput> = z
        .object({
            companyNumber: z.nullable(z.string()).optional(),
            contacts: z.array(z.lazy(() => BusinessContacts$.outboundSchema)).optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            status: SchemaStatus$.optional(),
            taxIdentifier: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.companyNumber === undefined ? null : { company_number: v.companyNumber }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.taxIdentifier === undefined ? null : { tax_identifier: v.taxIdentifier }),
            };
        });
}
