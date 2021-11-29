package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		defer r.Body.Close()
		handleConnection(w, "/")
	})

	http.HandleFunc("/io", func(w http.ResponseWriter, r *http.Request) {
		defer r.Body.Close()
		handleConnection(w, "/io")
	})

	http.HandleFunc("/cpu", func(w http.ResponseWriter, r *http.Request) {
		defer r.Body.Close()
		handleConnection(w, "/cpu")
	})
	// set listen port
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func handleConnection(w http.ResponseWriter, url string) {
	// add 2 second delay to every 10th request
	if url == "/cpu" {
		time.Sleep(2 * time.Second)
		w.Header().Add("Connection", "keep-alive")
		w.WriteHeader(200)
		fmt.Fprintf(w, "CPU Intensive Task Done!")
	} else if url == "/" {
		w.Header().Add("Connection", "keep-alive")
		w.WriteHeader(200)
		fmt.Fprintf(w, "Hello World!")
	} else if url == "/io" {
		html, _ := ioutil.ReadFile("hello.html") 
		w.Header().Add("Connection", "keep-alive")
		w.WriteHeader(200)           
		fmt.Fprintf(w, string(html))
	}
}
