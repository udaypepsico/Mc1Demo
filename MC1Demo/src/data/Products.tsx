import { Attribute } from "./Record";

const pepsi_1_5LImage = require('../assets/img/Pepsi_1.5L.png');
const pepsi_500mlImage = require('../assets/img/Pepsi_500ml.png');
const robinsons_500mlImage = require('../assets/img/Robinsons_Real_Fruit_Raspberry_and_Apple_500ml.png');
const pepsiMax_500mlImage = require('../assets/img/Pepsi_Max_500ml.png');
const Seven_Up_1_5LImage = require('../assets/img/7UP_Zero_1.5L.png');
const Lipton_Peach_500mlImage = require('../assets/img/Lipton_Peach_500ml.png');
const Tango_Orange_1_5LImage = require('../assets/img/Tango_Orange_1.5L.png');
const Tango_Orange_500mlImage = require('../assets/img/Tango_Orange_500ml.png');
const Ballygowan_Water_500mlImage = require('../assets/img/Ballygowan_Water_500ml.png');
const pepsiMax_1_5LImage = require('../assets/img/Pepsi_Max_1.5L.png');
const pepsiMax_cherry_1_5LImage = require('../assets/img/Pepsi_Max_Cherry_1.5L.png');
const pepsiMax_cherry_500mlImage = require('../assets/img/Pepsi_Max_Cherry_500ml.png');

export const imageArrays = [
  pepsi_1_5LImage,
  pepsi_500mlImage,
  robinsons_500mlImage,
  pepsiMax_500mlImage,
  Seven_Up_1_5LImage,
  Lipton_Peach_500mlImage,
  Tango_Orange_1_5LImage,
  Tango_Orange_500mlImage,
  Ballygowan_Water_500mlImage,
  pepsiMax_1_5LImage,
  pepsiMax_cherry_1_5LImage,
  pepsiMax_cherry_500mlImage,
];

export interface ProductsType {
  Id: string;
  imageSource?: any;
  productWeight?: string;
  productName?: string;
  productCode?: string;
  productId?: string;
  productPrice?: number;
  productSuggestedQuantity?: number;
  productQuantity?: number;
  Name?:string;
  ProductCode?:string;
  Pack__c?:string;
  Description?:string;
  Family?:string;
  DisplayUrl?:string;
  StockKeepingUnit?:string;
  Brand_Group__c?:string;
  Brand_Value__c?:string;
  Brand__c?:string;
  attributes?: Attribute;
}
