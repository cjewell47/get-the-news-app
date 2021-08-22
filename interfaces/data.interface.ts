export interface CountryListInterface {
  /** name of the country */
  name: string;
  /** two letter country code, corresponds with news api code */
  code: string;
  /** flag image for this country */
  image: ImageInterface;
}

export interface ImageInterface {
  /** alt text */
  alt: string;
  /** src for the image */
  src: string;
}