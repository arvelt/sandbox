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
	var task Task = Task{}
	fmt.Println(task.ID)     // 0
	fmt.Println(task.Detail) // ""
	fmt.Println(task.done)   // false
}
