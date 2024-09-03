// interfaces
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};



// // index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
// //   Property 'age' is missing in type '{ name: string; }'.
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom'
// };



// // index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
// //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };



// optional attribute
interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2 = {
    name: 'Tom'
};

interface Person3 {
    name: string;
    age?: number;
}

let tom3: Person3 = {
    name: 'Tom',
    age: 25
};



// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
// interface Person4 {
//     name: string;
//     age?: number;
// }

// let tom: Person4 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };



// any attribute
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom4: Person4 = {
    name: 'Tom',
    gender: 'male'
};



// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
// interface Person5 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom5: Person5 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };



// read-only
// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
interface Person6 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom6: Person6 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// tom.id = 9527;  // error



// // error
// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.

// interface Person7 {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person7 = {
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 89757;

