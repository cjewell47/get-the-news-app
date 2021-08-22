import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import data from '../mock-data/countries.json';


const Home = ({ countries }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { countries } = data;
  return {
    props: data
  };
}

export default Home;
