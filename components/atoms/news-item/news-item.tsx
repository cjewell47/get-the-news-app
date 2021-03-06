import {FunctionComponent, useState} from 'react';
import formatDate from '../../../utilities/format-date';
import {NewsItemPropsInterface} from './news-item.interface';
import styles from './news-item.module.scss';

const NewsItem: FunctionComponent<NewsItemPropsInterface> = ({item}) => {
  /** is the news item expanded to show more text? */
  const [isExpanded, toggleExpand] = useState(false);

  return (
    <li className='relative flex flex-col bg-red rounded-3xl mb-8'>
      <div className='w-full text-offWhite font-bold py-2 px-4'>
        <h2 className='sm:text-18 md:text-20'>{item.title}</h2>
        <div className='font-medium flex sm:flex-col'>
          <a
            href={item.url}
            target='_blank'
            className='underline mr-4 any-hover:hover:no-underline'>
            {item.source.name}
          </a>
          <p>published at: {formatDate(item.publishedAt)}</p>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? styles.expandable : ''
        } md:grid md:grid-cols-4 m-2 bg-turquoise rounded-2xl max-h-0 invisible overflow-hidden text-dark transition-all`}>
        {item.urlToImage ? (
          <img src={item.urlToImage} alt={item.title} className='col-span-1' />
        ) : null}
        <div className={`${styles.description} bg-turquoise px-5 pt-4 pb-2`}>
          <p className='font-bold'>{item.description}</p>
          <p dangerouslySetInnerHTML={{__html: item.content}}></p>
          <a href={item.url} className='mt-3 any-hover:hover:underline mx-auto'>
            Read more
          </a>
        </div>
      </div>
      <button
        onClick={() => toggleExpand(!isExpanded)}
        className='bg-yellow w-8 h-8 -mb-2 rounded-full flex items-center justify-center mx-auto relative cursor-pointer'
        name={isExpanded ? 'close' : 'expand'}>
        <img
          className={`${styles.expand__arrow} h-5 w-5 transition-transform`}
          src='/svgs/arrow.svg'
        />
      </button>
    </li>
  );
};

export default NewsItem;
