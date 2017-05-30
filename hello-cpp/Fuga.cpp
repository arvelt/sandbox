#include <iostream>
#include "Fuga.h"

Fuga::Fuga(){
	a = 5;
	std::cout << "Called Fuga constructor" << std::endl;
}

int Fuga::Func(int num)
{
    return num + a;
}

Fuga::~Fuga(){
	std::cout << "Called Fuga destructor" << std::endl;
}

