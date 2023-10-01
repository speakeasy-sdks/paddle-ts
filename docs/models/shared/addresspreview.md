# AddressPreview

Represents an address entity.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `countryCode`                                                                   | [CountryCode2](../../models/shared/countrycode2.md)                             | :heavy_check_mark:                                                              | Supported two-letter ISO 3166-1 alpha-2 country code.                           |                                                                                 |
| `postalCode`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | ZIP or postal code of this address. Include for more accurate tax calculations. | 11105-1803                                                                      |