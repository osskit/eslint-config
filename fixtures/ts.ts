import { join } from 'node:path';
import { x } from './module.js';
import MyClass from './MyClass.js';

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

console.log(x);

const object = {};

export const b = { ...object };

export const bar = () => join('bar', 'baz');

console.log(foo);

const a = new MyClass();

console.log(a);
