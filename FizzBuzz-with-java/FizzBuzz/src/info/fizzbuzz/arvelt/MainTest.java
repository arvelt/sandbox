package info.fizzbuzz.arvelt;

import org.junit.Test;

public class MainTest {

	@Test
	public void testIniUnderEqualsZero() {
		FizzBuzz fizzbuzz = new FizzBuzz(100);
		fizzbuzz.doFizzBuzz();
	}
	
}
