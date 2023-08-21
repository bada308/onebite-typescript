/* 배열 */

// 1. 배열의 타입을 정의하는 방법
let nummArr:number[] = [1, 2, 3];
let strArr:string[] = ["hello", "im", "bada"];

// 2. 배열의 타입을 정의하는 또 다른 방법
let boolArr:Array<boolean> = [true, false, true]; // 제네릭

// 3. 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(string|number)[] = [1, "hello"]; // 유니온 타입

// 4. 다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [[1, 2, 3], [4, 5, 6]];

/* 튜플 : 길이와 타입이 고정된 배열 */

// 1. 튜플의 타입을 정의하는 방법 
let tup1:[number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 에러 발생 
// tup1 = ["1", "2"]; // 에러 발생

// 2. 튜플에 들어가는 요소들의 타입이 다양할 경우
let tup2:[string, number, boolean] = ["hello", 1, true];
// tup2 = [true, "hello", 1]; // 에러 발생


// 3. 튜플에 배열 method 사용?
// 튜플을 배열로 인식하기 때문에 에러가 발생하지 않음 → 각별히 주의해서 사용하자
// tup1.push(3); // 가능
// tup1.pop(); // 가능



const _users = [
    ['강아무개', 1],
    ['이아무개', 2],
    ['박아무개', 3],
    ["김아무개", 4],
    [5, "최아무개"]
]

// 튜플을 사용해서 해결
const users:[string, number][] = [
    ['강아무개', 1],
    ['이아무개', 2],
    ['박아무개', 3],
    ["김아무개", 4],
    // [5, "최아무개"] // 에러 발생
]