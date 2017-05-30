package main

import (
	"fmt"
)

var sum func(i, j int) = func(i, j int) {
	fmt.Println(i + j)
}

func main() {
	sum(2, 4)
}
