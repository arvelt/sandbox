package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	// ファイルを開く
	file, err := os.Open("./file.txt")
	if err != nil { // エラー処理
		log.Fatal(err)
	}

	// プログラムが終わったらファイルを閉じる
	defer file.Close()

	// 12byte格納可能なスライスを用意する
	message := make([]byte, 12)

	// ファイル内のデータをスライスに読み出す
	_, err = file.Read(message)
	if err != nil { // エラー処理
		log.Fatal(err)
	}

	// 文字列にして表示
	fmt.Print(string(message))
}
