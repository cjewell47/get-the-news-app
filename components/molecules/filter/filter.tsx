import {FunctionComponent} from 'react';
import {FilterInterfaceProps, FilterOptionInterface} from './filter.interface';
import styles from './filter.module.scss';

const Filter: FunctionComponent<FilterInterfaceProps> = ({
  filterOptions,
  update,
}) => {

  const updateFilterOptions = (option: FilterOptionInterface) => {
    const updatedOptions = filterOptions.map((f, i) => {
      if (f.name === option.name) {
        return {
          ...f,
          checked: !f.checked
        }
      } else {
        return f
      }
    });
    update(updatedOptions);
  }

  const label = (o: FilterOptionInterface, i: number) => {
    return (
      <label key={i} htmlFor={o.name} className={`text-dark relative flex items-center text-18 text-left group any-hover:hover:text-red cursor-pointer transition`}>
        <input
          className={`${styles.checkbox} absolute cursor-pointer opacity-0 w-0 h-0`}
          id={o.name}
          type='checkbox'
          checked={o.checked}
          onChange={() => updateFilterOptions(o)}
        />
        <span className={`${styles.checkmark} relative h-5 w-5 bg-white rounded-sm border-2 border-solid border-dark flex-shrink-0 any-hover:group-hover:border-red transition-colors`}/>
        <p className={`${styles.checkbox__label} any-hover:group-hover:underline ml-2`}>{o.name}</p>
      </label>
    );
  };

  return (
    <div>
      <h4 className='text-dark font-bold text-18 mb-2'>Sources</h4>
      {filterOptions.map((o, i) => label(o, i))}
    </div>
  );
};

export default Filter;
