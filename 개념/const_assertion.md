# const assertion (as const)
typescript에서 변수를 `const`로 선언할때와 `let`으로 선언할때 타입 추론은 다르다.

```tsx
let a = 'hi';       // let a: string
const b = 'hi';     // const b: "hi"
```

TypeScript는 특정 문자열 자체를 타입으로 다룰 수 있는 **string literal type**을 지원한다

b 변수는 반드시 “hi” 문자열이어야 한다.

<br>

이때, **const assertion** 기능을 사용하면, 

`let` 변수에 대해서도 `const` 변수를 사용할때와 동일한 타입 추론 규칙이 적용 가능하다

```tsx
let c = 'hi' as const;     // let c: "hi"
let c = <const>'hi';       // let c: "hi"
```

`let` 변수로 선언했음에도 불구하고 `const` 변수로 선언한것처럼 “hi” 타입으로 추론되었다

![Untitled](./img/as%20const.PNG)

c에 다른 값을 대입하려고 하면 에러가 발생하는 것을 볼 수 있다

<br>

### 객체

```tsx
const obj = {
    hi: 'ts'
}
obj.hi = 'typescript'
```

`obj`가 const로 선언이 되었지만 `obj` 객체 내부의 속성값은 변경이 가능하다

이때, 타입 추론의 범위를 좁혀주기 위해 **const assertion**을 사용한다

```tsx
const obj = {
    hi: 'ts' as const,
    hello: 'typescript'
}
obj.hi = 'typescript'  // error: '"typescript"' 형식은 '"ts"' 형식에 할당할 수 없다
obj.hello = 'ts'       // error 발생 X
```

`obj` 전체에 const assertion을 적용하고 싶으면

```tsx
const obj2 = {
    hi: 'ts',
    hello: 'typescript'
} as const
```

이렇게 마지막에 적어주면 된다.