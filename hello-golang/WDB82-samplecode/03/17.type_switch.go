package main

import (
	"fmt"
)

type Stringer interface {
	String() string
}

func Print(value interface{}) {
	switch v := value.(type) {
	case string:
		fmt.Printf("value is string: %s\n", v)
	case int:
		fmt.Printf("value is string: %d\n", v)
	case Stringer:
		fmt.Printf("value is stringer: %s\n", v)
	}
}

func main() {
	Print("abc") // value is string: abc
	Print(10)    // value is string: 10
}
