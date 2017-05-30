package main

import (
	"fmt"
)

func Print(value interface{}) {
	s, ok := value.(string) // Type Assertion
	if ok {
		fmt.Printf("value is string: %s\n", s)
	} else {
		fmt.Printf("value is not string\n")
	}
}

func main() {
	Print("abc") // value is string: abc
	Print(10)    // value is not string
}
