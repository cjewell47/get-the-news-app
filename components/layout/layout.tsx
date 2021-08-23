import Head from 'next/head';
import React, {FunctionComponent} from 'react';
import {PageLayoutPropsInterface} from './layout.interface';

const PageLayout: FunctionComponent<PageLayoutPropsInterface> = ({
  children,
}) => {
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
      <main className='bg-offWhite py-16 w-full min-h-screen'>
        <div className='mx-auto sm:w-mobile md:w-tablet-portrait lg:w-tablet-landscape xl:w-desktop-page'>
        {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default PageLayout;
