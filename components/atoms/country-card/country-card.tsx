import React, {FunctionComponent} from 'react';
import {CountryCardPropsInterface} from './country-card.interface';
import Link from 'next/link';
import styles from './country-card.module.scss';

const CountryCard: FunctionComponent<CountryCardPropsInterface> = ({
  country,
}) => {
  return (
    <div className='relative group rounded-lg'>
      <img
        alt={country.image.alt}
        src={country.image.src}
        loading='lazy'
        className={`${styles.flag__container} md:h-32 w-full rounded-lg any-hover:group-hover:shadow-md transition`}
      />
      <Link href={`/${country.code}`}>
        <a
          className={`${styles.country__link} font-bold text-20 any-hover:group-hover:text-red transition-colors`}>
          {country.name}
        </a>
      </Link>
    </div>
  );
};

export default CountryCard;
