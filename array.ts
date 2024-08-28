// array
let fibonacci: number[] = [1, 1, 2, 3, 5];

// // error
// // Type 'string' is not assignable to type 'number'.
// let fibonacci: number[] = [1, '1', 2, 3, 5];

// // error
// // Argument of type '"8"' is not assignable to parameter of type 'number'.
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');

// array generic
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// interface to create array
interface NumberArray {
    [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// // Array-like Object
// // Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
// function sum() {
//     let args: number[] = arguments;
// }

function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

function sum2() {
    let args: IArguments = arguments;
}

// IArguments is already defined and is equal to:
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

// any with array
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
