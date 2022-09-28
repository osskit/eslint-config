export default function ({ a, b }) {
  return a + b;
}

export const asyncCalc = async ({ a, b }) => a + b;

export const array = [1, 2];

export const array2 = [1, 2, 3];

const x = {};
export const b = { ...x };

const flag = true;
export const negation = !!flag;

export const headers = {
  a: 'header1',
  'x-api-data': 'header2',
  'x-b3-something': 'header3',
};
