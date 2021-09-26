import {FunctionComponent} from 'react';
import {FilterInterfaceProps, FilterOptionInterface} from './filter.interface';

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
      <label key={i} htmlFor={o.name} className={``}>
        <input
          id={o.name}
          type='checkbox'
          checked={o.checked}
          onChange={() => updateFilterOptions(o)}
        />
        <p>{o.name}</p>
      </label>
    );
  };

  return (
    <div>
      <h4>Sources</h4>
      {filterOptions.map((o, i) => label(o, i))}
    </div>
  );
};

export default Filter;
