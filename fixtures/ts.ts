import { join } from 'node:path';
import { x } from './module.js';
import MyClass from './MyClass.js';

const add = function ({ a, b }: { a: number; b: number }) {
  return a + b;
};

export default add;

export const array = [1, 2];

export const array2 = [1, 2, 3];

interface Foo {
  foo: (s: string) => void;
  bar: () => void;
}

let foo: Foo | undefined;

if (array.length > 0) {
  foo = {
    foo: (s: string) => {
      console.log(s);
    },
    bar: () => {
      console.log('bar');
    },
  };
}

console.log(x);

const object = {
  dog: 'Woof',
  cat: 'Meow',
  horse: 'Neigh',
};

const { dog: _, ...objectWithoutDog } = object;

export const bar = () => join('bar', 'baz');

const a = new MyClass();

console.log(foo, a, objectWithoutDog);

enum Fruit {
  Apple = 'Apple',
  Banana = 'Banana',
}

declare const fruit: Fruit;

switch (fruit) {
  case Fruit.Apple: {
    console.log('an apple');
    break;
  }
  case Fruit.Banana: {
    console.log('a banana');
    break;
  }
}
