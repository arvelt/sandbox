package main

import (
	"fmt"
	"log"
	"net/http"
)

var empty struct{} // サイズがゼロのstruct

func getStatus(urls []string) <-chan string {
	statusChan := make(chan string, 3)
	// バッファを5に指定して生成
	limit := make(chan struct{}, 5)
	go func() {
		for _, url := range urls {
			select {
			case limit <- empty:
				// limitに書き込みが可能な場合は取得処理を実施
				go func(url string) {
					// このgoroutineは同時に5個しか起動しない
					res, err := http.Get(url)
					if err != nil {
						log.Fatal(err)
					}
					statusChan <- res.Status
					// 終わったら1つ読み出して空きを作る
					<-limit
				}(url)
			}
		}
	}()
	return statusChan
}

func main() {
	urls := []string{
		"http://example.com",
		"http://example.net",
		"http://example.org",
	}
	statusChan := getStatus(urls)

	for i := 0; i < len(urls); i++ {
		fmt.Println(<-statusChan)
	}
}
