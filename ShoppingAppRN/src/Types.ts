import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

export type Order = {
  items: Product[]; //Rename variable
  user: string;
  address: string;
  deliveryTime: number;
};
