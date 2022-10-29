function getText<T>(text: T): T {
    return text
}

console.log(getText<string>('sujin'));  // 'sujin'
console.log(getText<number>(2022));     // 2022

function logText<T>(text: T): T {
	return text;
}

const text1 = logText<string>("Hello Generic");
const text2 = logText("Hello Generic");

console.log(text1)
console.log(text2)

function lengthText<T> (text: T[]): T[] {
    console.log(text.length);
    return text;
}

const length1 = lengthText(["Hel","lo", "Generic"]);
console.log(length1);

function arrayText<T> (text: Array<T>): Array<T> {
    console.log(text.length);
    return text;
}

const array1 = lengthText(["Hel","lo"," ARRAY ", "Generic"]);
console.log(array1);

interface LengthWise {
	length: number;
}

function logGenericsText<T extends LengthWise>(text: T): T {
	console.log(text.length);
	return text;
}

const type1 = logGenericsText("sujin");     // 5
console.log(type1);                         // sujin

// logGenericsText(10);
console.log(logGenericsText({ length: 0, value: 'hi'}))   
// 0    
// { length: 0, value: 'hi' }

function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3};

console.log(getProperty(obj, "a"))      // 1
// getProperty(obj, "z");


function getSize(arr): number {
    return arr.length;
}



/*** 인터페이스 * */
interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1: Mobile<object> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};

const m1_1: Mobile<{color: string; coupon: boolean}> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};

const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good",
};