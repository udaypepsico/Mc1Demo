import { t } from "i18next";

export interface DateContainerType {
  WeekDay: string;
  DateString: string;
  DateFormatString?: string;
}
export const increamentalValue = 10;
export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const descriptionValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Description cannot be empty.';

  return '';
};

export const phoneValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Phone cannot be empty.';

  return '';
};

export const generateDateTime = (
  type: string,
  duration: number
): DateContainerType[] => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const twoDigit = (n: number) => {
    return n > 9 ? n : '0' + n;
  }
  let today = new Date();
  let arrayValue: DateContainerType[] = [];
  if (type === 'Past') {
    for (let i = 1; i < duration + 1; i++) {
      let priorDate = new Date(new Date().setDate(today.getDate() - i));
      let mm = twoDigit(priorDate.getMonth() + 1);
      let dd = twoDigit(priorDate.getDate());
      let value: DateContainerType = {
        WeekDay: weekday[priorDate.getDay()],
        DateString: mm + '/' + dd,
        DateFormatString: priorDate.getFullYear() + '/' + mm + '/' + dd
      };
      arrayValue.push(value);
    }

    return arrayValue;
  } else {
    for (let i = 1; i < duration + 1; i++) {
      let priorDate = new Date(new Date().setDate(today.getDate() + i));
      let mm = twoDigit(priorDate.getMonth() + 1);
      let dd = twoDigit(priorDate.getDate());
      let value: DateContainerType = {
        WeekDay: weekday[priorDate.getDay()],
        DateString: mm + '/' + dd,
        DateFormatString: priorDate.getFullYear() + '-' + mm + '-' + dd
      };
      arrayValue.push(value);
    }

    return arrayValue;
  }
};
