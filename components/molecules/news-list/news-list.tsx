import {FunctionComponent} from 'react';
import {NewsListPropsInterface} from './news-list.interface';

const NewsList: FunctionComponent<NewsListPropsInterface> = ({items}) => {
  /** formatting the date, used for publishedAt date of article
   * @params date - takes the stringified date from the news api
   * @return string of date 'hh:mm - dd/mm/yyyy' or 'hh:mm - Today'
   * */
  const formatDate = (date: string): string => {
    /** publishedAt date of article as Date object */
    const d = new Date(date);
    /** right now as Date object, for purpose of  'is article from today' */
    const now = new Date();
    /** return hour or minute as 2 digit number */
    const addZeroToSingleDigit = (t: number) => {
      // turn number to string (so can check length)
      let tStr = t + '';
      return tStr.length === 1 ? `0${tStr}` : tStr;
    };
    /** what day was this published on, can be either 'Today' or 'dd/mm/yyyy' */
    const day =
      d.getDate() === now.getDate() && d.getMonth() === now.getMonth()
        ? 'Today'
        : `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    /** what time was this article published at? as hh:mm */
    const time = `${addZeroToSingleDigit(d.getHours())}:${addZeroToSingleDigit(
      d.getMinutes(),
    )}`;

    return `${time} - ${day}`;
  };

  return (
    <ul className='bg-turquoise w-full p-6'>
      {items.map((item, i) => (
        <li
          key={i}
          className='relative flex flex-col bg-red rounded-3xl overflow-hidden mb-5'>
          <div className='w-full text-offWhite font-bold p-2'>
            <span className='text-20'>{i + 1}.</span>
            <h2 className='inline ml-1.5 text-20'>{item.title}</h2>
            <div className='font-medium flex'>
              <a href={item.url} target='_blank' className='underline mr-4 any-hover:hover:no-underline'>{item.source.name}</a>
              <p className=''>{formatDate(item.publishedAt)}</p>
            </div>
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
