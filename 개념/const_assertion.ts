let a = 'hi';       // let a: string
const b = 'hi';     // const b: "hi"

let c = 'hi' as const;     // let a: "hi"
// let a = <const>'hi';       // let a: "hi"

c = 'hello'     // error 발생


const obj = {
    hi: 'ts' as const,
    hello: 'typescript'
}
obj.hi = 'typescript'
obj.hello = 'ts'

const obj2 = {
    hi: 'ts',
    hello: 'typescript'
} as const