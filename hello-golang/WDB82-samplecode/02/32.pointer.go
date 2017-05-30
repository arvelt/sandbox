package main

import (
	"fmt"
)

func callByValue(i int) {
	i = 20 // 値を上書きする
}

func callByRef(i *int) {
	*i = 20 // 参照先を上書きする
}

func main() {
	var i int = 10
	callByValue(i) // 値を渡す
	fmt.Println(i) // 10
	callByRef(&i)  // アドレスを渡す
	fmt.Println(i) // 20
}
