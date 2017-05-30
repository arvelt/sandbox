package main

import (
	"fmt"
)

func swap(i, j int) (int, int) {
	return j, i
}

func main() {
	x, y := 3, 4
	x, _ = swap(x, y) // 第二戻り値を無視
	fmt.Println(x)    // 3

	swap(x, y) // コンパイル、実行ともに可能
}
