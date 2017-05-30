package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
)

type Person struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"-"`
	Age     int    `json:"age"`
	Address string `json:"address,omitempty"`
	memo    string
}

func main() {
	// ファイルを開く
	file, err := os.Open("./person.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// データを書き込む変数
	var person Person

	// デコーダの取得
	decoder := json.NewDecoder(file)

	// JSONデコードしたデータの書き込み
	err = decoder.Decode(&person)
	if err != nil {
		log.Fatal(err)
	}

	// 読みだした結果の表示
	fmt.Println(person)
}
