function sum(a: number, ...nums: number[]): number {
	var totalOfNums = 0;
	for (let key in nums) {
		totalOfNums += nums[key];
	}
	return a + totalOfNums;
}

console.log(sum(10, 2,3,4,5))