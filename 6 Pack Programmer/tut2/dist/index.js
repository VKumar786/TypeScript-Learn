"use strict";
let a = 4232;
let str = "vishal";
let check = false;
let nambo;
let fun = "name";
console.log("a :>> ", a);
console.log("name :>> ", str);
console.log("check :>> ", check);
console.log("fun :>> ", fun);
//? Union
let surname;
surname = "123";
surname = 123;
//? function
const func1 = (n, m) => {
    console.log("n,m :>> ", n, m);
    return n * m;
};
const func2 = (n, m) => {
    console.log("n,m :>> ", n, m);
    return String(n * m);
};
console.log("func2(2,4) :>> ", func2(2, 4));
const func3 = (a, b) => {
    return a + b;
};
console.log("func3(2,4) :>> ", func3(2, 4));
//? Array
const arr = [1, 2, 3, 4];
const arr1 = [1, 31, 2, 3]; //* SImilar to generic
const arr2 = new Array(20);
const arr4 = [2, "vivek"];
const arr5 = [1, "vishal"];
//? Tuple
const arr6 = [1, 2, 3];
//? Object
const obj = {
    height: 123,
    weight: 1,
    gender: false,
};
/*
    ? Interface
    * it can be extended that is reason why it is used with classes
*/
const obj1 = {
    height: 123,
    weight: 2,
};
const obj2 = {
    name: "vishal",
    height: 21,
    weight: 5,
};
/*
    ? Optional Value
 */
const obj4 = (a, b, l) => {
    if (typeof l === "undefined")
        return a * b;
    return a * b * l;
};
/*
? Default value
*/
const obj5 = (a, b, l = 10) => {
    return a * b * l;
};
const obj6 = (a, b, l = 10) => {
    return a * b * l;
};
/*
    ? Rest Operation
*/
const f1 = (...rest) => {
    return rest;
};
f1(1, 2, 2, 11, 252, 12312);
const f2 = (...rest) => {
    return rest;
};
f2(1, 2, 2, 11, 252, 12312);
function f3(n) {
    return -1;
}
/*
    ? Function with Object
*/
const getData = (product) => {
    console.log("product :>> ", product);
};
const product1 = {
    name: "hp",
    stock: 99,
    price: 1,
    photo: "i love vishal chin chinese",
    id: "007",
};
getData(product1);
/*
    ? Never Type only in case of Error
*/
const err = new Error();
const errHandler = () => {
    throw new Error();
};
const errHandler1 = () => {
    return new Error();
};
const t1 = "light";
/*
    ? Classes
    * By default public
    * we can access private element of class b/c there is not access modifier in js but can ~ update it
    * In protected, derived class will have public method & private can~ be accessed from children class
*/
class Player {
    constructor(height, weight) {
        this.height = 34;
        this.weight = 20;
        this.height = height;
        this.weight = weight;
    }
}
let t5 = new Player(2, 3);
console.log("vishal.height :>> ", t5.height);
// console.log("vishal.weight", t5.weight);
class Boy {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
    }
}
let v1 = new Boy(1, 2, 3);
console.log("v1.getMyHeight()", v1.getMyHeight());
class Player2 extends Player {
    constructor(special, height, weight, power) {
        super(weight, power);
        this.special = special;
    }
}
let l1 = new Player2(false, 2, 1, 2);
console.log("l1.weight", l1.height);
