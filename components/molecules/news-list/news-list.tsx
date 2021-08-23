import {FunctionComponent} from 'react';
import {NewsListPropsInterface} from './news-list.interface';

const NewsList: FunctionComponent<NewsListPropsInterface> = ({items}) => {
  return (
    <ul className='bg-turquoise w-full p-6'>
      {items.map((item, i) => (
        <li
          key={i}
          className='relative flex flex-col bg-red rounded-3xl overflow-hidden mb-5'>
          <div className='w-full bg-red text-offWhite font-bold p-2'>
            <span className='text-20'>{i + 1}.</span>
            <h2 className='inline ml-1.5 text-20'>{item.title}</h2>
          </div>
          <div className='flex flex-row m-2 rounded-2xl overflow-hidden text-dark'>
            {item.urlToImage ? (
              <img
                src={item.urlToImage}
                alt={item.title}
                className='md:w-1/3 lg:w-1/4'
              />
            ) : null}
            <div className='flex-grow bg-turquoise p-2 font-bold'>
              {item.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
