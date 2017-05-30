package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func getStatus(urls ...string) chan string {
	statusChan := make(chan string)
	for _, url := range urls {
		go func() {
			res, err := http.Get(url)
			if err != nil {
				log.Fatal(err)
			}
			statusChan <- res.Status
		}()
	}
	return statusChan
}

func main() {
	statusChan := getStatus(
		"http://example.com",
		"http://example.net",
		"http://example.org",
	)

	// 1 秒後に値が読み出せる channel
	timeout := time.After(time.Second)
LOOP:
	for {
		select {
		case status := <-statusChan:
			fmt.Println(status) // 受信したデータを表示
		case <-timeout:
			break LOOP // この for-select を抜ける
		}
	}
}
