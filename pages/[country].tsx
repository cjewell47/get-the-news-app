import { GetServerSideProps } from 'next';
import React, { FunctionComponent } from 'react';
import PageLayout from '../components/layout/layout';
import { CountryListInterface } from '../interfaces/data.interface';
import { CountryPagePropsInterface } from '../interfaces/page.interface';
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
  const thisCountry: CountryListInterface = countries.find(country => country.code === code);
  /** amount of news items to fetch */
  const items = 5;
  /** API key - should be stored in env file */
  const key = 'af755955979b4233ad86d8088b1e6a6f';
  /** The news stories for this country */
  let news;
  /** Has there been an error? */
  let error = false;


  if (!!thisCountry) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${key}&pageSize=${items}`);
    const newsResults = await res.json();
    console.log('news', newsResults);
    if (newsResults.status === 'ok') {
      news = newsResults.articles
    }
  } else {
    console.log('nope');
    // if there the country code does not correspond to a country on our list, then return an error
    error = true;
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

