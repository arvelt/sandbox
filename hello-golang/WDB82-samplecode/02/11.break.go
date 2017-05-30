package main

import (
	"fmt"
)

func main() {
	n := 0
	for {
		n++
		if n > 10 {
			break // ループを抜ける
		}
		if n%2 == 0 {
			continue // 偶数なら次の繰り返しに移る
		}
		fmt.Println(n) // 奇数のみ表示
	}
}
