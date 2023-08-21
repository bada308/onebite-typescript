// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST"; // 2
})(Role || (Role = {}));
const user1 = {
    name: 'john',
    role: Role.ADMIN // 0 <- 관리자
};
const user2 = {
    name: 'mary',
    role: Role.USER // 1 <- 일반 유저
};
const user3 = {
    name: 'steve',
    role: Role.GUEST // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
// 이렇게 하면 role이 0, 1, 2가 아닌 다른 숫자가 들어갈 수 있음 -> enum 사용
