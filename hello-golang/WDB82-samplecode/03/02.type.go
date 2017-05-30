package main

type ID int
type Priority int

func ProcessTask(id ID, priority Priority) {
}

func main() {
	var id ID = 3
	var priority Priority = 5
	ProcessTask(priority, id) // コンパイルエラー
}
