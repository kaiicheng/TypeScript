// // erro
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// any
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');
// default any if type is not declared
var something;
something = 'seven';
something = 7;
something.setName('Tom');
// equal to
var something2;
something2 = 'seven';
something2 = 7;
something2.setName('Tom');
