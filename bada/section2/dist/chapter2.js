/* 배열 */
// 1. 배열의 타입을 정의하는 방법
let nummArr = [1, 2, 3];
let strArr = ["hello", "im", "bada"];
// 2. 배열의 타입을 정의하는 또 다른 방법
let boolArr = [true, false, true]; // 제네릭
// 3. 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"]; // 유니온 타입
// 4. 다차원 배열의 타입을 정의하는 방법
let doubleArr = [[1, 2, 3], [4, 5, 6]];
/* 튜플 : 길이와 타입이 고정된 배열 */
// 1. 튜플의 타입을 정의하는 방법
let tup1 = [1, 2];
tup1 = [1, 2, 3]; // 에러 발생
tup1 = ["1", "2"]; // 에러 발생
// 2. 튜플에 들어가는 요소들의 타입이 다양할 경우
let tup2 = ["hello", 1, true];
export {};
