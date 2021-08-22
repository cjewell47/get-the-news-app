import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { PageLayoutPropsInterface } from './layout.interface';

const PageLayout: FunctionComponent<PageLayoutPropsInterface> = ({ children }) => {
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
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}

export default PageLayout;