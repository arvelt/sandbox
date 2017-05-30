package main

import (
	"fmt"
)

func main() {
	var month map[int]string = map[int]string{}

	month[1] = "January"
	month[2] = "February"
	fmt.Println(month) // map[1:January 2:February]
}
