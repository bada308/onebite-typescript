// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let _anyVar = 10;
_anyVar = 'hello'; // 에러 발생 ('string' 형식은 'number' 형식에 할당할 수 없습니다.)
let anyVar = 10;
anyVar = 'hello'; // 에러 발생하지 않음 (any 타입으로 지정되어 있음)
anyVar = true;
anyVar = [1, 2, 3];
let num = anyVar; // 에러 발생하지 않음 (any 타입으로 지정되어 있음)
export {};
