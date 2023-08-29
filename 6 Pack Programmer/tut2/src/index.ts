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
    TODO: Interface   
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
  TODO:  Optional Value
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
  TODO:  Rest Operation
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
    TODO:  Function with Object
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
    TODO:  Classes
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
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }
  getMyHeight = () => this.height;
}

let v1 = new Boy(1, 2, 3);
console.log("v1.getMyHeight()", v1.getMyHeight());

class Player2 extends Boy {
  special: boolean;
  constructor(
    special: boolean,

    height: number,
    weight: number,
    power: number
  ) {
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
  constructor(public height: number, public weight: number) {}

  public get getBoxHeight(): number {
    return this.height;
  }

  public set setBoxHeight(v: number) {
    this.height = v;
  }
}

let b1 = new Box(24, 12);
console.log("b1.getBoxHeight", b1.getBoxHeight);
b1.setBoxHeight = 123;
console.log("b1.getBoxHeight", b1.getBoxHeight);

//

interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;

  getId: () => string;
}

interface GiveHeight {
  getMyName: () => string;
}

class Product1 implements ProductType, GiveHeight {
  public name: string;
  public price: number;
  public stock: number;
  private id: string = String(Math.random() * 100);

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getId = () => this.id;
  getMyName = () => this.name;
}

const obj21 = new Product1("Desktop", 20000, 2);
console.log("obj21.getId()", obj21.getId());
console.log("obj21.getMyName()", obj21.getMyName());

class Product21 implements ProductType {
  private id: string = String(Math.random() * 100);

  constructor(public name: string, public price: number, public stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getId = () => this.id;
}

/*
  TODO:  Type Assertion - DOM Manipulation
*/
let btn = document.getElementById("btn") as HTMLElement;
let btn1 = <HTMLElement>document.getElementById("btn");
//* Anything but ~ null
let btn2 = document.getElementById("btn")!;

btn.onclick;

let myimg = document.getElementById("myimg") as HTMLImageElement;
myimg.src;

let myForm = document.getElementById("myForm") as HTMLFormElement;
let myInput = document.querySelector("#myForm > input") as HTMLInputElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const val = Number(myInput.value);
  console.log("val", val);
  console.log("typeof val", typeof val);
  // myForm.appendChild(`<div>${val + 20}</div>`);

  const myDiv = document.createElement("div") as HTMLDivElement;
  myDiv.innerHTML = `${val + 20}`;
  myForm.appendChild(myDiv);
};

//

interface PersonType {
  [key: string]: string;
}

const myObj: PersonType = {
  name: "vishal",
  email: "yadav11adu@gmail.com",
};

const getName = (): string => myObj["name"];
const getEmail = (): string => myObj["email"];

let getData1 = (key: string): string => {
  return myObj[key];
};

//

interface PersonType1 {
  name: string;
  email: string;
}

const myObj1: PersonType1 = {
  name: "vishal",
  email: "yadav11adu@gmail.com",
};

const getName1 = (): string => myObj1["name"];
const getEmail1 = (): string => myObj1["email"];

let getData2 = (key: keyof PersonType1): string => {
  return myObj[key];
};

//
let key = "name";
console.log(
  "myobj1[key of keyof PersonType1]",
  myObj1[key as keyof PersonType1]
);
console.log(
  "myobj1[key of keyof typeof PersonType1]",
  myObj1[key as keyof typeof myObj1]
);

/*
  TODO: Utility Classes | Type Utility
*/

//* Partial<Type> - make properties optional
type User = {
  name: string;
  email: string;
  isMale?: boolean;
};

type User1 = Partial<User>;

//* Required<Type>
type User2 = Required<User>;
let obj1213: Required<User> = {
  name: "vkumar786",
  email: "vkumar@onemindservices.com",
  isMale: true,
};

//* Readonly<Type>
type User3 = Readonly<User>;

//* Record<Type>
type User4 = Record<"name" | "email" | "gender", string>;

// Example
interface UserInfo {
  age: number;
}

type UserName = "vishal" | "vivek" | "yash";

const users: Record<UserName, UserInfo> = {
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

//* Pick<Type, Keys> (Pick & Omit)
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

//* Omit<Type, Keys>
type UserInfoDetails = Omit<OrderInfo, "city" | "state" | "country">;

//* Exclude<Type, ExcludedUnion>
type MyUnion = string | number | boolean | null | undefined;
type RandomExclude = Exclude<MyUnion, string>;

//* Extract<Type, ExcludedUnion>
type RandomExtract = Extract<MyUnion, string>;

//* NonNullable<Type, ExcludedUnion>
type RandomNonNullable = NonNullable<MyUnion>;

//* Parameters<Type>
const myFunc = (a: number, b: number) => {
  console.log("a + b", a + b);
};

type RandomMyFuncParams = Parameters<typeof myFunc>;

//* ConstructorParameters<Type>
type RandomConstructorParams = ConstructorParameters<typeof Box>;

//* ReturnType<Type>
type RandomReturnMyFunc = ReturnType<typeof myFunc>;

//* InstanceType<Type>
type RandomInstanceType = InstanceType<typeof Box>;

const obj123: RandomInstanceType = {
  weight: 123,
  height: 123,
  getBoxHeight: 0,
  setBoxHeight: 0,
};

/*
  TODO: Generic
*/
const fun1 = <T>(n: T): T => {
  return n;
};

let lk1 = fun1(123);
let lk2 = fun1("asdf");
let lk3 = fun1(false);

const fun2 = <T>(data: T): T => {
  return data;
};

console.log("fun2(myObj1)", fun2(myObj1));
console.log("fun2(myObj1)", fun2<PersonType1>(myObj1));

let arr32: Array<number> = [];

//* More than one Generic
const fun3 = <T, U>(data: T, pickChu: U): object => {
  return {
    data,
    pickChu,
  };
};

const fun4 = <T, U>(
  data: T,
  pickChu: U
): {
  data: T;
  pickChu: U;
} => {
  return {
    data,
    pickChu,
  };
};

//* Extends with generic - it means that prev value must be there and much more..
const fun5 = <T, U extends T>(
  data: T,
  pick: U
): {
  data: T;
  pick: U;
} => {
  return {
    data,
    pick,
  };
};

console.log("fun5(123,123)", fun5(123, 123));
console.log("fun5(123,123)", fun5<number, number>(123, 123));

type p1 = {
  name: string;
  email: string;
};

type p2 = {
  name: string;
  email: string;
  isMale: boolean;
};

const p1Ex = {
  name: "vishal",
  email: "vkumar@onemindservices.com",
};

const p2Ex = {
  name: "vivek",
  email: "vKumar@onemindservices.com",
  isMale: true,
};

console.log("fun5<p1,p2>(p1Ex, p2Ex)", fun5<p1, p2>(p1Ex, p2Ex));

//

type GenricPerson = {
  name: string;
  email: string;
  age: number;
};

const u1: GenricPerson[] = [
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

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => {
    return item[property] === value;
  });
};

console.log("filterByPeoples()", filterByPeoples(u1, "name", "vishal"));
console.log("filterByPeoples()", filterByPeoples(u1, "age", 209));
