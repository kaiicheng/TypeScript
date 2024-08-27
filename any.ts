// // erro
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// any
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');

// default any if type is not declared
let something;
something = 'seven';
something = 7;

something.setName('Tom');

// equal to
let something2: any;
something2 = 'seven';
something2 = 7;

something2.setName('Tom');