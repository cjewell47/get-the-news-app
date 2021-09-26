import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import countryData from '../mock-data/countries.json';



describe('Home', () => {

  
  it('renders a heading', () => {

    const { container } = render(<Home countries={countryData.countries} />)
    
    const heading = container.querySelector('h1')

    expect(heading).toBeInTheDocument()
  })

  it('renders the correct amount of countries', () => {

    const { container } = render(<Home countries={countryData.countries} />)
    
    const images = container.querySelectorAll('li')
    const length = countryData.countries.length
    expect(images).toHaveLength(length)
  })
})