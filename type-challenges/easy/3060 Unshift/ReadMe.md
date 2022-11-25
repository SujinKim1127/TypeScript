## 문제

Implement the type version of `Array.unshift`

<br>

### 예시

```tsx
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```
<br>

## 문제 풀이

push 문제랑 똑같이 풀었다

<br>

## 해답

```tsx
type Unshift<T extends any[], U> = [U, ...T]
```