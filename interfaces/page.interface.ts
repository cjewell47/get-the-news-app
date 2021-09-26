import { CountryInterface, NewsArticleInterface } from './data.interface';

export interface HomePagePropsInterface {
  /** The list of countries which news is served for */
  countries: CountryInterface[];
}

export interface CountryPagePropsInterface {
  /** The list of countries which news is served for */
  country?: CountryInterface;
  /** The top news headlines for a particular country */
  news: NewsArticleInterface[];
  /** Was there an error on this page  */
  error: ErrorInterface;
}

export interface ErrorInterface {
  /** has there been an error? */
  error: boolean;
  /** what error message to show - optional */
  message?: string;
}

