# 제네릭

C#, Java 등의 언어에서 **재사용성이 높은 컴포넌트**를 만들때 자주 활용되는 특징이다

**여러 가지 타입에서 동작하는 컴포넌트**를 생성하는데 사용한다

> 타입을 마치 **함수의 파라미터**처럼 사용하는 것
> 

<br>

```tsx
function getText<T>(text: T): T {
    return text
}
// 함수 안에서 사용할 타입 넘겨주기
console.log(getText<string>('sujin'));  // 'sujin'
console.log(getText<number>(2022));     // 2022
```

<br>


### 동작원리

`getText<string>('sujin')`을 호출했을때 

- 함수에서 제네릭 타입이 `<string>`이 되는 이유는 `getText()`함수를 호출할때 제네릭 값으로 `string`을 넘겼기 때문
    - `getText<string>()`
- 그리고 나서 함수의 인자로 `sujin`을 넘기면
    - `getText<string>('sujin')`
- `getText` 함수는 다음과 같이 타입을 정의한 것과 같다
    
    ```tsx
    function getText<string>(text: string): string { ... }
    ```
    

<br>

## 제네릭을 사용하는 이유

```tsx
// 인자를 하나 넘겨 받아 반환해주는 함수
function logText(text: string): string {
	return text;  // 인자와 반환값 모두 string으로 지정
}

function logText(text: any): any{
	return text;  // 인자로 어떤값이 들어오고 어떤값이 반환되는지 알 수 X
}
```

→ 이러한 문제점을 해결해주는 것이 제네릭!!!

<br>

```tsx
function logText<T>(text: T): T {
	return text;
}
```

함수를 호출할때 넘긴 타입에 대해 타입스크립트가 추정할 수 있게 된다

→ 함수의 입력값에 대한 타입과 출력값에 대한 타입이 동일한지 검증할 수 있게 된다

```tsx
const text1 = logText<string>("Hello Generic");
const text2 = logText("Hello Generic");  // 흔히 사용하는 코드
```

<br>

## 제네릭 타입 변수

![type](./img/generic%20type.png)

함수의 인자와 반환 값 타입이 `any`로 지정한것 처럼 동작한다

```tsx
function lengthText<T> (text: T[]): T[] {
    console.log(text.length);
    return text;
}

const length1 = lengthText(["Hel","lo", "Generic"]);   // 3
console.log(length1);  // [ 'Hel', 'lo', 'Generic' ]
```

→ 제네릭 타입이 배열이라서 `length` 허용

```tsx
function arrayText<T> (text: Array<T>): Array<T> {
    console.log(text.length);
    return text;
}

const array1 = lengthText(["Hel","lo"," ARRAY ", "Generic"]);   // 4
console.log(array1);        // [ 'Hel', 'lo', ' ARRAY ', 'Generic' ]
```

<br>

## 제네릭 타입

제네릭 인터페이스에 대해 알아보자

```tsx
function logText<T>(text: T): T {
	return text;
}

// 같은 의미를 가진 코드
let str1: <T>(text: T) => T = logText;
let str2: {<T>(text: T): T} = logText;
```

⬇️ 제네릭 인터페이스 코드

```tsx
interface GenericLogTextFn {
	<T>(text: T): T;
}

function logText<T>(text: T): T {
	return text;
}
let myString: GenericLogTextFn = logText;   

// 인터페이스에서 인자타입 강조하기
interface GenericLogTextFn<T> {
	(text: T): T;
}

function logText<T>(text: T): T {
	return text;
}
let myString: GenericLogTextFn<string> = logText;   
```

<br>

## 제네릭 클래스

제네릭 인터페이스와 비슷하다

```tsx
class GenericMath<T> {
	pi: T;
	sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
```

제네릭 클래스를 선언할때 클래스 이름 오른쪽에 `<T>` 붙여주기

해당 클래스로 인스턴스를 생성할 때 타입에 어떤 값이 들어갈 지 지정하기

<br>

## 제네릭 제약 조건

제네릭 함수에 타입 힌트를 줄 수 있는 방법이 있다

```tsx
function lengthText<T> (text: T): T {
    console.log(text.length);   // Error: T doesn't have .length
    return text;
}
```

→ `T`는 어떤 타입인지 구체적으로 정의되어 있지 않아서 `length` 코드에서 오류가 발생한다

해당 타입을 정의하지 않고도 `length` 속성 정도를 허용하는 방법 ⬇️

```tsx
interface LengthWise {
	length: number;
}

function logGenericsText<T extends LengthWise>(text: T): T {
	console.log(text.length);
	return text;
}

const type1 = logGenericsText("sujin");     // 5
console.log(type1);                         // sujin
```

→ 타입에 대한 강제는 아니지만 `length`에 대해 동작하는 인자만 넘겨받을 수 있다

[!condition](./img/condition.png)

```tsx
logGenericsText(10);   // 숫자 타입에는 'length'가 없으므로 error
console.log(logGenericsText({ length: 0, value: 'hi'}))
// `text.length`코드는 객체의 속성 접근과 같이 동작하므로 오류 X
// 0    
// { length: 0, value: 'hi' }
```

<br>

### 객체의 속성을 제약하는 방법

두 객체를 비교할때 제네릭 제약 조건을 사용할 수 있다

```tsx
function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3};

console.log(getProperty(obj, "a"))      // 1
getProperty(obj, "z");     // error
```

[!obj](./img/obj.png)

제네릭을 선언할 때 `<O extends keyof T>` 부분에서 첫번째 인자로 받는 객체 없는 속성들은 접근할 수 없도록 제한