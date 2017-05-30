package info.fizzbuzz.arvelt;

public class FizzBuzz {

	int max_count = 100;
	
	FizzBuzz( int count ){
		if (count < 0 ){
			this.max_count = 0 ;
		} else {			
			this.max_count = count;
		}
	}
	
	public void doFizzBuzz(){
		for ( int i = 0 ; i < max_count ; i++ ){
			if ( i % 3 == 0 && i % 5 == 0 ) {
				System.out.println("fizzbuzz");
			} 
			else if ( i % 3 == 0  ) {
				System.out.println("fizz");
			} 
			else if ( i % 5 == 0 ) {
				System.out.println("buzz");
			} else {
				System.out.println( i+1 );
			}
		}
	}
}
