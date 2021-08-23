import {FunctionComponent} from 'react';
import NewsItem from '../../atoms/news-item/news-item';
import {NewsListPropsInterface} from './news-list.interface';

const NewsList: FunctionComponent<NewsListPropsInterface> = ({items}) => {


  return (
    <ul className='bg-turquoise w-full p-6'>
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
