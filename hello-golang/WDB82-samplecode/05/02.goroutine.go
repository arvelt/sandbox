package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	urls := []string{
		"http://example.com",
		"http://example.net",
		"http://example.org",
	}
	for _, url := range urls {
		// 取得処理をゴルーチンで実行する
		go func(url string) {
			res, err := http.Get(url)
			if err != nil {
				log.Fatal(err)
			}
			defer res.Body.Close()
			fmt.Println(url, res.Status)
		}(url)
	}
	// main()が終わらないように待ち合わせる
	time.Sleep(time.Second)
}
