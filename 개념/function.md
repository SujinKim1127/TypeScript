# 함수

웹 애플리케이션을 구현할때 자주 사용되는 함수

- 함수의 파라미터(매개변수) 타입
- 함수의 반환 타입
- 함수의 구조 타입

<br>

### 함수의 기본적인 타입 선언

```tsx
function sum(a: number, b: number): number {
	return a + b;
}
```

<br>

### 함수의 인자

TS에서는 함수의 인자를 모두 필수 값으로 간주

→ 함수의 매개변수를 설정하면 `undefined`나 `null`이라도 인자로 넘겨야하고 컴파일러에서 정의된 매개변수 값이 넘어 왔는지도 체크

정의된 매개변수 값만 받을 수 있고, 추가로 인자를 받을 수 X

```tsx
function sum(a: number, b: number): number {
	return a + b;
}

sum(10, 20);   // 30
sum(10, 20, 30);  // error, too many parameters
sum(10);   // error, too few pararmeters
```

`?` 이용하면 정의된 매개변수의 갯수만큼 인자를 넣지 않아도 된다

```tsx
function sum(a: number, b?: number): number {
	return a + b;
}
sum(10, 20);   // 30
sum(10, 20, 30);  // error, too many parameters
sum(10);   // 타입 에러 없음
```

매개변수 초기화

```tsx
function sum(a: number, b = 100): number {
	return a + b;
}
sum(10, undefined);   // 110
sum(10);   // 110
```

<br>

### REST 문법이 적용된 매개변수

```tsx
function sum(a: number, ...nums: number[]): number {
	var totalOfNums = 0;
	for (let key in nums) {
		totalOfNums += nums[key];
	}
	return a + totalOfNums;
}

sum(10, 2,3,4,5);    // 24
```

<br>

### this

```tsx
function 함수명(this: 타입) {
  // ...
}
```

<br>

```tsx
interface Vue {
	el: string;
	count: number;
	init(this: Vue): () => {};
}

let vm: Vue = {
	el: '#app',
	count: 10,
	init: function(this: Vue) {
		return () => {
			return this.count;
		}
	}
}

let getCount = vm.init();
let count = getCount();
console.log(count);  // 10
```

<br>

### 콜백에서의 `this`

콜백으로 함수가 전달되었을때의 `this`를 구분해줘야 한다

```tsx
// 강제로
interface UIElement {
	// 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요 X
	addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
	info: string;
	onClick(this: Handler, e: Event) {
			// 위의 'UIElement' 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용함 -> 에러 발생
			this.info = e.message;
	}
}
let handler = new Handler();
UIElement.addClickListener(handler.onClick);   // error!

let ui: UIElement = {
	addClickListener(onclick);
}
ui.addClickListener(handler.onClick);			// error!
```

<br>

`UIElement` 인터페이스의 스펙에 맞춰 `Handler`를 구현하려면 ⬇️

```tsx
class Handler2 {
	info: string;
	onClick(this: void, e: Event) {
			// `this`의 타입이 void이기 때문에 여기서 `this` 사용 X
			console.log('clicked!');
	}
}

let handler2 = new Handler2();
UIElement.addClickListener(handler2.onClick);
```