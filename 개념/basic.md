# 기본 타입
### String

```tsx
let str: string = 'hi';
```

<br>

### Number

```tsx
let num: number = 20;
```

<br>

### Boolean

```tsx
let isLoggedIn: boolean = false;
```

<br>

<br>

## Object

### Array

```tsx
let arr: number[] = [1,2,3];
let arr: Array<number> = [4,5,6];
```

<br>

### Tuple

배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식

```tsx
let arr: [string, number] = ['hi', 20];
```

정의하지 않은 타입, 인덱스로 접근할 경우 오류 발생

```tsx
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, property '5' does not exist on type [string, number]
```

<br>

### Enum

특정 값(상수)들의 집합

숫자가 기본.

```tsx
enum Avengers { Capt, IronMan, Thor }
              //  0      1      2
let hero: Avengers = Avengers.Capt;
```

인덱스 번호로도 접근 가능

```tsx
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers[0];
```

Enum의 인덱스를 사용자 편의로 변경하여 사용 가능

```tsx
enum Avengers { Capt = 2, IronMan, Thor }
                  //  2     3        4
let hero: Avengers = Avengers[2];  // Capt
let hero: Avengers = Avengers[4];  // Thor
```

```tsx
enum CardSuit { Clubs, Diamonds, Hearts, Spades, }

var card = CardSuit.Clubs

card = 'not a member of card suit'  // Error : 'CardSuit'이 열거형이기 때문
card = 0;
```

→ 열거형 값은 `number` 임

<br>

### Any

기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 활용할때 좋은 타입. 모든 타입에 대해서 허용

```tsx
let str: any = 'hi';
let num: any = 20;
let arr: any = ['a', 2, true];
```

<br>

### Void

변수에는 `undefined`와 `null`만 할당하고, 함수에는 반환값을 설정X

```tsx
let unuseful: void = undefined;
function notuse(): void {
	console.log('sth');
}
```

<br>

### Never

일반적으로 함수의 리턴 타입으로 사용

리턴 타입으로 `never` 가 사용되면, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 X

```tsx
// 항상 오류 발생
function invalid(message:string): never {
	throw new Error(message);
}

// never 타입을 결과 추론
function fail() {
	return invalid('실패');
}

// 무한 루프
function infiniteAnimate(): never {
	while ( true ) {infiniteAnimate(); }
}
```

함수의 끝에 절대 도달하지 않는다는 의미

```tsx
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
	while (true) {

	}
}
```

`never` 타입을 지정한 변수에 `never`가 아닌 타입 할당X

```tsx
let never_type: never;

// 오류 발생: 숫자 값을 never 타입 변수에 할당할 수 X
never_type = 99;

// 함수의 반환 값이 never 타입이기 때문에 오류 발생X
never_type = (function():never {throw new Error('ERROR') })();
```