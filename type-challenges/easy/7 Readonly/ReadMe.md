## 문제

`T`의 모든 프로퍼티를 읽기 전용(재할당 불가)로 바꾸는 내장 제네릭 `Readonly<T>` 를 사용하지 않고 구현하기

<br>

### 예시

```tsx
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

<br>

## 문제 풀이

readonly 프로퍼티의 특징은

```jsx
interface Bread {
    readonly salt: number;
    sugar: number;
}

let scone: Bread = {
    salt: 10,
    sugar: 60,
}

scone.salt = 5;     // 읽기 전용 속성이므로 'salt'에 할당할 수 없습니다.
```

읽기 전용이므로 객체 생성시 할당한 값을 바꿀 수 없고 **읽을수만** 있다

저번에 풀었던 4 pick 문제에서 in과 keyof를 사용하여 pick을 구현한것과 비슷하게 풀면 된다고 생각해서 객체의 key 값을 가져오는 `keyof`와 거기서 하나씩 가져오기 위해 `in`을 사용해서 문제를 풀었다. 

마지막에는 `readonly` 속성을 프로퍼티에 적용시켜주면 된다.

<br>

## 해답

```tsx
type MyReadonly<T> = {
  readonly [key in keyof T] : T[key]
}
```