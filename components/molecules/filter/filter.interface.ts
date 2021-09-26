export interface FilterOptionInterface {
  name: string;
  checked: boolean;
}

export interface FilterInterfaceProps {
  update: Function;
  filterOptions: FilterOptionInterface[];
}

