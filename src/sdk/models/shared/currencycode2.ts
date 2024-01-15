/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Supported three-letter ISO 4217 currency code.
 */
export enum CurrencyCode2 {
    Ars = "ARS",
    Aud = "AUD",
    Brl = "BRL",
    Cad = "CAD",
    Chf = "CHF",
    Cny = "CNY",
    Czk = "CZK",
    Dkk = "DKK",
    Eur = "EUR",
    Gbp = "GBP",
    Hkd = "HKD",
    Huf = "HUF",
    Ils = "ILS",
    Inr = "INR",
    Jpy = "JPY",
    Krw = "KRW",
    Mxn = "MXN",
    Nok = "NOK",
    Nzd = "NZD",
    Pln = "PLN",
    Rub = "RUB",
    Sek = "SEK",
    Sgd = "SGD",
    Thb = "THB",
    Try = "TRY",
    Twd = "TWD",
    Uah = "UAH",
    Usd = "USD",
    Zar = "ZAR",
}

/** @internal */
export const CurrencyCode2$ = z.nativeEnum(CurrencyCode2);
