import React, {FunctionComponent} from 'react';
import {CountryCardPropsInterface} from './country-card.interface';
import Link from 'next/link';
import styles from './country-card.module.scss';

const CountryCard: FunctionComponent<CountryCardPropsInterface> = ({
  country,
}) => {
  return (
    <div className='relative group rounded-lg p-1'>
      <div className={`${styles.flag__container} overflow-hidden md:h-32 rounded-lg`}>
        <img
          alt={country.image.alt}
          src={country.image.src}
          loading='lazy'
          className='object-cover w-full h-full transform any-hover:group-hover:scale-110 transition'
        />
      </div>
      <div className=''>
        <Link href={`/${country.code}`}>
          <a className={`${styles.country__link} text-20 any-hover:group-hover:text-red transition-colors`}>{country.name}</a>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
