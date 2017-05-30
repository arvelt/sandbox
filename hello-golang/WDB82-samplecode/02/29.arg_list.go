package main

import (
	"fmt"
)

func sum(nums ...int) (result int) {
	// numsは[]int型
	for _, n := range nums {
		result += n
	}
	return
}

func main() {
	fmt.Println(sum(1, 2, 3, 4)) // 10
}
