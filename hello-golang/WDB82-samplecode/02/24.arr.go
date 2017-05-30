package main

import (
	"fmt"
)

func fn(arr [4]string) {
	fmt.Println(arr)
}

func main() {
	var arr1 [4]string
	var arr2 [5]string

	fn(arr1) // ok
	fn(arr2) // コンパイルエラー
}
