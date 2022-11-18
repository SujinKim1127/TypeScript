## 문제

조건 `C`, 참일 때 반환하는 타입 `T`, 거짓일 때 반환하는 타입 `F`를 받는 타입 `If`를 구현하세요. `C`
는 `true` 또는 `false`이고, `T`와 `F`는 아무 타입입니다.

<br>

### 예시

```tsx
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

<br>

## 문제 풀이

C의 결과에 따라 T 또는 F 값이 나오기 때문에 조건부타입을 사용했고 C의 결과는 `true` 또는 `false`로 나오기 때문에 `C ? T : F`에서  `C extends true` 로 고쳐 적었다.

그리고 C는 true, false 이외의 값을 입력받으면 에러가 발생하기 때문에 `C extends boolean` 으로 타입을 제한해주었다.

<br>

## 해답

```tsx
type If<C extends boolean, T, F> = C extends true ? T : F
```