import { oauth, net } from 'react-native-force';
import { ProductsResponse, Response, VisitResponse } from '../data/Response';
import { Record, Visits } from '../data/Record';
import ReactNativeBlobUtil, { FetchBlobResponse } from 'react-native-blob-util';
import products from '../data/products.json';
import { ProductsType, imageArrays } from '../data/Products';

function delay(t: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

export interface selectedDateStringType {
  selectedDate: Date;
}

export interface selectedVisitType {
  visitType: string;
}

export interface selectedDate {
  selectedDate: Date;
}

export interface Credentials {
  refreshToken: string;
  accessToken: string;
  instanceUrl: string;
}

export const getUserCredentials = async (): Promise<Credentials> => {
  const response = await getUserToken();
  return response;
};

const getUserToken = () => {
  return new Promise<Credentials>((resolve, reject) => {
    try {
      oauth.getAuthCredentials(
        (UserAccount) => {
          resolve({
            refreshToken: UserAccount.refreshToken,
            accessToken: UserAccount.accessToken,
            instanceUrl: UserAccount.instanceUrl,
          });
        },
        () => {
          oauth.authenticate(
            (UserAccount) => {
              resolve({
                refreshToken: UserAccount.refreshToken,
                accessToken: UserAccount.accessToken,
                instanceUrl: UserAccount.instanceUrl,
              });
            },
            (error) => {
              console.log('Failed to authenticate:' + error);
              reject(error);
            }
          );
        }
      );
    } catch (error) {
      console.log('Failed to authenticate:' + error);
      reject(error);
    }
  });
};

export const fetchData = async (): Promise<Visits[]> => {
  const response = await queryFetchPromise();
  return response;
};

const queryFetchPromise = () => {
  return new Promise<Visits[]>((resolve, reject) => {
    net.query(
      'SELECT Id, AccountId, Account.Name, Account.PhotoUrl, Account.Phone, Account.Description, \
      Account.ShippingCity, Account.ShippingCountry, Account.ShippingPostalCode, Account.ShippingState, Account.ShippingStreet, ActualVisitStartTime, ActualVisitEndTime FROM Visit',
      (response: VisitResponse) => {
        resolve(response.records!);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export async function fetchFullProducts() {
  console.log('fetchfullproducts');

  const response = await queryFetchProducts();
  return response;

  return products.map(
    (product: {
      Id: number;
      imageSource: any;
      productWeight: number;
      productName: string;
      productCode: string;
      productId: string;
      productPrice: number;
      productSuggestedQuantity: number;
      initialproductQuantity: number;
    }) => ({
      Id: product.Id,
      imageSource: imageArrays[product.imageSource],
      productWeight: product.productWeight,
      productName: product.productName,
      productCode: product.productCode,
      productId: product.productId,
      productPrice: product.productPrice,
      productSuggestedQuantity: product.productSuggestedQuantity,
      productQuantity: product.initialproductQuantity,
    })
  ) as Promise<ProductsType[]>;
}

const queryFetchProducts = () => {
  return new Promise<Visits[]>((resolve, reject) => {
    net.query(
      'SELECT Id, Name, ProductCode, Pack__c, Description,  Family,DisplayUrl,StockKeepingUnit, \
      Brand_Group__c,Brand_Value__c,Brand__c FROM Product2',
      (result: ProductsResponse) => {
        resolve(result.records!);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const queryFetchVisits = () => {
  return new Promise<ProductsType[]>((resolve, reject) => {
    net.query(
      'SELECT Id, AccountId, Account.Name, ActualVisitStartTime, ActualVisitEndTime FROM Visit',
      (result: any) => {
        resolve(result.records!);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
export async function fetchVisits() {
  const response = await queryFetchVisits();
  return response;
}
export async function fetchProducts() {
  console.log('fetchProducts');
  return products
    .slice(0, 5)
    .map(
      (product: {
        Id: any;
        imageSource: any;
        productWeight: any;
        productName: any;
        productCode: any;
        productId: any;
        productPrice: any;
        productSuggestedQuantity: any;
        initialproductQuantity: any;
      }) => ({
        Id: product.Id,
        imageSource: imageArrays[product.imageSource],
        productWeight: product.productWeight,
        productName: product.productName,
        productCode: product.productCode,
        productId: product.productId,
        productPrice: product.productPrice,
        productSuggestedQuantity: product.productSuggestedQuantity,
        productQuantity: product.initialproductQuantity,
      })
    ) as Promise<ProductsType[]>;
}

export const fetchImage = async (
  access_token: string,
  iconUrl: string
): Promise<string> => {
  try {
    const response: FetchBlobResponse = await ReactNativeBlobUtil.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      // fileCache: true,
    }).fetch(
      'GET',
      // 'https://pbna--sfscoedev.sandbox.file.force.com/sfc/servlet.shepherd/version/download/0688A000001rXNo?asPdf=false&operationContext=CHATTER',
      iconUrl,
      {
        Authorization: 'Bearer ' + access_token,
      }
    );
    return response.data;
  } catch (reason: any) {
    return '';
  }
};

export const setSelectedDate = async (
  selectedDate: Date
): Promise<selectedDateStringType> => {
  return { selectedDate: selectedDate };
};

export const getQueryVisitType = async (): Promise<selectedVisitType> => {
  return { visitType: 'Today' };
};

export const getSelectedDate = async (): Promise<selectedDate> => {
  return { selectedDate: new Date() };
};
