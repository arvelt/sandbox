package main

import (
	f "fmt"
	_ "github.com/wdpress/gosample"
	. "strings"
)

func main() {
	// fmt.Println()がf.Println()になり
	// strings.ToUpper()がToUpper()なっている
	f.Println(ToUpper("hello, world"))
}
