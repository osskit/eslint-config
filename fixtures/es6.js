const add = function ({ a, b }) {
  return a + b;
};

export default add;

export const asyncCalc = async ({ a, b }) => a + b;

export const array = [1, 2];

export const array2 = [1, 2, 3];

const x = {};

export const b = { ...x };

export const parsedNumberDecimal = Number.parseInt('777');
export const parsedNumberQuinary = Number.parseInt('11102', 5);

export const headers = {
  camelCaseHeader: 'header1',
  'x-api-data': 'header2',
  'x-b3-something': 'header3',
  'Content-Type': 'application/json',
};

let y;

if (y === undefined) {
  console.log('y is undefined');
}

export const getValue = () => {
  const y = 'shadow var name';

  return y;
};
