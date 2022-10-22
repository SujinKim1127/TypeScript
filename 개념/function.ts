function sumf(a: number, b = 100): number {
	return a + b;
}
sumf(10, 20);   // 30
// sum(10);   // error 발생 X
console.log(sumf(10));


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
UIElement.addClickListener(handler.onClick);   	// error!

let ui: UIElement = {
	addClickListener(onclick);
}
ui.addClickListener(handler.onClick);			// error!

class Handler2 {
	info: string;
	onClick(this: void, e: Event) {
			// `this`의 타입이 void이기 때문에 여기서 `this` 사용 X
			console.log('clicked!');
	}
}

let handler2 = new Handler2();
UIElement.addClickListener(handler2.onClick);