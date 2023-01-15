## 문제

내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

<br>

### 예시

```tsx
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```

<br>

## 문제 풀이

먼저, 함수 T가 들어오므로 타입을 `<T extends (…args: any[]) => any>` 로 제한한다.

`infer` 연산자를 사용하여 `args`의 타입을 추론할 수 있도록 작성했다.
<br>

[참고]

 [https://lunuy.tistory.com/25](https://lunuy.tistory.com/25)

[https://driip.me/b812974b-3974-46e3-829e-1476b9b30c94](https://driip.me/b812974b-3974-46e3-829e-1476b9b30c94)

<br>

## 해답

```tsx
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any ? Args : []
```
