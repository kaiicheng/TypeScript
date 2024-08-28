// function
// Function Declaration
function sum(x, y) {
    return x + y;
}
// Function Expression
var mySum = function (x, y) {
    return x + y;
};
// declare type of input and output
function sum2(x, y) {
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
var mySum2 = function (x, y) {
    return x + y;
};
// equal to
var mySum3 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// parameter use ?
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
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
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat2 = buildName('Tom', 'Cat');
var tom2 = buildName('Tom');
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat3 = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
// rest parameter
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function push2(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a2 = [];
push(a, 1, 2, 3);
// overload to take different types of parameters
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function reverse2(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
