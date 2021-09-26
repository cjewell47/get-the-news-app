import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
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

  it('articles should have a headline', () => {
    const {container} = render(
      <Country error={error} news={news} country={country} />,
    );

    const title = news[0].title;

    const heading = screen.getByText(title);
    
    expect(heading).toBeInTheDocument();
  });

  it('renders a list of 8 checkboxes', () => {
    const {container} = render(
      <Country error={error} news={news} country={country} />,
    );

    const filters = container.querySelectorAll('input[type="checkbox"]');
    const length = Array.from(new Set(news.map(n => n.source.name))).length;
    expect(filters).toHaveLength(length);
  });


  it('clicking a checkbox renders only articles with that source', () => {
    const {container} = render(
      <Country error={error} news={news} country={country} />,
    );
    

    const thisSource = news[0].source.name

    fireEvent.click(document.querySelector(`label[for="${thisSource}"]`))

    const articles = container.querySelectorAll('li');
    const length = news.filter(n => n.source.name === thisSource).length;
    expect(articles).toHaveLength(length);
  });

});
