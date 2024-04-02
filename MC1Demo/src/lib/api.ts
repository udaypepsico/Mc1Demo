import { oauth, net } from 'react-native-force';
import { Response } from '../data/Response';
import { Record } from '../data/Record';
import ReactNativeBlobUtil, { FetchBlobResponse } from 'react-native-blob-util';

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

export const fetchData = async (): Promise<Record[]> => {
  await delay(200 + Math.floor(Math.random() * 2000));
  const response = await queryFetchPromise();
  return response;
};

const queryFetchPromise = () => {
  return new Promise<Record[]>((resolve, reject) => {
    net.query(
      'Select Id,Name,phone,description,IconURL__c,shippingstreet,shippingcity,shippingstate,shippingcountry,shippingpostalcode from Account',
      (response: Response) => {
        resolve(response.records);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export async function fetchProducts(accountId: string) {
  await delay(200 + Math.floor(Math.random() * 2000));
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
    return reason;
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
