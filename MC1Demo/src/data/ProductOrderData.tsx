export const setOrderDataTrend = (): { data: number; date: string }[] =>
  Array.from<number, { data: number; date: string }>(
    new Array(30),
    (val, index) => ({
      data: getRandomInt(100, 10),
      date: `${index}/30`,
    })
  );

export const SetSuggestedOrderDataTrend = (): { data: number; date: string }[] =>
  Array.from<number, { data: number; date: string }>(
    new Array(30),
    (val, index) => ({
      data: getRandomInt(100, 10),
      date: `${index}/30`,
    })
  );

const getRandomInt = (max: number, min: number): number => {
  const rand = Math.floor(Math.random() * max);
  return rand > min ? rand : min;
};

