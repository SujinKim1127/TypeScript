## 문제

`T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 사용하지 않고 구현하기

<br>

### 예시

```tsx
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

<br>

## 문제 풀이

우선 내장제네릭`Exclude<T, U>`는 T 중 U에 해당하는 부분만 제외시키는 개념이라고 볼 수 있다. 그래서 예시에서 Result가 ‘a’를 제외한 ‘b’ | ‘c’ 만 나오는 것이다. 

T는 U값만 빼고 값을 반환해주어야 하기때문에 U값이 있을땐 해당 값을 반환해주면 안된다고 생각을 해서 `14 First of Array` 문제에서도 사용했던 **조건부 타입**을 사용했다.

조건부 타입은 유니언 타입을 만나면 유니언의 각 멤버에 적용되며 **분산적으로** 동작을 한다.

[Documentation - Conditional Types](https://www.typescriptlang.org/ko/docs/handbook/2/conditional-types.html#%EB%B6%84%EC%82%B0%EC%A0%81%EC%9D%B8-%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85)

만약 T와 U값이 똑같으면 반환값이 없고, 다르면 T값을 반환해주는 식으로 짜면 된다고 생각했다.

<br>

## 해답

```tsx
type MyExclude<T, U> = T extends U ? never : T
```
