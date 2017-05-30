package main

import (
	"fmt"
)

var foo, bar, buz string = "foo", "bar", "buz"

var (
	a string = "aaa"
	b        = "bbb"
	c        = "ccc"
	d        = "ddd"
	e        = "eee"
)

func main() {
	// どちらの書き方も同じ意味
	// var message string = "hello world"
	message := "hello world"
	fmt.Println(message)
}
