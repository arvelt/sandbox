package main

import (
	"fmt"
)

func main() {
	s := []int{0, 1, 2, 3, 4, 5}
	fmt.Println(s[2:4])      // [2 3]
	fmt.Println(s[0:len(s)]) // [0 1 2 3 4 5]
	fmt.Println(s[:3])       // [0 1 2 3]
	fmt.Println(s[3:])       // [3 4 5]
	fmt.Println(s[:])        // [0 1 2 3 4 5]
}
