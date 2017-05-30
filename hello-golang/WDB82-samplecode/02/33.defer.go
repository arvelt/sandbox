package main

import (
	"os"
)

func main() {
	file, err := os.Open("./error.go")
	if err != nil {
		// エラー処理
	}
	// 関数を抜ける前に必ず実行される
	defer file.Close()
	// 正常処理
}
