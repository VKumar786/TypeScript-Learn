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
    TODO: Interface
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
  TODO:  Optional Value
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
  TODO:  Rest Operation
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
    TODO:  Function with Object
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
    TODO:  Classes
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
        this.id = String(Math.random() * 100);
    }
}
let v1 = new Boy(1, 2, 3);
console.log("v1.getMyHeight()", v1.getMyHeight());
class Player2 extends Boy {
    constructor(special, height, weight, power) {
        super(height, weight, power);
        this.special = special;
    }
    getMyPower() {
        return this.power;
    }
}
let l1 = new Player2(false, 2, 1, 2);
console.log("l1.weight", l1.weight);
console.log("l1.getMyHeight()", l1.getMyHeight());
console.log("l1.getMyPower()", l1.getMyPower());
console.log("l1.id", l1.id);
class Box {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    get getBoxHeight() {
        return this.height;
    }
    set setBoxHeight(v) {
        this.height = v;
    }
}
let b1 = new Box(24, 12);
console.log("b1.getBoxHeight", b1.getBoxHeight);
b1.setBoxHeight = 123;
console.log("b1.getBoxHeight", b1.getBoxHeight);
class Product1 {
    constructor(name, price, stock) {
        this.id = String(Math.random() * 100);
        this.getId = () => this.id;
        this.getMyName = () => this.name;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const obj21 = new Product1("Desktop", 20000, 2);
console.log("obj21.getId()", obj21.getId());
console.log("obj21.getMyName()", obj21.getMyName());
class Product21 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 100);
        this.getId = () => this.id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
/*
  TODO:  Type Assertion - DOM Manipulation
*/
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn");
//* Anything but ~ null
let btn2 = document.getElementById("btn");
btn.onclick;
let myimg = document.getElementById("myimg");
myimg.src;
let myForm = document.getElementById("myForm");
let myInput = document.querySelector("#myForm > input");
myForm.onsubmit = (e) => {
    e.preventDefault();
    const val = Number(myInput.value);
    console.log("val", val);
    console.log("typeof val", typeof val);
    // myForm.appendChild(`<div>${val + 20}</div>`);
    const myDiv = document.createElement("div");
    myDiv.innerHTML = `${val + 20}`;
    myForm.appendChild(myDiv);
};
const myObj = {
    name: "vishal",
    email: "yadav11adu@gmail.com",
};
const getName = () => myObj["name"];
const getEmail = () => myObj["email"];
let getData1 = (key) => {
    return myObj[key];
};
const myObj1 = {
    name: "vishal",
    email: "yadav11adu@gmail.com",
};
const getName1 = () => myObj1["name"];
const getEmail1 = () => myObj1["email"];
let getData2 = (key) => {
    return myObj[key];
};
//
let key = "name";
console.log("myobj1[key of keyof PersonType1]", myObj1[key]);
console.log("myobj1[key of keyof typeof PersonType1]", myObj1[key]);
let obj1213 = {
    name: "vkumar786",
    email: "vkumar@onemindservices.com",
    isMale: true,
};
const users = {
    vishal: {
        age: 20,
    },
    vivek: {
        age: 18,
    },
    yash: {
        age: 22,
    },
};
//* Parameters<Type>
const myFunc = (a, b) => {
    console.log("a + b", a + b);
};
const obj123 = {
    weight: 123,
    height: 123,
    getBoxHeight: 0,
    setBoxHeight: 0,
};
/*
  TODO: Generic
*/
const fun1 = (n) => {
    return n;
};
let lk1 = fun1(123);
let lk2 = fun1("asdf");
let lk3 = fun1(false);
const fun2 = (data) => {
    return data;
};
console.log("fun2(myObj1)", fun2(myObj1));
console.log("fun2(myObj1)", fun2(myObj1));
let arr32 = [];
//* More than one Generic
const fun3 = (data, pickChu) => {
    return {
        data,
        pickChu,
    };
};
const fun4 = (data, pickChu) => {
    return {
        data,
        pickChu,
    };
};
//* Extends with generic - it means that prev value must be there and much more..
const fun5 = (data, pick) => {
    return {
        data,
        pick,
    };
};
console.log("fun5(123,123)", fun5(123, 123));
console.log("fun5(123,123)", fun5(123, 123));
const p1Ex = {
    name: "vishal",
    email: "vkumar@onemindservices.com",
};
const p2Ex = {
    name: "vivek",
    email: "vKumar@onemindservices.com",
    isMale: true,
};
console.log("fun5<p1,p2>(p1Ex, p2Ex)", fun5(p1Ex, p2Ex));
const u1 = [
    {
        name: "vishal",
        email: "vkumar@onemindservies.com",
        age: 209,
    },
    {
        name: "vivek",
        email: "vkumar@onemindservies.com",
        age: 20,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => {
        return item[property] === value;
    });
};
console.log("filterByPeoples()", filterByPeoples(u1, "name", "vishal"));
console.log("filterByPeoples()", filterByPeoples(u1, "age", 209));
