import { FunctionComponent } from 'react';
import { FilterInterfaceProps } from './filter.interface';

const Filter: FunctionComponent<FilterInterfaceProps> = ({ options, update }) => {
  return (<div>
    <h4>{options.category}</h4>
  </div>);
}

export default Filter;