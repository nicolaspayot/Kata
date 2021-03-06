package com.npayot.kata;

public class FizzBuzz {
	
	public String getStringFor(int number) throws IllegalArgumentException {
		if (number <= 0 || number > 100) {
			throw new IllegalArgumentException("Number was " + number + " and should be > 0 and <= 100");
		}
		
		String result = "";
		if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
			result = "FizzBuzz";
		} else if (isDivisibleByThree(number)) {
			result = "Fizz";
		} else if (isDivisibleByFive(number)) {
			result = "Buzz";
		} else {
			result = String.valueOf(number);
		}
		return result;
	}
	
	private boolean isDivisibleByThree(int number) {
		return number % 3 == 0;
	}
	
	private boolean isDivisibleByFive(int number) {
		return number % 5 == 0;
	}
}
