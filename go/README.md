# **Concurrency in Go**

## **Concurrency vs Parallelism...**


Before getting into how to use concurrency as a feature in GO, it helps us to clear out the difference between Concurrency and Paralleism. 

Concurrency is about dealing with a lot of things at once. It is about structuring a big task which involves lot of other interdependent tasks in it.

Paralleism is about doing a lot of things at once. It is about faster execution of a independent task.

---

## **Go supports Concurrency**

Go provides the following features to help concurrent programming. 

- **GoRoutines** for Concurrent Execution.

- **Channels** for synchronization and messaging.

- **Select** for multi-way concurrent control.
  
---

### **GoRoutines**

A goroutine is a function running independently in the same address space as other goroutines

```go
f("hello", "world") // f runs; we wait
```
```go
go f("hello", "world") // f starts running
g() // does not wait for f to return
```

An example of how running concurrent flows of execution is made easy to use with the go keyword before the function call. They are lighter and cheaper than threads.

[Here](coroutine-example.go) is a link to a full program demonstrating use of goroutines.

---
### **Channels**

Channels are typed values which assist in synchronizing goroutines. It also allows sharing of information between goroutines.


``` go
timerChan := make(chan time.Time)
go func() {
    time.Sleep(deltaT)
    timerChan <- time.Now() // send time on timerChan
}()
// Do something else; when ready, receive.
// Receive will block until timerChan delivers.
// Value sent is other goroutine's completion time.
completedAt := <-timerChan
```

Go also supports buffered channels, where the capacity of the channel can be defined based on the requirement.

[Here](channel-example.go) is the link to a full program to demonstrate use of channels.

---
### **Select**

The select statement is like a switch, but the decision is based on ability to communicate rather than equal values.

``` go
select {
case v := <-ch1:
    fmt.Println("channel 1 sends", v)
case v := <-ch2:
    fmt.Println("channel 2 sends", v)
default: // optional
    fmt.Println("neither channel was ready")
}
```

[Here](select-example.go) is a sample program demostrating use of Go Select keyword.

---

###  Resources referred

- [Great Visualising for Go Blog](https://divan.dev/posts/go_concurrency_visualize/)
- [Introduction to Go Concurrency](https://talks.golang.org/2012/waza.slide)
- [Talk on Concurrency in Go](https://youtu.be/f6kdp27TYZs)
- [A Tour of Go Concurrency](https://tour.golang.org/concurrency/1)

---
  

