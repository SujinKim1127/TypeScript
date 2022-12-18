## 문제

`T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하기

<br>

### 예시

```tsx
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```
<br>

## 문제 풀이

4 pick 문제처럼 똑같이 `K extends keyof T` 로 `K` 타입을 정의해줬다.

맵드타입을 활용하여 `key in keyof T`를 적었고, 그 `key`가 `K` 안에 있어야 하므로 `as key extends K` 로 적었다. 만약 있으면 적지 않고, 없으면 그 `key`를 반환하는 식으로 적었다.

(약간 filter랑 비슷한 느낌..?

<br>

## 해답

```tsx
type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key] : T[key]
}
```