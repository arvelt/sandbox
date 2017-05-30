package main

import (
	"time"
)

func main() {
	ch := make(chan string)
	go func() {
		time.Sleep(time.Second)
		ch <- "a" // 1秒後にデータを書き込む
	}()
	<-ch // 1秒後にデータが書き込まれるまでブロック
}
