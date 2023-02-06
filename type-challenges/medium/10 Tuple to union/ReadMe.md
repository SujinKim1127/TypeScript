## 문제

튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`
를 구현하세요.

<br>

### 예시

```tsx
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

<br>

## 문제 풀이

예시를 보고, 하나씩 재귀로 해도 괜찮을것 같다는 생각이 들어서 `[infer first, ...infer rest]`으로 나눈 뒤에 `? first |`  으로 앞부분은 union에 넣어주고 뒷부분에다가 다시 `TupleToUnion`에 넣어주면 될 것 같다는 생각을 했다!

<br>

## 해답

```tsx
type TupleToUnion<T> = T extends [infer first, ...infer rest] 
                      ? first | TupleToUnion<rest> : never
```