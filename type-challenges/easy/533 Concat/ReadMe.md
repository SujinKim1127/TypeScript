## 문제

JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

<br>

### 예시

```tsx
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

<br>

## 문제 풀이

입력값이 모두 배열이기 때문에 `extends any[]` 로 타입을 배열로 지정해주었고, concat은 앞배열을 다 가져오고 뒷배열을 가져오기 때문에 `...T` 으로 배열을 다 가져와주었다.