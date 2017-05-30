package main

import (
	"fmt"
)

type Task struct {
	ID     int
	Detail string
	done   bool
}

func Finish(task Task) {
	task.done = true
}

func main() {
	task := Task{done: false}
	Finish(task)
	fmt.Println(task.done) // falseのまま
}
