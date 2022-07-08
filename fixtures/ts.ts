export default function ({ a, b }: { a: number; b: number }) {
  return a + b;
}

export const array = [1, 2];

export const array2 = [1, 2, 3];

interface Foo {
  foo: (s: string) => void;
  bar: () => void;
}

let foo: Foo | undefined;

const x = {};

export const b = { ...x };

console.log(foo);
