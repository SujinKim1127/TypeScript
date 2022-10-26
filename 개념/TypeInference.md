# 타입 추론

: 타입스크립트가 코드를 해석해 나가는 동작

<br>

```tsx
let x = 3;
```

`x`에 대한 타입을 따로 지정하지 않으면 `x`는 일단 `number`로 간주된다

이렇게 변수를 선언하거나 초기화할때 타입이 추론된다

<br>

## 가장 적절한 타입 (Best Common Type)

타입은 보통 몇 개의 코드를 바탕으로 추론한다.

그 표현식을 이용하여 추론한 가장 근접한 타입을 **Best Common Type** 이라고 한다

```tsx
let arr = [0, 1, null];
```

`arr`의 타입을 추론하기 위해서는 배열의 각 아이템을 살펴보아야 한다

배열의 각 아이템의 타입은 `number`와 `null`로 구분된다

이때 **Best Common Type** 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정한다

<br>

## 문맥상의 타이핑 (Contextual Typing)

코드의 위치를 기준으로 발생한다

```tsx
// (1)
window.onmousedown = function(mouseEvent) {
	console.log(mouseEvent.button);     // ok
	console.log(mouseEvent.kangaroo);   // Error
};
```

`window.onmousedown`에 할당되는 함수의 타입을 추론하기 위해 `window.onmousedown` 타입 검사

→ 검사 후 함수의 타입이 마우스 이벤트와 연관있다고 추론

→ `mouseEvent` 인자에 `button` 속성은 있지만 `kangaroo` 속성은 없다고 결론

<br>

```tsx
// (2)
window.onscroll = function(uiEvent) {
	console.log(uiEvent.button);   // Error
}
```

→ 오른쪽 함수의 `window.onscroll`에 할당되었기 때문에 함수의 인자 `uiEvent`는 **[UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)**로 간주

(1)에서 본 `MouseEvent` 와는 다르게 `button` 속성이 없다고 추론해서 에러 발생

```tsx
const handler = function(uiEvent) {
	console.log(uiEvent.button)  // ok
}
```

표현식이 (2)와 동일하지만 함수가 할당되는 변수만으로는 타입을 추정하기 어려워서 에러 발생X

<br>

## 타입스크립트의 타입 체킹

타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점이다. → **Duck Typing** or **Structural Subtying** 이라고 한다

- Duck Typing: 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것. 동적 타이핑의 한 종류
- Structural Subtyping: 객체의 실제 구조나 정의에 따라 타입을 결정하는 것