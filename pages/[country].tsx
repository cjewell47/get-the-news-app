import React, { FunctionComponent } from 'react';
import Head from 'next/head';



const Country: FunctionComponent = () => {
  
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
      <h1>Country</h1>
    </React.Fragment>
  );
};


export default Country;
