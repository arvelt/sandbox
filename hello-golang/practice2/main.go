package main

import (
	"fmt"
)

func main() {
	var num1, num2 int
	fmt.Scan(&num1)
	fmt.Scan(&num2)
	if (num1*num2)%2 == 0 {
		fmt.Printf("Even\n")
	} else {
		fmt.Printf("Odd\n")
	}
}
