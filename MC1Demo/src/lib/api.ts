import { oauth, net } from 'react-native-force';
import { Response } from '../data/Response';
import { Record } from '../data/Record';

function delay(t: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

export const authenticate = () => {
  return new Promise<Record[]>((resolve, reject) => {
    oauth.getAuthCredentials(
      () => {
        resolve(fetchData());
      }, // already logged in
      () => {
        oauth.authenticate(
          () => {
            resolve(fetchData());
          },
          (error) => reject(error)
        );
      }
    );
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
