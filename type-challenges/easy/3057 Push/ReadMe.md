## 문제

`Array.push`의 제네릭 버전을 구현하세요.

<br>

### 예시

```tsx
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

<br>

## 문제 풀이

T의 타입을 먼저 extends any[]로 배열로 정의해주었고, `…T`를 사용하여 새로운 배열에다가 T를 다 넣어주고 마지막에 U를 넣어주었다.

<br>

## 해답

```tsx
type Push<T extends any[], U> = [...T, U]
```