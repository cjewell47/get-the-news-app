import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import data from '../mock-data/countries.json';
import { Context } from 'vm';
import { HomePagePropsInterface } from '../interfaces/page.interface';


const Home: FunctionComponent<HomePagePropsInterface> = ({ countries }) => {
  console.log('countries', countries);
  
  return (
    <React.Fragment>
      <Head>
        <link
          rel='preload'
          href='/fonts/avenir-next-bold.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/avenir-next-regular.woff2'
          as='font'
          crossOrigin=''
        />
      </Head>
      <h1>Home</h1>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: Context) => {
  const { countries } = data;
  return {
    props: countries
  };
}

export default Home;
