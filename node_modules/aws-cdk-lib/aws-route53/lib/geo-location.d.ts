/**
 * Routing based on geographical location.
 */
export declare class GeoLocation {
    readonly continentCode: Continent | undefined;
    readonly countryCode: string | undefined;
    readonly subdivisionCode: string | undefined;
    /**
     * Geolocation resource record based on continent code.
     * @param continentCode Continent.
     * @returns Continent-based geolocation record
     */
    static continent(continentCode: Continent): GeoLocation;
    /**
     * Geolocation resource record based on country code.
     * @param countryCode Two-letter, uppercase country code for the country.
     * See ISO 3166-1-alpha-2 code on the *International Organization for Standardization* website
     * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html#Route53-Type-GeoLocation-CountryCode
     * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     * @returns Country-based geolocation record
     */
    static country(countryCode: string): GeoLocation;
    /**
     * Geolocation resource record based on subdivision code (e.g. state of the United States).
     * @param subdivisionCode Code of the subdivision (e.g. state of the United States)
     * @param countryCode Country code (ISO 3166-1-alpha-2) of this record, by default US (United States).
     * @see https://pe.usps.com/text/pub28/28apb.htm
     * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html#Route53-Type-GeoLocation-SubdivisionCode
     */
    static subdivision(subdivisionCode: string, countryCode?: string): GeoLocation;
    /**
     * Default (wildcard) routing record if no specific geolocation record is found.
     * @returns Wildcard routing record
     */
    static default(): GeoLocation;
    private static COUNTRY_REGEX;
    private static COUNTRY_FOR_SUBDIVISION_REGEX;
    private static SUBDIVISION_REGEX;
    private static validateCountry;
    private static validateCountryForSubdivision;
    private static validateSubDivision;
    private constructor();
}
/**
 * Continents for geolocation routing.
 */
export declare enum Continent {
    /**
     * Africa
    */
    AFRICA = "AF",
    /**
     * Antarctica
     */
    ANTARCTICA = "AN",
    /**
     * Asia
     */
    ASIA = "AS",
    /**
     * Europe
     */
    EUROPE = "EU",
    /**
     * Oceania
     */
    OCEANIA = "OC",
    /**
     * North America
     */
    NORTH_AMERICA = "NA",
    /**
     * South America
     */
    SOUTH_AMERICA = "SA"
}
