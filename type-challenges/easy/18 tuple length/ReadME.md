## 문제
배열을 받아 길이를 반환하는 제네릭 `Length<T>` 구현하기

### 예시
```tsx
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

<br>

## 풀이
예시 값을 보면 `as const`를 뒤에 언급한 것을 볼 수 있다
```tsx
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

// const tesla: readonly ['tesla', 'model 3', 'model X', 'model Y']
```

그로 인해 타입이 `readonly`라는 것을 알 수 있으므로 제네릭 타입을 `readonly`로 지정해준다.
```tsx
Length<T extends readonly any[]>
```

`any[]` 로 받아오기 때문에  `T`는 배열의 속성을 사용할 수 있으므로 `T['length']` 형태로 `arr.length` 속성을 사용할 수 있다