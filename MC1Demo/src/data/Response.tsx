import { Opportunity, OpportunityLineItem, Record, Visits } from '../data/Record';
import { ProductsType } from './Products';

export interface Response {
  totalSize: number;
  records?: Record[];
}
export interface VisitResponse {
  totalSize: number;
  records?: Visits[];
}
export interface ProductsResponse {
  totalSize: number;
  records?:ProductsType[];
}
export interface OpportunityResponse {
  totalSize: number;
  records?:Opportunity[];
}
export interface OpportunityLineItemResponse {
  totalSize: number;
  records?:OpportunityLineItem[];
}
