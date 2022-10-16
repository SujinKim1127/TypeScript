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