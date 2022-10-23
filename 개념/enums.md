# Enums
특정 값들의 집합을 의미하는 자료형

<br>


## 숫자형 이넘

```tsx
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right // 4
}
```

선언할때 초기값을 주면 초기값부터 차례대로 1씩 증가

```tsx
enum Direction {
  Up,   // 0 
  Down, // 1
  Left, // 2
  Right // 3
}
```

<br>

### 이넘 사용하기

```tsx
enum response {
	No = 0;
	Yes = 1,
}

function respond(recipient: string, message: Response): void {
	// ...
}

respond('Cpatain Pangyo", Response.Yes);
```

<br>

## 문자형 이넘

이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 필요

```tsx
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

<br>

## 복합 이넘 (Heterogeneous Enums)

기술적으로 이넘에 문자와 숫자 혼합하여 생성가능하지만 추천X

```tsx
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

<br>

## 런타임 시점에서의 이넘 특징

런타임시 실제 객체 형태로 존재

```tsx
enum E {
  X=3, Y, Z
}

function getX(obj: { X: number }) {
  return obj.X;
}
getX(E); // E의 X는 숫자이기 때문에 정상 동작
// 3
```

<br>

## 컴파일 시점에서의 이넘 특징

`keyof` 대신에 `keyof typeof` 사용하기

```tsx
enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
       console.log('Log level key is: ', key);
       console.log('Log level value is: ', num);
       console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
```

<br>

## 리버스 매핑 (Reverse Mapping)

숫자형 이넘에만 존재하는 특징

이넘의 키(key)로 값(value)을 얻을 수 있고 값(value)으로 키(key)를 얻을 수 있다

```tsx
enum Enum {
  A
}
let a = Enum.A; // 0:  키로 값을 획득 하기
let keyName = Enum[a]; // A: 값으로 키를 획득 하기
```