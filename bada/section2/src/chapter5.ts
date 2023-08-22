// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { // enum 타입은 대문자로 시작
    ADMIN, // 0
    USER, // 1
    GUEST // 2
}

enum Language {
    korean = 'ko',
    english = 'en',
}

const user1 = {
    name: 'john',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};

const user2 = {
    name: 'mary',
    role: Role.USER, // 1 <- 일반 유저
    language: Language.english,
};

const user3 = {
    name: 'steve',
    role: Role.GUEST, // 2 <- 게스트
    language: Language.english,
};

console.log(user1, user2, user3);

// 이렇게 하면 role이 0, 1, 2가 아닌 다른 숫자가 들어갈 수 있음 -> enum 사용
