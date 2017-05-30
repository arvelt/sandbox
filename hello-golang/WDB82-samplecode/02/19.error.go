package main

import (
	"os"
)

func main() {
	file, err := os.Open("hello.go")
	if err != nil {
		// エラー処理
		// returnなどで処理を別の場所に抜ける
	}

	// fileを用いた処理
}
