/** interface for the country items  */
export interface CountryInterface {
  /** name of the country */
  name: string;
  /** two letter country code, corresponds with news api code */
  code: string;
  /** flag image for this country */
  image: ImageInterface;
}

/** basic image object interface (alt text and src)*/
export interface ImageInterface {
  /** alt text */
  alt: string;
  /** src for the image */
  src: string;
}

/** Interface for news article object fetched from top news API */
export interface NewsArticleInterface {
  source: {
    id: string;
    name: string;
  }
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

/** type for News API response */
export type NewsResponseInterface = {
  status: 'ok';
  totalResults: number;
  articles: NewsArticleInterface[]
}

/** type for response from News API if there's an error */
export type NewsResponseErrorInterface = {
  status: 'error';
  code: string;
  message: string;
}