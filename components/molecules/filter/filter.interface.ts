export interface FilterOptionsInterface {
  category: string;
  options: string[];
}

export interface FilterInterfaceProps {
  update: Function;
  options: FilterOptionsInterface;
}

