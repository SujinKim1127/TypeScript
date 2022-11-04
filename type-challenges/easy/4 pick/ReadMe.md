## 문제
T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 사용하지 않고 구현하기

예시
```tsx
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```


## 문제 풀이
우선 Pick 에 대한 설명을 찾아봤는데 pick은 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의하는 것이다.

T에서 K 프로퍼티만 선택하라고 했고, 예시 코드를 보면
```tsx
type TodoPreview = MyPick<Todo, 'title' | 'completed'>
```
여기서 `'title' | 'completed'`는 Todo 인터페이스의 key 값이라는 것을 알 수 있다.
몇개의 속성을 선택하여 타입을 정의하는 pick의 특징을 구현하기 위해서는 **제네릭 제약 조건**을 사용하면 된다 ->  `MyPick<T, K extends keyof T>`

<br>

여기서 [**맵드 타입 기본 예제**](https://joshua1988.github.io/ts/usage/mapped-type.html#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95
)를 보면
```tsx
type Heroes = 'Hulk' | 'Thor' | 'Capt';
```
를 객체로 만들기 위해서 
```tsx
type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
}
```
`[K in Heroes]` 를 사용하였고, 이 문법은 JS의 `for in` 문법과 비슷하게 히어로 각각의 타입이 `number` 타입을 가지도록 정의한다.

맵드 타입을 이용하여 `{ [Key in K] : T[Key] }` K 값에 그에 맞는 type 값을 넣어주었다.
