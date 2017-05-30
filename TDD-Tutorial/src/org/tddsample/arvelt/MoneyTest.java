package org.tddsample.arvelt;

import static org.junit.Assert.*;

import org.junit.Test;

public class MoneyTest {

	@Test
	public void testEquals(){
		assertTrue (Money.dollar(5).equals(Money.dollar(5)));
		assertTrue (Money.fran(5).equals(Money.fran(5)));
		assertFalse (Money.dollar(5).equals(Money.dollar(6)));		
		assertFalse (Money.fran(5).equals(Money.dollar(5)));
	}
	
	@Test
	public void testCurrency(){
		assertEquals("USD", Money.dollar(1).currentcy());
		assertEquals("CHF", Money.fran(1).currentcy());
	}
	
	@Test
	public void testReduceSum(){
		Expression sum = new Sum(Money.dollar(3),Money.dollar(4));
		Bank bank = new Bank();
		Money result = bank.reduce(sum , "USD");
		assertEquals(Money.dollar(7),result);
	}
	
	@Test
	public void testReduceMoney(){
		Bank bank = new Bank();
		Money result = bank.reduce(Money.dollar(1), "USD");
		assertEquals(Money.dollar(1),result);
	}
	
	@Test
	public void testIdentityrate(){
		assertEquals(1,new Bank().rate("USD", "USD"));
	}
	
	@Test
	public void testReduceMoneyDifferentCurrency(){
		Bank bank = new Bank();
		bank.addRate("CHF","USD",2);
		Money result = bank.reduce(Money.fran(2), "USD");
		assertEquals(Money.dollar(1),result);
	}
	
	@Test 
	public void testMixedAddition(){
		Expression fiveBucks = Money.dollar(5);
		Expression tenFrancs = Money.fran(10);
		Bank bank = new Bank();
		bank.addRate("CHF", "USD", 2 );
		Money result = bank.reduce(fiveBucks.plus(tenFrancs),"USD");
		assertEquals(Money.dollar(10), result);
	}
	
	@Test
	public void testSumPlusMoney(){
		Expression fiveBucks = Money.dollar(5);
		Expression tenFrancs = Money.fran(10);
		Bank bank = new Bank();
		bank.addRate("CHF", "USD", 2 );
		Expression sum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks);
		Money result = bank.reduce(sum, "USD");
		assertEquals(Money.dollar(15),result);
	}
	
	@Test
	public void testSumTimes(){
		Expression fiveBucks = Money.dollar(5);
		Expression tenFrancs = Money.fran(10);
		Bank bank = new Bank();
		bank.addRate("CHF", "USD", 2 );
		Expression sum = new Sum(fiveBucks,tenFrancs).times(2);
		Money result = bank.reduce(sum, "USD");
		assertEquals(Money.dollar(20),result);
	}
	
	@Test
	public void testPlusSameCurrencyRenturnsMoney(){
		Expression sum = Money.dollar(1).plus(Money.dollar(1));
		assertTrue(sum instanceof Money);
	}
}
