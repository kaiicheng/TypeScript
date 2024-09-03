var tom = {
    name: 'Tom',
    age: 25
};
var tom2 = {
    name: 'Tom'
};
var tom3 = {
    name: 'Tom',
    age: 25
};
var tom4 = {
    name: 'Tom',
    gender: 'male'
};
var tom6 = {
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
