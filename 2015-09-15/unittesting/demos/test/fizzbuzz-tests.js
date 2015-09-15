var expect   = require("chai").expect;
var fizzbuzz = require("../app/fizzbuzz").fizzbuzz;

describe("FizzBuzz tests", function() {
	
	describe("When I pass in an empty array", function () {
		it("returns empty array", function() {
			var output = fizzbuzz([]);
			expect(output).to.eql([]);
		})
	});

	/*

	describe("When I pass in an array with one element", function () {
		it("returns an array with one element", function() {
			var output = fizzbuzz([1]);
			expect(output).to.have.length(1);
		})
	});

	describe("When I pass in an array with three elements", function () {
		it("returns an array with three elements", function() {
			var output = fizzbuzz([1,2,3]);
			expect(output).to.have.length(3);
		})
	});

	describe("When I pass in [1]", function () {
		it("returns [1]", function() {
			var output = fizzbuzz([1]);
			expect(output).to.eql([1]);
		})
	});

	describe("When I pass in [3]", function () {
		it("returns ['Fizz']", function() {
			var output = fizzbuzz([3]);
			expect(output).to.eql(['Fizz']);
		})
	});

	describe("When I pass in [1,2,3]", function () {
		it("returns [1,2,'Fizz']", function() {
			var output = fizzbuzz([1,2,3]);
			expect(output).to.eql([1,2,'Fizz']);
		})
	});

	describe("When I pass in [5]", function () {
		it("returns ['Buzz']", function() {
			var output = fizzbuzz([5]);
			expect(output).to.eql(['Buzz']);
		})
	});

	describe("When I pass in [3,5]", function () {
		it("returns ['Fizz','Buzz']", function() {
			var output = fizzbuzz([3,5]);
			expect(output).to.eql(['Fizz','Buzz']);
		})
	});

	describe("When I pass in [15]", function () {
		it("returns ['FizzBuzz']", function() {
			var output = fizzbuzz([15]);
			expect(output).to.eql(['FizzBuzz']);
		})
	});

	*/

});