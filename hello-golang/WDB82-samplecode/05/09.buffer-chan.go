package main

import (
	"fmt"
	"log"
	"net/http"
)

func getStatus(urls ...string) <-chan string {
	// バッファをURLの数（3）に
	statusChan := make(chan string, len(urls))
	for _, url := range urls {
		go func(url string) {
			res, err := http.Get(url)
			if err != nil {
				log.Fatal(err)
			}
			defer res.Body.Close()
			// main()の読み出しが遅くても
			// 3つのgoroutineはすぐに終わる
			statusChan <- res.Status
		}(url)
	}
	return statusChan
}

func main() {
	statusChan := getStatus(
		"http://example.com",
		"http://example.net",
		"http://example.org",
	)

	for i := 0; i < 3; i++ {
		fmt.Println(<-statusChan)
	}
}
