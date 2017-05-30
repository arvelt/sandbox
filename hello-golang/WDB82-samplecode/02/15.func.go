package main

import (
	"fmt"
)

func hello() {
	fmt.Println("hello")
}

func sum(i, j int) { // func sum(i int, j int) と同じ
	fmt.Println(i + j)
}

func main() {
	hello() // hello

	sum(1, 2) // 3
}
