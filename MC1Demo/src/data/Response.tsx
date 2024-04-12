import { Record } from '../data/Record';
import { ProductsType } from './Products';

export interface Response {
  totalSize: number;
  records?: Record[];
}

export interface ProductsResponse {
  totalSize: number;
  records?:ProductsType[];
}
