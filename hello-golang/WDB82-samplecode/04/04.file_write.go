package main

import (
	"log"
	"os"
)

func main() {
	// ファイルを生成
	file, err := os.Create("./file.txt")
	if err != nil { // エラー処理
		log.Fatal(err)
	}

	// プログラムが終わったらファイルを閉じる
	defer file.Close()

	// 書き込むデータを[]byteで用意する
	message := []byte("hello world\n")

	// Write()を用いて書き込む
	_, err = file.Write(message)
	if err != nil { // エラー処理
		log.Fatal(err)
	}
}
