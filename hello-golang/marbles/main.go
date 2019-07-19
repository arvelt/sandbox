package main

import "fmt"
import "strconv"

func main() {
	var str string
	fmt.Scan(&str)

	var sum int = 0
	for i := 0; i < 3; i++ {
		var num, _ = strconv.Atoi(str[i : i+1])
		sum = sum + num
	}
	fmt.Printf("%d\n", sum)
}
