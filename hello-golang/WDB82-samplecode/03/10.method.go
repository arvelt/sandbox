package main

import (
	"fmt"
)

type Task struct {
	ID     int
	Detail string
	done   bool
}

func NewTask(id int, detail string) *Task {
	task := &Task{
		ID:     id,
		Detail: detail,
		done:   false,
	}
	return task
}

func (task *Task) Finish() {
	task.done = true
}

func main() {
	task := NewTask(1, "buy the milk")
	task.Finish()
	// &{ID:1 Detail:buy the milk done:true}
	fmt.Printf("%+v", task)
}
