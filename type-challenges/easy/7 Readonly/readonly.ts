interface Bread {
    readonly salt: number;
    sugar: number;
}

let scone: Bread = {
    salt: 10,
    sugar: 60,
}

scone.salt = 5;     // 읽기 전용 속성이므로 'salt'에 할당할 수 없습니다.