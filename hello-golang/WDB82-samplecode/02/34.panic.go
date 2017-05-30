package main

import (
	"fmt"
	"log"
)

func main() {
	defer func() {
		err := recover()
		if err != nil {
			// runtime error: index out of range
			log.Fatal(err)
		}
	}()

	a := []int{1, 2, 3}
	fmt.Println(a[10]) // パニックが発生
}
