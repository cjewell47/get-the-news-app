import {FunctionComponent} from 'react';
import {CountryCardPropsInterface} from './country-card.interface';

const CountryCard: FunctionComponent<CountryCardPropsInterface> = ({
  country,
}) => {
  return (
    <div className='relative group'>
      <div className='overflow-hidden h-32'>
        <img
          alt={country.image.alt}
          src={country.image.src}
          loading='lazy'
          className='object-cover w-full h-full transform any-hover:group-hover:scale-110 transition'
        />
      </div>
    </div>
  );
};

export default CountryCard;
