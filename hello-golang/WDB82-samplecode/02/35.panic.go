package main

import (
	"errors"
	"fmt"
	"log"
)

func main() {
	defer func() {
		err := recover()
		if err != nil {
			// runtime error: index out of range
			log.Println(err)
		}
	}()

	a := []int{1, 2, 3}
	for i := 0; i < 10; i++ {
		if i > len(a) {
			panic(errors.New("index out of range"))
		}
		fmt.Println(a[i])
	}
}
