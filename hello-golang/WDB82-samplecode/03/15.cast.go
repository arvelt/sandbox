package main

import (
	"fmt"
)

func main() {
	var i uint8 = 3
	var j uint32 = uint32(i) // uint8 -> uint32
	fmt.Println(j)           // 3

	var s string = "abc"
	var b []byte = []byte(s) // string -> []byte
	fmt.Println(b)           // [97 98 99]

	// cannot convert "a" (type string) to type int
	// a := int("a")
}
