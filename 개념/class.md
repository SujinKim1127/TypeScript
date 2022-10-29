# 클래스
## readonly

접근만 가능해진다!

```tsx
class Developer {
	readonly name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}	

let john = new Developer("John");
john.name = "John"  // error: name is readonly
```

`constructor` 함수에 초기 값 설정 로직을 넣어줘야 하므로 

아래와 같이 인자에 `readonly` 키워드를 추가해서 코드를 줄일 수 있다

```tsx
class Developer {
	readonly name: string;
	constructor(readonly name: string){
	}
}
```

<br>

## Accessor

TypeScript는 객체의 특정 속성의 접근과 할당에 대해 제어가 가능하다

이때, 해당 객체는 클래스로 생성한 객체이어야 한다

```tsx
class Developer {
	name: string;
}
const josh = new Developer();
josh.name = 'Josh Bolton';
```

→ 클래스로 생성한 객체의 `name` 속성에 `Josh Bolton` 이라는 값을 대입

→ `josh`라는 객체의 `name` 속성은 `Josh Bolton` 이라는 값을 가진다

<br>

`name` 속성에 제약 사항을 추가하고 싶다면

아래와 같이 `get`과 `set`을 활용

```tsx
class Developer {
	private name: string;
	
	get name(): string {
		return this.name;
	}

	set name(newValue: string) {
		if (newValue && newValue.length > 5) {
			throw new Error("이름이 너무 길다");
		}
		this.name = newValue;
}
const josh = new Developer();
josh.name = 'Josh Bolton';     // Error
josh.name = 'Josh';
```

> 만약 `get`만 선언하고 `set`을 선언하지 않으면 자동으로 `readonly`로 인식된다
> 

<br>

## Abstract Class

- 인터페이스와 비슷하지만 다르다.
- 특정 클래스의 상속 대상이 되는 클래스
- 상위 레벨에서 속성, 메서드의 모양을 정의

```tsx
abstract class Developer {
	abstract coding(): void;  // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현
	drink(): void {
		console.log('drink sth');
	}
}

class FrontEndDeveloper extends Developer {
	coding(): void {
		// Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
		console.log('develop web');
	}
	design(): void {
		console.log('design web');
	}
}

const dev = new Developer();  // error: cannot create an instance of an abstract class
const josh = new FrontEndDeveloper();
josh.coding();  // develop web
josh.drink();   // drink sth
josh.design();  // design web
```