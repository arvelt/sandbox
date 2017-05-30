package main

import (
	"fmt"
)

func swap(i, j int) (int, int) {
	return j, i
}

func main() {
	x, y := 3, 4
	x, y = swap(x, y)
	fmt.Println(x, y) // 4, 3

	// x = swap(x, y)    // コンパイルエラー
}
