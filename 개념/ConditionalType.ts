interface Animal {
    live(): void
}

interface Dog extends Animal {
    woof(): void
}

interface Cat {
    meow(): void
}

type ex1 = Dog extends Animal ? number : string;
//  ex1 = number
const maru: ex1 = 5;
console.log(maru)       // 5

type ex2 = Cat extends Animal ? number : string;
//  ex2 = string
const junjji: ex2 = 'string';
console.log(junjji)     // string

/******************************************************************** */

interface IdLabel{
    id: number
}
interface NameLabel{
    name: string
}

// 함수 오버로딩
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// let a = createLabel("typescript");      // 'unimplemented'
// let b = createLabel(2.8)                // 'unimplemented'
// let c = createLabel(Math.random() ? "hello" : 42)   // 'unimplemented'

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

// function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
//     throw "unimplemented";
//   }

// let a = createLabel("typescript");      // 'unimplemented'
// let b = createLabel(2.8)                // 'unimplemented'
// let c = createLabel(Math.random() ? "hello" : 42)   // 'unimplemented'

/************************************************************************************************/

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
    message: string;
}
interface Dog {
    bark: void;
}

type EmailMessageContents = MessageOf<Email>;
let m: EmailMessageContents = 'emailmessage'
console.log(m)      // emailmessage
type DogMessageContents = MessageOf<Dog>;
let d: EmailMessageContents = 'dog';
console.log(d)      // dog