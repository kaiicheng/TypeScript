// function

// Function Declaration
function sum(x, y) {
    return x + y;
}

// Function Expression
let mySum = function (x, y) {
    return x + y;
};

// declare type of input and output
function sum2(x: number, y: number): number {
    return x + y;
}

// // error
// // index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
// function sum3(x: number, y: number): number {
//     return x + y;
// }
// sum(1, 2, 3);

// // error
// // index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
// function sum4(x: number, y: number): number {
//     return x + y;
// }
// sum(1);



// Function Expression
let mySum2 = function (x: number, y: number): number {
    return x + y;
};

// equal to
let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};



// interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}


// parameter use ?
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// // error
// // index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.
// function buildName(firstName?: string, lastName: string) {
//     if (firstName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return lastName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName(undefined, 'Tom');



// default parameter
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName('Tom', 'Cat');
let tom2 = buildName('Tom');

function buildName3(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat3 = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');



// rest parameter
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

function push2(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a2 = [];
push(a, 1, 2, 3);



// overload to take different types of parameters
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// define separate function to be more accurate
function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}