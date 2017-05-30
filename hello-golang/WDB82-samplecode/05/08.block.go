package main

import (
	"time"
)

func main() {
	ch := make(chan string)
	go func() {
		time.Sleep(time.Second)
		<-ch // 1秒後にデータを読み出す
	}()
	ch <- "a" // 1秒後にデータが読み出されるまでブロック
}
