package main

import (
	"fmt"
)

type Task struct {
	ID     int
	Detail string
	done   bool
}

func main() {
	var task Task = Task{
		ID:     1,
		Detail: "buy the milk",
		done:   true,
	}
	fmt.Println(task.ID)     // 1
	fmt.Println(task.Detail) // "buy the milk"
	fmt.Println(task.done)   // true
}
