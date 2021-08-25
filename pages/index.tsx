import React, {FunctionComponent} from 'react';
import {GetServerSideProps} from 'next';
import countryData from '../mock-data/countries.json';
import {HomePagePropsInterface} from '../interfaces/page.interface';
import PageLayout from '../components/layout/layout';
import CountryCard from '../components/atoms/country-card/country-card';

const Home: FunctionComponent<HomePagePropsInterface> = ({countries}) => {
  return (
    <PageLayout>
      <React.Fragment>
        <h1 className='text-dark font-bold text-24 mb-8'>
          Select a country to get the news from
        </h1>
        <ul className='relative sm:flex sm:flex-col md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 bg-turquoise p-10'>
          {countries.map((country, i) => (
            <li key={i}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  /** the list of countries which news can be fetched for
   * this would be an API fetch normally - but just mock data in this instance.
   */
  const data = countryData;
  return {
    props: data,
  };
};

export default Home;
