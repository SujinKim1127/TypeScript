// string type
const name2: string = 'sujin';

// 타입 별칭
type Myname = string;
const name3: Myname = 'sujin';

console.log(typeof(name3))

// type Developer = {
//     name: string;
//     skill: string;
// }

// let sujin: Developer;



interface Developer {
    name: string;
    skill: string;
}

let sujin: Developer;

type User<T> = {
    name: T
}