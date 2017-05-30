package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type Person struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"-"`
	Age     int    `json:"age"`
	Address string `json:"address,omitempty"`
	memo    string
}

func main() {
	var person Person
	b := []byte(`{"id":1,"name":"Gopher","age":5}`)
	err := json.Unmarshal(b, &person)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(person) // {1 Gopher  5  }
}
