import React, {FunctionComponent} from 'react';
import {GetServerSideProps} from 'next';
import countryData from '../mock-data/countries.json';
import {HomePagePropsInterface} from '../interfaces/page.interface';
import PageLayout from '../components/layout/layout';

const Home: FunctionComponent<HomePagePropsInterface> = ({countries}) => {
  console.log('countries', countries);

  return (
    <PageLayout>
      <React.Fragment>
        <h1>Home</h1>
        <ul>
          {countries.map((country, i) => (
            <li key={i}>{country.name}</li>
          ))}
        </ul>
      </React.Fragment>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = countryData;
  return {
    props: data,
  };
};

export default Home;
