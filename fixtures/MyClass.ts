export default class MyClass {
  private count = 0;

  constructor() {
    console.log('MyClass constructor');
  }

  increment() {
    this.count++;
  }
}
