package main

import (
	"fmt"
)

func fn(arr [4]string) {
	arr[0] = "x"
	fmt.Println(arr) // [x b c d]
}

func main() {
	arr := [4]string{"a", "b", "c", "d"}
	fn(arr)
	fmt.Println(arr) // [a b c d]
}
