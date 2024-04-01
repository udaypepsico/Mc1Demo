import { CustomerRecord, Record } from '../data/Record';

export interface Response {
    totalSize:number;
    records?: CustomerRecord[];
  }