package main

import (
	"fmt"
)

func main() {
	var s []string
	s = append(s, "a")
	s = append(s, "b")
	s = append(s, "c", "d")
	fmt.Println(s) // [a b c d]

	var s1, s2 []string
	s1 = append(s1, "a", "b")
	s2 = append(s2, "c", "d")
	s1 = append(s1, s2...) // s1 に s2 を追加
	fmt.Println(s1)        // [a b c d]
}
