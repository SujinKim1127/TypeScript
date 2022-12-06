## 문제

Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

<br>

### 예시

```tsx
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```
<br>

## 문제 풀이

조건부 연산자를 사용하면 된다고 생각해서 처음에는

```tsx
T extends [...Rest, Last] ? Last : never
```

라고 적었지만 

```tsx
type Last<T extends any[]> = any
'Last' 형식 별칭은 순환적으로 자신을 참조합니다.

type Rest = /*unresolved*/ any
'Rest' 이름을 찾을 수 없습니다.
```

이렇게 에러가 발생하여서 `infer`를 사용하여 문제를 풀었다.

<br>

## 해답

```tsx
type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never;
```