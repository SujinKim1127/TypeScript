## 문제
내장 제네릭 `ReturnType<T>`을 이를 사용하지 않고 구현하세요.

<br> 

### 예시

```tsx
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn>// should be "1 | 2"
```

<br> 

## 문제 풀이

`ReturnType` 은 함수의 리턴 타입을 알아내는 코드이므로 `T extends (...args : any[]) => any` 형식으로 인자를 받아야 한다. 저번에 풀었던 `3312 Parameters` 문제를 구글링 하면서 풀어보는데 ReturnType 코드가 그대로 있었어가지고 그때 기억을 되살려보며 문제를 풀어보았습니다.


<br> 

## 해답

```tsx
type MyReturnType<T> = T extends (...args : any[]) => infer R ? R : never;
```