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
export interface Account {
  attributes?: Attribute;
  ShippingCity: string;
  Phone: string;
  ShippingState: string;
  Name: string;
  ShippingStreet: string;
  ShippingPostalCode: string;
  PhotoUrl: string;
  ShippingCountry: string;
  Description: string;

}
export interface Visits {
  Id: string;
  AccountId?: any;
  Account?: Account;
  ActualVisitStartTime?: string;
  ActualVisitEndTime?: string;
  attributes?: Attribute;
}

