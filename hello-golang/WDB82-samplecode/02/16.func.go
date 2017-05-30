package main

import (
	"fmt"
)

func sum(i, j int) int {
	return i + j
}

func main() {
	n := sum(1, 2)
	fmt.Println(n) // 3
}
