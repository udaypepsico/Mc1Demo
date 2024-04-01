const pepsi_1_5LImage = require('../assets/img/Pepsi_1.5L.png');
const robinsons_500mlImage = require('../assets/img/Robinsons_Real_Fruit_Raspberry_and_Apple_500ml.png');
const pepsiMax_500mlImage = require('../assets/img/Pepsi_Max_500ml.png');
const Seven_Up_1_5LImage = require('../assets/img/7UP_Zero_1.5L.png');
const Lipton_Peach_500mlImage = require('../assets/img/Lipton_Peach_500ml.png');
const Tango_Orange_1_5LImage = require('../assets/img/Tango_Orange_1.5L.png');

export interface ProductsType {
  Id: number
  imageSource: any
  productWeight: string
  productName: string
  productCode: string,
  productId: string
  productPrice: number
  productSuggestedQuantity: number
  productQuantity: number
}

export const products: ProductsType[] = [
  {
    Id: 1,
    imageSource: pepsi_1_5LImage,
    productWeight: '12oz',
    productName: 'Pepsi',
    productCode: 'PEP124',
    productId: '012089020721',
    productPrice: 12.37,
    productSuggestedQuantity: 30,
    productQuantity: 10,
  },
  {
    Id: 2,
    imageSource: robinsons_500mlImage,
    productWeight: '12oz',
    productName: 'Robinsons Real Fruit',
    productCode: 'PEP125',
    productId: '012089020722',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 20,
  },
  {
    Id: 3,
    imageSource: pepsiMax_500mlImage,
    productWeight: '12oz',
    productName: 'Pepsi Max',
    productCode: 'PEP126',
    productId: '012089020723',
    productPrice: 14.50,
    productSuggestedQuantity: 40,
    productQuantity: 15,
  },
  {
    Id: 4,
    imageSource: Seven_Up_1_5LImage,
    productWeight: '12oz',
    productName: '7UP Zero',
    productCode: 'PEP127',
    productId: '012089020724',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 10,
  },
  {
    Id: 5,
    imageSource: Lipton_Peach_500mlImage,
    productWeight: '12oz',
    productName: 'Lipton Peach',
    productCode: 'PEP128',
    productId: '012089020725',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 5,
  },
  {
    Id: 6,
    imageSource: Tango_Orange_1_5LImage,
    productWeight: '12oz',
    productName: 'Tango Orange',
    productCode: 'PEP129',
    productId: '012089020726',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 10,
  },
  {
    Id: 7,
    imageSource: Seven_Up_1_5LImage,
    productWeight: '12oz',
    productName: '7UP Zero',
    productCode: 'PEP130',
    productId: '012089020724',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 22,
  },
  {
    Id: 8,
    imageSource: Lipton_Peach_500mlImage,
    productWeight: '12oz',
    productName: 'Lipton Peach',
    productCode: 'PEP131',
    productId: '012089020725',
    productPrice: 14.50,
    productSuggestedQuantity: 50,
    productQuantity: 2,
  },
  {
    Id: 9,
    imageSource: Tango_Orange_1_5LImage,
    productWeight: '12oz',
    productName: 'Tango Orange',
    productCode: 'PEP132',
    productId: '012089020726',
    productPrice: 24.50,
    productSuggestedQuantity: 150,
    productQuantity: 30,
  },
];