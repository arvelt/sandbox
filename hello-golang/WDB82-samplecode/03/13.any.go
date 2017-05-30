package main

type Any interface {
}

// func Do(e Any) {
func Do(e interface{}) {
	// do something
}

func main() {
	Do("a")
}
