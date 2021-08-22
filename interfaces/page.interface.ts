import { CountryListInterface } from './data.interface';

export interface HomePagePropsInterface {
  /** The list of countries which news is served for */
  countries: CountryListInterface[];
}

export interface CountryPagePropsInterface {
  /** The list of countries which news is served for */
  countries: CountryListInterface[];
  /** The top news headlines for a particular country */
  news: any[];
  /** Was there an error on this page  */
  error: boolean;
}

