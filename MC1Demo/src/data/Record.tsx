export interface Record {
  Index: number;
  Id: string;
  Name: string;
  Description: string;
  IconURL__c: string;
  Phone: string;
  ShippingCity: string;
  ShippingCountry: string;
  ShippingPostalCode: string;
  ShippingState: string;
  ShippingStreet: string;
  WorkOrders: number;
  attributes?: Attribute;
  Iconbase64: string;
}

interface Attribute {
  type: string;
  url: string;
}