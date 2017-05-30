package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

func main() {
	wait := new(sync.WaitGroup)
	urls := []string{
		"http://example.com",
		"http://example.net",
		"http://example.org",
	}
	for _, url := range urls {
		// waitGroupに追加
		wait.Add(1)
		// 取得処理をゴルーチンで実行する
		go func(url string) {
			res, err := http.Get(url)
			if err != nil {
				log.Fatal(err)
			}
			defer res.Body.Close()
			fmt.Println(url, res.Status)
			// waitGroupから削除
			wait.Done()
		}(url)
	}
	// 待ち合わせ
	wait.Wait()
}
