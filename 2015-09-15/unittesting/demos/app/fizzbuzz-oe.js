function Conversion(multipliers, output){
	this.multipliers = multipliers;
	this.output = output;
}
Conversion.prototype = (function(){
	function isMultipleOf(number, multiplier) {
		return number % multiplier === 0;
	}

	function matches (number) {
		for (var i = 0; i < this.multipliers.length; i++) {
			if(!isMultipleOf(number, this.multipliers[i])) {
				return false;
			}
		};

		return true;
	}

	return {
		matches: matches
	};
}());

exports.fizzbuzz = function fizzbuzz (numbers) {
	var conversions = [
		new Conversion([3,5], 'FizzBuzz'),
		new Conversion([3], 'Fizz'),
		new Conversion([5], 'Buzz')
	];

	for (var i = 0; i < numbers.length; i++) {
		for (var n = 0; n < conversions.length; n++) {
			if(conversions[n].matches(numbers[i])){
				numbers[i] = conversions[n].output;
				break;
			}
		}
	};

	return numbers;
}
