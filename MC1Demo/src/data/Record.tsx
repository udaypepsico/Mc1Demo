export interface Record {
  Index: number;
  Id: string;
  Name: string;
  Description: string;
  PhotoUrl: string;
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

export interface Attribute {
  type: string;
  url: string;
}