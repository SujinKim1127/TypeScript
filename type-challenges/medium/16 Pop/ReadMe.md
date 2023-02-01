## 문제

Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

<br>

### 예시

```tsx
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```
<br>

## 문제 풀이

`15 Last of Array` 랑 비슷하다고 생각해서

 `T extends [...infer Rest, infer Last] ? Rest : never` 이렇게 적었는데

`Expect<Equal<Pop<[]>, []>>` 이 부분에서 오류가 발생했다. 그래서 never 대신에 `[]` 를 적었더니 통과했다!!!!

<br>

## 해답

```tsx
type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : [];
```