// void
// void : 공허, 아무것도 없는 상태

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
// a = 1; // 에러 발생 (void 타입에는 number 타입을 할당할 수 없음)
// a = "hello"; // 에러 발생 (void 타입에는 string 타입을 할당할 수 없음)
// a = {} // 에러 발생 (void 타입에는 object 타입을 할당할 수 없음)
a = undefined; // 가능

// undefined & null을 사용하지 않고 void를 사용하는 이유
// → 진짜 undefined와 null을 return 하기 위해 리턴문을 또 작성해야 함

// never
// never : 절대 발생하지 않는 값

// 반환값 자체가 존재하는 것이 불가능한 경우
function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}

let b: never;
b = undefined; // 에러 발생 (never 타입에는 undefined 타입을 할당할 수 없음)
b = null; // 에러 발생 (never 타입에는 null 타입을 할당할 수 없음)