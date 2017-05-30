package main

import (
	"fmt"
)

func main() {
	month := map[int]string{
		1: "January",
		2: "February",
	}
	fmt.Println(month) // map[1:January 2:February]

	_, ok := month[1]
	if ok {
		// データがあった場合
	}

	delete(month, 1)
	fmt.Println(month) // map[1:January]

	for key, value := range month {
		fmt.Printf("%d %s\n", key, value)
	}
}
