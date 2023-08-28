let a: number = 4232;
let str: string = "vishal";
let check: boolean = false;
let nambo: any;
let fun = <string>"name";

console.log("a :>> ", a);
console.log("name :>> ", str);
console.log("check :>> ", check);
console.log("fun :>> ", fun);

//? Union
let surname: string | number;
surname = "123";
surname = 123;

//? function
const func1 = (n: number, m: number) => {
  console.log("n,m :>> ", n, m);
  return n * m;
};

const func2 = (n: number, m: number): string => {
  console.log("n,m :>> ", n, m);
  return String(n * m);
};

console.log("func2(2,4) :>> ", func2(2, 4));

//? Types
type func3Props = (a: number, b: number) => number;
const func3: func3Props = (a, b) => {
  return a + b;
};
console.log("func3(2,4) :>> ", func3(2, 4));

//? Array
const arr: number[] = [1, 2, 3, 4];
const arr1: Array<number> = [1, 31, 2, 3]; //* SImilar to generic
const arr2: Array<boolean> = new Array(20);

const arr4: (number | string)[] = [2, "vivek"];
const arr5: Array<number | string> = [1, "vishal"];

//? Tuple
const arr6: [number, number, number] = [1, 2, 3];

//? Object
const obj: objProps = {
  height: 123,
  weight: 1,
  gender: false,
};

type objProps = {
  height: number;
  weight: number;
  gender?: boolean;
};

/* 
    ? Interface   
    * it can be extended that is reason why it is used with classes 
*/
const obj1: obj1Props = {
  height: 123,
  weight: 2,
};

const obj2: obj2Props = {
  name: "vishal",

  height: 21,
  weight: 5,
};

interface obj1Props {
  height: number;
  weight: number;
  gender?: boolean;
}

interface obj2Props extends obj1Props {
  name: string;
}

/*
    ? Optional Value
 */
const obj4: obj4Props = (a, b, l) => {
  if (typeof l === "undefined") return a * b;
  return a * b * l;
};
type obj4Props = (n: number, m: number, l?: number) => number;

/*
? Default value
*/
const obj5: obj4Props = (a, b, l = 10) => {
  return a * b * l;
};
type obj5Props = (n: number, m: number, l?: number) => number;

const obj6 = (a: number, b: number, l: number = 10): number => {
  return a * b * l;
};

/*
    ? Rest Operation
*/
const f1 = (...rest: number[]): number[] => {
  return rest;
};
f1(1, 2, 2, 11, 252, 12312);

const f2: f2Type = (...rest) => {
  return rest;
};
type f2Type = (...rest: number[]) => number[];
f2(1, 2, 2, 11, 252, 12312);

function f3(n: number): number {
  return -1;
}

/*
    ? Function with Object
*/
const getData: getDataType = (product) => {
  console.log("product :>> ", product);
};

type ProductProps = {
  name: string;
  stock: number;
  price: number;
  photo?: string;
  readonly id: string;
};

type getDataType = (product: ProductProps) => void;

const product1: ProductProps = {
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
const err: Error = new Error();

const errHandler = (): never => {
  throw new Error();
};

const errHandler1 = (): Error => {
  return new Error();
};

type themeMode = "light" | "dark";
const t1: themeMode = "light";

/*
    ? Classes
    * By default public
    * we can access private element of class b/c there is not access modifier in js but can ~ update it
    * In protected, derived class will have public method & private can~ be accessed from children class
*/

class Player {
  height = 34;
  private weight = 20;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }
}

let t5 = new Player(2, 3);
console.log("vishal.height :>> ", t5.height);

// console.log("vishal.weight", t5.weight);

class Boy {
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {}
  getMyHeight = () => this.height;
}

let v1 = new Boy(1, 2, 3);
console.log("v1.getMyHeight()", v1.getMyHeight());

class Player2 extends Player {
  special: boolean;
  constructor(
    special: boolean,

    height: number,
    weight: number,
    power: number
  ) {
    super(weight, power);
    this.special = special;
  }
}

let l1 = new Player2(false, 2, 1, 2);
console.log("l1.weight", l1.height);
