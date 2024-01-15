/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Supported three-letter ISO 4217 currency code for payouts from Paddle.
 */
export enum CurrencyCodePayout {
    Aud = "AUD",
    Cad = "CAD",
    Chf = "CHF",
    Cny = "CNY",
    Czk = "CZK",
    Dkk = "DKK",
    Eur = "EUR",
    Gbp = "GBP",
    Huf = "HUF",
    Pln = "PLN",
    Sek = "SEK",
    Usd = "USD",
    Zar = "ZAR",
}

/** @internal */
export const CurrencyCodePayout$ = z.nativeEnum(CurrencyCodePayout);
