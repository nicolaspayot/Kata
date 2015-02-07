package com.npayot.kata;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;


/**
 * Unit test for FizzBuzz.
 */
public class FizzBuzzTest {
	
	private FizzBuzz fizzBuzz;
	
	private static final String FIZZ 		= "Fizz";
	private static final String BUZZ 		= "Buzz";
	private static final String FIZZ_BUZZ 	= "FizzBuzz";
    
    @Before
    public void setUp() {
    	fizzBuzz = new FizzBuzz();
    }

    @Test
    public void aNumberDivisibleByThreeShouldReturnFizz() {
    	assertEquals(fizzBuzz.getStringFor(3), FIZZ);
    	assertEquals(fizzBuzz.getStringFor(9), FIZZ);
    }
    
    @Test
    public void aNumberDivisibleByFiveShouldReturnBuzz() {
    	assertEquals(fizzBuzz.getStringFor(5), BUZZ);
    	assertEquals(fizzBuzz.getStringFor(25), BUZZ);
    }
    
    @Test
    public void aNumberDivisibleByThreeAndFiveShouldReturnFizzBuzz() {
    	assertEquals(fizzBuzz.getStringFor(15), FIZZ_BUZZ);
    	assertEquals(fizzBuzz.getStringFor(30), FIZZ_BUZZ);
    }
    
    @Test
    public void anyOtherNumberShouldReturnItsStringValue() {
    	assertEquals(fizzBuzz.getStringFor(1), String.valueOf(1));
    	assertEquals(fizzBuzz.getStringFor(2), String.valueOf(2));
    	assertEquals(fizzBuzz.getStringFor(58), String.valueOf(58));
    	assertEquals(fizzBuzz.getStringFor(83), String.valueOf(83));
    	assertEquals(fizzBuzz.getStringFor(97), String.valueOf(97));
    }
    
    @Test(expected=IllegalArgumentException.class)
    public void aNumberBellowOneShouldThrowIllegalArgumentException() {
    	fizzBuzz.getStringFor(0);
    }
    
    @Test(expected=IllegalArgumentException.class)
    public void aNumberAboveHundredShouldThrowIllegalArgumentException() {
    	fizzBuzz.getStringFor(101);
    }
}
