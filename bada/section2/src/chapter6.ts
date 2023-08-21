// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용

let _anyVar = 10;
// _anyVar = 'hello'; // 에러 발생 ('string' 형식은 'number' 형식에 할당할 수 없습니다.)

let anyVar:any = 10;
anyVar = 'hello'; // 에러 발생하지 않음 (any 타입으로 지정되어 있음)
anyVar = true;
anyVar = [1, 2, 3];

let num:number = anyVar; // 에러 발생하지 않음 (any 타입으로 지정되어 있음)

// 타입 검사를 안 하는 것과 동일 -> 타입스크립트의 이점을 포기한다는 것
// 최대한 쓰지 않는 것이 좋음

// unknown
let unknownVar:unknown;
unknownVar = 10;
unknownVar = 'hello';
unknownVar = () => {};

// let num2:number = unknownVar; // 에러 발생 (unknown 타입은 다른 타입에 할당할 수 없음)
// unknownVar.toUpperCase(); // 에러 발생 (unknown 타입은 다른 타입에 할당할 수 없음)


// 타입 정제
if (typeof unknownVar === 'number') {
    num = unknownVar; // 에러 발생하지 않음 (unknown 타입을 number 타입으로 검사)
}

// unknown 타입은 런타임 에러를 발생시키지 않음