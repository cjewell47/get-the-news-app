import { GetServerSideProps } from 'next';
import React, { FunctionComponent } from 'react';
import PageLayout from '../components/layout/layout';
import { Countryterface, NewsArticleInterface, NewsResponseErrorInterface, NewsResponseInterface } from '../interfaces/data.interface';
import { CountryPagePropsInterface, ErrorInterface } from '../interfaces/page.interface';
import countryData from '../mock-data/countries.json';




const Country: FunctionComponent<CountryPagePropsInterface> = ({ countries, news, error }) => {
  
  return (
    <PageLayout>
      <h1>Country</h1>
    </PageLayout>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps = async (context) => {  
  /** the list of countries which news can be fetched for */
  const { countries } = countryData;
  /** The country code from the url */
  const code = context?.query?.country;
  /** country which corresponds to this url */
  const thisCountry: Countryterface = countries.find(country => country.code === code);
  /** amount of news items to fetch */
  const items = 5;
  /** API key - should be stored in env file */
  const key = 'af755955979b4233ad86d8088b1e6a6f';
  /** The news stories for this country */
  let news: NewsArticleInterface[];
  /** Has there been an error? */
  let error: ErrorInterface = {error: false};


  if (!!thisCountry) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${key}&pageSize=${items}`);
    const newsResults: NewsResponseInterface | NewsResponseErrorInterface = await res.json();

    if (newsResults.status === 'ok') {
      news = newsResults.articles
    } else {
      // there was an error fetching news stories from the API
      error = {error: true, message: 'There\'s been an error retrieving news stories. Please try again later.'};
    }
  } else {
    // if there the country code does not correspond to a country on our list, then return an error
    error =  {error: true, message: 'It looks like we don\'t serve news stories for country.'};
  }

  // if news remains unassigned then set to an empty array
  news ||= [];

  const data = {
    countries, news, error
  }
  return {
    props: data,
  };
};

