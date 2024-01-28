// in case someone would pass an integer as a string; Depends on requirements. If just a number, than nbm should be 'number'.
type Numberish = number | string;

const toRoman = (nmb: Numberish, logOutput?: boolean): string => {
	const num = Number(nmb);

	if (isNaN(num)) {
		console.error('You provided not a numeric value. Please double check the value.');
		return '';
	}

	if (num < 0) {
		console.error('Please provide an integer larger than -1');
		return '';
	}

	if (num === 0) {
		if (!!logOutput) console.log('NULLA');
		return 'NULLA';
	}

	if (num > 3999) {
		console.error('Please provide an integer that is between 1 and 3999');
		return '';
	}

	if (!Number.isInteger(num)) {
		console.error('Provided number should be an integer, and should be between 1 and 3999');
		return '';
	}

	const getValues = (num: number, a: string, b: string, c: string): string => {
		const values = ['', `${a}`, `${a}${a}`, `${a}${a}${a}`, `${a}${b}`, `${b}`, `${b}${a}`, `${b}${a}${a}`, `${b}${a}${a}${a}`, `${a}${c}`, `${c}`];
		return values[num];
	}

	const numStr: string[] = num.toString().split('').reverse();
	const doneArray: string[] = [];

	numStr.forEach((item: string, index: number) => {
		const level = index;
		switch(level) {
			case 0:
				doneArray.push(getValues(Number(item), 'i', 'v', 'x'));	
				break;
			case 1:
				doneArray.push(getValues(Number(item), 'x', 'l', 'c'));	
				break;
			case 2:
				doneArray.push(getValues(Number(item), 'c', 'd', 'm'));	
				break;
			case 3:
				doneArray.push(getValues(Number(item), 'm', '', ''));	
				break;
		}
	});

	const result: string = doneArray.reverse().join('').toUpperCase();

	if (!!logOutput) console.log(result);

	return result;
}

toRoman(-1.2, true);
toRoman(0, true);
toRoman('1', true);
toRoman('0', true);
toRoman('3', true);
toRoman(10, true);
toRoman(999, true);
toRoman(1000, true);
toRoman(2999, true);
toRoman(3000, true);
toRoman(3500, true);
toRoman(3999, true);
toRoman(4000, true);
toRoman('abc', true);
