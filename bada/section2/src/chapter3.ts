/* 객체 */

// 객체 리터럴 타입 정의
// id : 옵셔널 프로퍼티
let user:{id?:number, name:string} = {
    id: 1,
    name: 'bada',
}

let config:{
    readonly apiKey:string;
} = {
    apiKey: "MY API KEY",
}

config.apiKey = 'hacked'; // 에러 발생 (readonly)