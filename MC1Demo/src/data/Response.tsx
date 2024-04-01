import { Record } from '../data/Record';

export interface Response {
  totalSize: number;
  records?: Record[];
}
