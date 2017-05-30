#include <iostream>
#include "Fuga.h"

using namespace std;


int square(int x)
{
    return x * x;
}

int main()
{
    cout << "Hello World" << endl;
    cout << square(3) << endl;

	//Pointer and Adress
    int a;
    int *p = &a;

    a = 0;
	cout << " a = " <<  a << endl
		 << "*p = " << *p << endl;

    *p = 5;
	cout << " a = " <<  a << endl
    	 << "*p = " << *p << endl;


	// Reference
    int hoge;
    int& rhoge = hoge;

    hoge = 0;
    cout << "hoge  = " << hoge << endl
    	 << "rhoge  = " << rhoge << endl << endl;

    rhoge = 100;
    cout << "hoge  = " << hoge << endl
    	 << "rhoge  = " << rhoge << endl << endl;


	Fuga fuga;
	cout << "Call fuga class -> " << fuga.Func(5) << endl;


	Fuga *newFuga = new Fuga; //This call Fuga's destructor
	cout << "Call newFuga class -> " << newFuga->Func(5) << endl;

	return 0;
}


