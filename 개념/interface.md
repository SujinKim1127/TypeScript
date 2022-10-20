# 인터페이스

상호 간에 정의한 약속 혹은 규칙

- 객체의 스펙
- 함수의 파라미터
- 함수의 스펙
- 배열과 객체를 접근하는 방식
- 클래스

<br>

```jsx
let person = { name: 'Capt', age: 28 };

function logAge(obj: { age: number }) {
	console.log(obj.age);    // 28
}
logAge(person);   // 28
```

`logAge()` 함수에서 받는 인자의 형태는 `age`를 속성으로 가지는 객체

인터페이스를 적용하면 ⬇️

```jsx
interface personAge {
	age: number;
}

function logAge(obj: personAge) {
	console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);
```

`logAge()` 의 인자는 `personAge` 라는 타입을 가진다

<br>


## 옵션 속성

인터페이스를 사용할때 인터페이스에 정의되어 있는 속성을 꼭 다 사용하지 않아도 된다.

```jsx
interface 인터페이스_이름 {
	속성?: 타입;
}
```

속성 끝에 `?` 를 붙이면 된다.

```jsx
interface CraftBeer {
	name: string;
	hop?: number;
}

let myBeer = {
	name: 'Saporo'
};
function brewBeer(beer: CraftBeer) {
	console.log(beer.name);   // Saporo
}
brewBeer(myBeer);
```

`hop` 를 옵션 속성으로 선언해서 `brewBeer()` 함수에서 인자로 넘긴 객체에는 `hop` 속성이 없다

<br>

### 옵션 속성의 장점

인터페이스를 사용할 때 속성을 선택적으로 적용 가능

인터페이스에 정의되어 있지 않은 속성에 대해 인지 가능

```jsx
interface CraftBeer {
	name: string;
	hop?: number;
}

let myBeer = {
	name: 'Saporo'
};
function brewBeer(beer: CraftBeer) {
	console.log(beer.brewery);  // Error: Property 'brewery' does not exist on type 'Beer'
}
brewBeer(myBeer);
```

인터페이스에 정의되어 있지 않은 속성에 대해 오류 표시

<br>

## 읽기 전용 속성

인터페이스로 객체를 처음 생성할때만 값을 할당하고 그 이후에는 변경할 수 없는 속성

`readonly` 속성을 앞에 붙인다

```jsx
interface CraftBeer {
	readonly brand: string;
}
```

수정시 발생하는 오류

```jsx
let myBeer: CraftBeer = {
	brand: 'Belgian Monk'
};
myBeer.brand = 'Korean Carpenter'; // error
```

<br>

### 읽기 전용 배열

배열을 선언할때 `ReadonlyArray<T>` 타입을 사용하면 읽기 전용 배열 생성 가능

```jsx
let arr: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // error
arr.push(4);  // error
arr[0] = 100;  // error
```

<br>

## 객체 선언과 관련된 타입 체킹

인터페이스를 이용하여 객체를 선언할때 좀 더 엄밀한 속성 검사 진행

```jsx
interface CraftBeer {
	brand?: string;
}

function brewBeer(beer: CraftBeer) {
	//...
}
brewBeer({ brandon: 'what' }); 
// error: Object literal may only specify known propeties,
// but 'brandon' does not exist in type 'CraftBeer'. Did you mean to write 'brand'?
```

`CraftBeer` 인터페이스에는 `brand`라고 선언되어 있지만 `brewBeer()` 함수에 인자로 넘기는 `myBeer` 객체에는 `brandon`이 선언되어 있어 오탈자 점검 오류 발생

타입 추론을 무시하고 싶을때는 ⬇️

```jsx
let myBeer = { brandon: 'what' };
brewBeer(myBeer as CraftBeer);
```

 인터페이스에서 정의하지 않은 속성들을 추가로 사용하고 싶을때는⬇️

```jsx
interface CraftBeer {
	brand?: string;
	[propName: string]: any;
}
```

<br>

## 함수 타입

```jsx
interface login {
	(username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function(id: string, pw: string) {
	console.log('로그인 했습니다');
	return true;
}
```

<br>

## 클래스 타입

클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있다

```tsx
interface CraftBeer {
	beerName: string;
	nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
	beerName: string = "baby guinness';
	nameBeer(b: string) {
		this.beerName = b;
	}
	constructor () {}
}
```

<br>

## 인터페이스 확장

클래스처럼 인터페이스 간 확장 가능

```tsx
interface Person {
	name: string;
}
interface Developer extends Person {
	skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
```

여러 인터페이스 상속받기 가능 ⬇️

```tsx
interface Person {
	name: string;
}
interface Drinker {
	drink: string;
}
interface Developer extends Person {
	skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';
```

<br>

## 하이브리드 타입

인터페이스는 여러 가지 타입을 조합하여 만들기 가능

함수 타입이면서 객체 타입을 정의할 수 있는 인터페이스 ⬇️

```tsx
interface CraftBeer {
	(beer: string): string;
	brand: string;
	brew(): void;
}

function myBeer(): CraftBeer {
	let my = (function(beer: string) {}) as CraftBeer;
	my.brand = 'Beer Kitchen';
	my.brew = function() {}
	return my;
}

let brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
```