import React from 'react';
import Head from 'next/head';


const Home = () => {
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

export default Home;
