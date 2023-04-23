import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  category: number;
  price?: number;
  description?: string;
}
