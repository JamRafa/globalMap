export interface ICountryLocation {
  name: {
    common?: string;
    official?: string;
    nativeName?: {
      [key: string]: {
        official?: string;
        common?: string;
      };
    };
  };
  position: {
    lat: number;
    lng: number;
  };
  flag?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  languages?: {
    [key: string]: string;
  };
  capital?: string[];
  region?: string;
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  population?: number;
  translations?: {
    [key: string]: {
      official?: string;
      common?: string;
    };
  };
}

export interface ICountryData {
  name: {
    common?: string;
    official?: string;
    nativeName?: {
      [key: string]: {
        official?: string;
        common?: string;
      };
    };
  };
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: {
    [key: string]: {
      name?: string;
      symbol?: string;
    };
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official?: string;
      common?: string;
    };
  };
  latlng: number[];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: {
    eng?: {
      f?: string;
      m?: string;
    };
    fra?: {
      f?: string;
      m?: string;
    };
  };
  flag?: string;
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population?: number;
  gini?: {
    [key: string]: number;
  };
  fifa?: string;
  car?: {
    signs?: string[];
    side?: string;
  };
  timezones?: string[];
  continents?: string[];
  flags?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  startOfWeek?: string;
  capitalInfo?: {
    latlng?: number[];
  };
  postalCode?: {
    format?: string;
    regex?: string;
  };
}

export interface IAllPossibleCountryData {
  address_components: [{
    long_name?: string;
    short_name: string;
    types?: string[];
  }];
  formatted_address?: string;
  geometry?: [{}];
  place_id?: string;
  types?: string[];
}
