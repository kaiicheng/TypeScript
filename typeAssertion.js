// type assertion
// error
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
function getLength(something) {
    return something.length;
}
// // error
// // index.ts(2,19): error TS2339: Property 'length' does not exist on type 'string | number'.
// //   Property 'length' does not exist on type 'number'.
// // index.ts(3,26): error TS2339: Property 'length' does not exist on type 'string | number'.
// //   Property 'length' does not exist on type 'number'.
// function getLength2(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }
// not sure the type of input
function getLength3(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// // error
// // index.ts(2,10): error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
// //   Type 'number' is not comparable to type 'boolean'.
// function toBoolean(something: string | number): boolean {
//     return <boolean>something;
// }
