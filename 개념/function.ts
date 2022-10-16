function sumf(a: number, b = 100): number {
	return a + b;
}
sumf(10, 20);   // 30
// sum(10);   // error 발생 X
console.log(sumf(10));