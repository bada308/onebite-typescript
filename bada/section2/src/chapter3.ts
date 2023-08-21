/* 객체 */

let _user:object = {
    id: 1,
    name: 'bada',
}

// _user.id // 에러 발생 ('object' 형식에 'id' 속성이 없습니다.)


// 객체 리터럴 타입 정의
let user:{id:number, name:string} = {
    id: 1,
    name: 'bada',
}

user.id // 가능

let dog:{name: string, color: string} = {
    name: '멍멍이',
    color: "brown",
}

// typescript는 구조를 기준으로 타입을 정의한다
// 구조적 타입 시스템