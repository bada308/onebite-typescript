// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// 중복 발생
let user: User = {
    id: 1,
    name: "강바다",
    nickname: "bada",
    birth: "2001.12.16",
    bio: "안녕하세요. 저는 강바다입니다.",
    location: "서울특별시 강남구"
};

let user2: User = {
    id: 2,
    name: "강아무개",
    nickname: "아무개",
    birth: "2001.12.16",
    bio: "안녕하세요. 저는 강아무개입니다.",
    location: "서울특별시 강남구"
};

// 인덱스 시그니처
// 규칙을 이용해 객체의 속성과 값의 타입을 정의하는 방법
type CountryCode = {
    [key : string]: string;
};

// key: string, value: string
let countryCodes:CountryCode = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

// 규칙을 위반하지 않으면 다 허용
// 인덱스 시그니처의 규칙을 위반하면 에러 발생
type CountryNumberCodes = {
    [key:string]:number;
    Korea: string;
}

let countryNumberAndStringCodes:CountryNumberCodes = {
    Korea: 82,
    UnitedState: 1,
    UnitedKingdom: 44,
}