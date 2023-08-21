// number
// :number 와 같은 문법 : 타입 주석(Type Annotation)
let num1:number = 123;
let num2:number = -123;
let num3:number = 123.123;
let num4:number = -123.123;
let num5:number = Infinity;
let num6:number = -Infinity;
let num7:number = NaN;

// string
let str1:string = 'hello';
let str2:string = "hello";
let str3:string = `hello`;
let str4:string = `${str1} world`;

// boolean
let bool1:boolean = true;
let bool2:boolean = false;

// null
let null1:null = null;

// undefined
let undefined1:undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
numA = 20; // error

let strA: 'hello' = 'hello';
let boolA: true = false; // error