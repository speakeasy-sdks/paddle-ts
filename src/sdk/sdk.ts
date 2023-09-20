/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Addresses } from "./addresses";
import { Adjustments } from "./adjustments";
import { Businesses } from "./businesses";
import { Customers } from "./customers";
import { Discounts } from "./discounts";
import { Events } from "./events";
import { Invoices } from "./invoices";
import { IPAddresses } from "./ipaddresses";
import * as shared from "./models/shared";
import { Notifications } from "./notifications";
import { Subscriptions } from "./subscriptions";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.paddle.com",
    /**
     * Sandbox
     */
    "https://sandbox-api.paddle.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "0.9.2";
    genVersion = "2.118.1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * v1: Paddle API: REST API for interfacing with Paddle.
 *
 * @remarks
 * The Paddle API lets you create, read, update, and delete information in your Paddle system. Use the Paddle API to integrate Paddle with your app or third-party solutions. See https://developer.paddle.com/ to learn more.
 *
 * @see {@link https://developer.paddle.com/} - Paddle Developer Center
 */
export class Paddle {
    /**
     * Work with addresses for a customer.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/customers#address-object} - Addresses - Paddle Developer Center
     */
    public addresses: Addresses;
    /**
     * Work with adjustments.
     */
    public adjustments: Adjustments;
    /**
     * Work with businesses for a customer.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/customers#business-object} - Businesses - Paddle Developer Center
     */
    public businesses: Businesses;
    /**
     * Work with customers.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/customers} - Customers - Paddle Developer Center
     */
    public customers: Customers;
    /**
     * Work with discounts.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/discounts} - Discounts - Paddle Developer Center
     */
    public discounts: Discounts;
    /**
     * Work with events and the event stream.
     */
    public events: Events;
    /**
     * Get Paddle IP addresses.
     */
    public ipAddresses: IPAddresses;
    /**
     * Work with invoices.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/invoices} - Invoices - Paddle Developer Center
     */
    public invoices: Invoices;
    /**
     * Work with notifications and notification settings.
     */
    public notifications: Notifications;
    /**
     * Work with subscriptions.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/subscriptions} - Subscriptions - Paddle Developer Center
     */
    public subscriptions: Subscriptions;
    /**
     * Work with transactions.
     *
     * @see {@link https://paddle.stoplight.io/docs/next-gen-billing/entities/transactions} - Transactions - Paddle Developer Center
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.addresses = new Addresses(this.sdkConfiguration);
        this.adjustments = new Adjustments(this.sdkConfiguration);
        this.businesses = new Businesses(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.discounts = new Discounts(this.sdkConfiguration);
        this.events = new Events(this.sdkConfiguration);
        this.ipAddresses = new IPAddresses(this.sdkConfiguration);
        this.invoices = new Invoices(this.sdkConfiguration);
        this.notifications = new Notifications(this.sdkConfiguration);
        this.subscriptions = new Subscriptions(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
