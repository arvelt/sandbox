package main

import (
	"errors"
	"fmt"
	"log"
)

func div(i, j int) (int, error) {
	if j == 0 {
		// 自作のエラーを返す
		return 0, errors.New("divied by zero")
	}
	return i / j, nil
}

func main() {
	n, err := div(10, 0)
	if err != nil {
		// エラーを出力しプログラムを終了する
		log.Fatal(err)
	}
	fmt.Println(n)
}
