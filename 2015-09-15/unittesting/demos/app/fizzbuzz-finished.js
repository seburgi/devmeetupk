exports.fizzbuzz = function fizzbuzz (numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
			numbers[i] = 'FizzBuzz';
		}
		else if(numbers[i] % 3 === 0) {
			numbers[i] = 'Fizz';
		}
		else if(numbers[i] % 5 === 0) {
			numbers[i] = 'Buzz';
		}
	}

	return numbers;
}
