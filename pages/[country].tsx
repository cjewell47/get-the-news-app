import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import PageLayout from '../components/layout/layout';
import NewsList from '../components/molecules/news-list/news-list';
import { CountryInterface, NewsArticleInterface, NewsResponseErrorInterface, NewsResponseInterface } from '../interfaces/data.interface';
import { CountryPagePropsInterface, ErrorInterface } from '../interfaces/page.interface';
import countryData from '../mock-data/countries.json';

const Country: FunctionComponent<CountryPagePropsInterface> = ({ country, news, error }) => {

  if (error.error) {
    return (<PageLayout>
      <React.Fragment>
        <h1 className='text-dark font-bold text-24 mb-8'>Oh no, there's been an error</h1>
        <h2 className='text-red text-18'>{error.message}</h2>
      </React.Fragment>
    </PageLayout>)
  }

  return (
    <PageLayout>
      <React.Fragment>
        <Link href='/'><a className='any-hover:hover:text-red'>Home</a></Link>
        <h1 className='text-dark font-bold text-24 mb-8'>News from {country.name}</h1>
        <NewsList items={news} />
      </React.Fragment>
    </PageLayout>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps = async (context) => {  
  /** the list of countries which news can be fetched for
   * this would be an API fetch normally - but just mock data in this instance.
   */
  const { countries } = countryData;
  /** The country code from the url */
  const code = context?.query?.country;
  /** amount of news items to fetch */
  const items = 10;
  /** API key */
  const key = process.env.NEWS_API_KEY;
  /** country which corresponds to this url */
  let thisCountry: CountryInterface | null = countries.find(country => country.code === code);
  /** The news stories for this country */
  let news: NewsArticleInterface[];
  /** Has there been an error? */
  let error: ErrorInterface = {error: false};

  // if the url's country code corresponds to one the countries that we serve news for then proceed.
  if (!!thisCountry) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${key}&pageSize=${items}`);
    /** response from news API as json */
    const newsResults: NewsResponseInterface | NewsResponseErrorInterface = await res.json();

    if (newsResults.status === 'ok') {
      news = newsResults.articles
    } else {
      // there was an error fetching news stories from the API
      error = {error: true, message: 'There\'s been an error retrieving news stories. Please try again later.'};
    }
  } else {
    // assigned thisCountry as null rather than undefined, 
    // so it can be passed as a prop and the error page can be served
    thisCountry ||= null;
    // if there the country code does not correspond to a country on our list, then return an error
    error =  {error: true, message: 'It looks like we don\'t serve news stories for country.'};
  }

  // if news remains unassigned then set to an empty array
  news ||= [];

  const data = {
    country: thisCountry, news, error
  }
  return {
    props: data,
  };
};

