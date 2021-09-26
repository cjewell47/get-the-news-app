import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Country from '../pages/[country]';
import countryData from '../mock-data/countries.json';
import newsData from '../mock-data/news.json';

describe('Country', () => {
  const country = countryData.countries[0];
  const error = {error: false};
  const news = newsData;

  it('renders a heading', () => {
    const {container} = render(
      <Country error={error} news={news} country={country} />,
    );

    const heading = container.querySelector('h1');

    expect(heading).toBeInTheDocument();
  });

  it('renders a list of 10 stories', () => {
    const {container} = render(
      <Country error={error} news={news} country={country} />,
    );

    const articles = container.querySelectorAll('li');
    const length = news.length;
    expect(articles).toHaveLength(length);
  });
});
