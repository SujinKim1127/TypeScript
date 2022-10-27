interface Ironman {
	name: string;
}

// class Avengers {
// 	name: string;
// }

// let i: Ironman;
// i = new Avengers();    // OK, because of structural typing
// i.name = "tony stark"
// console.log(i)

/****************************************************************************/

interface Avengers {
    name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: stringl; location: string }
let capt = { name: "Captain", location: "Pangyo" };
hero = capt;
console.log("capt: " + capt.name)
console.log("hero: " + hero.name)

function assemble(a: Avengers) {
    console.log("어벤져스 모여라", a.name);
}
assemble(capt);

/********************----------------------------------------****************************/

enum Status { Ready, Waiting };
enum Color { mint, sky, green };

let status_ = Status.Ready;
// status_ = Color.green;

/********************----------------------------------------****************************/

class Hulk {
    handSize: number;
    constructor(name: string, numHand: number) { }
}

class Captain {
    handSize: number;
    constructor(numHand: number) { }
}

// let a: Hulk
// let s: Captain = new Captain(10);

// a = s;  // ok
// s = a;  // ok


/********************----------------------------------------****************************/


interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;     // OK


interface NotEmpty<T>{
    data: T;
}
let a: NotEmpty<number>;
let b: NotEmpty<string>;

a = b;