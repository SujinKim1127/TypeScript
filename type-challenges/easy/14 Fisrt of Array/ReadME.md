## 문제
배열 `T` 의 첫번째 원소를 리턴하는 제네릭 `First<T>` 구현하기

### 예시
```tsx
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 'a'
type head2 = First<arr2> // 3
```

<br>

## 풀이
배열의 첫번째 요소를 반환해야하고

빈 배열일 경우 `never`를 반환한다

<br>

배열의 첫번째 요소를 반환해야하는 것은 `T[0]` 을 사용하면 되고,

**빈 배열**이라는 조건이 들어가 있어서 [**조건부 타입**](https://github.com/SujinKim1127/TypeScript/blob/main/%EA%B0%9C%EB%85%90/ConditionalType.md) 을 사용하여 문제를 풀어야 한다!

```tsx
T extends U ? L : R
```
T가 U에 할당이 가능하면 L, 아니면 R 이기 때문에

`T extends []` 를 사용하여 T가 빈배열이면 `never` 그렇지 않으면 `T[0]`이 나오도록 코드를 짰다.
