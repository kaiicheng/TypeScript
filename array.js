// array
var fibonacci = [1, 1, 2, 3, 5];
// // error
// // Type 'string' is not assignable to type 'number'.
// let fibonacci: number[] = [1, '1', 2, 3, 5];
// // error
// // Argument of type '"8"' is not assignable to parameter of type 'number'.
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');
// array generic
var fibonacci2 = [1, 1, 2, 3, 5];
var fibonacci3 = [1, 1, 2, 3, 5];
// // Array-like Object
// // Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
// function sum() {
//     let args: number[] = arguments;
// }
function sum() {
    var args = arguments;
}
function sum2() {
    var args = arguments;
}
// any with array
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
