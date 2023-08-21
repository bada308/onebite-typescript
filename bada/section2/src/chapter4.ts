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
let user: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
} = {
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