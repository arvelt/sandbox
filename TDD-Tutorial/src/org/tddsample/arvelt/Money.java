package org.tddsample.arvelt;

class Money implements Expression {
	protected int amount ;
	protected String currency ;

	public Money(int ammount, String currency) {
		this.amount = ammount;
		this.currency = currency;
	}

	public boolean equals( Object object ){
		Money money = (Money) object ;
		//return amount == money.amount && getClass().equals(money.getClass());
		return amount == money.amount && currentcy().equals(money.currentcy());
	}

	public static Money dollar(int amount) {
		return new Money(amount,"USD");
	}
	
	public static Money fran(int amount) {
		return new Money(amount,"CHF");
	}
	
	public String currentcy() {
		return currency;
	}
	
	public Expression times(int multiplier) {
		return new Money(this.amount * multiplier,currency);
	}
	
	public String toString(){
		return amount + " " + currency ;
	}

	public Expression plus(Expression addend) {
		return new Sum(this,addend);
	}
	
	public Money reduce (Bank bank , String to){
		int rate = bank.rate(currency , to );
		return new Money(amount/rate , to) ;
	}
}
