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

export interface Opportunity {
  CloseDate: any;
  Account: Account;
  AccountId: string;
  Id: string;
  TotalOpportunityQuantity: any;
  LeadSource: any;
  Type: any;
  Probability: any;
  Name: string;
  NextStep: string;
  Description: string;
  ExpectedRevenue: any;
  StageName: string;
  Amount: any;
  attributes?: Attribute;
}

export interface OpportunityLineItem {
  Quantity: any;
  ListPrice: any;
  Id: string;
  Product2Id: string;
  attributes: Attribute;
  ProductCode: string;
  TotalPrice: any;
  Name: string;
  Product2: Attribute;
  OpportunityId: string;
  UnitPrice: any;
  Description: string;
}