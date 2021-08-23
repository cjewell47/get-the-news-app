import { NewsArticleInterface } from '../../../interfaces/data.interface';

export interface NewsListPropsInterface {
  /** List of news items to display in this component */
  items: NewsArticleInterface[]
}