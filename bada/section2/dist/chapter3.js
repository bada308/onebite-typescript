/* 객체 */
// 객체 리터럴 타입 정의
// id : 옵셔널 프로퍼티
let user = {
    id: 1,
    name: 'bada',
};
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = 'hacked'; // 에러 발생 (readonly)
