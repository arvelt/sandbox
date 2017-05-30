package org.tddsample.arvelt;

import static org.junit.Assert.*;

import org.junit.Test;

public class FranTest {

	@Test
	public void testMultiplication() {
		Money five =Money.fran(5);
		assertEquals( Money.fran(10), five.times(2));
		assertEquals( Money.fran(15), five.times(3));
	}

	@Test
	public void testEquals(){
		assertTrue (Money.fran(5).equals(Money.fran(5)));
		assertFalse (Money.fran(5).equals(Money.fran(6)));
	}

}
