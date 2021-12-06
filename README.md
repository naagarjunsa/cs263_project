# Concurrency in Programming Languages

## Summary
This repo is for cs263 Runtime Systems Project for Fall 2021. 
This project builds and benchmarks a concurrent web servers in Rust, Go and JS with NodeJS. We also aim to survey the support each language provides for ease of development of concurrent tasks and the reasons for such support and brief overview of how they are implemented under the hood.
We also benchmark the out of the box server implementations with baseline, I/O intensive and CPU intensive tasks.
---

## Project Timeline


### Week One
 1. Document the difference between concurrency and paralleism.
 2. Study and document the features provided by GO programming Language for concurrency.
 3. Develop a Concurrent Web Server in Go.


### Week Two
 1. Make the Go web Server support I/O and CPU Intensive Tasks.
 2. Benchmark the Latency and Throughput for each concurrent level and server instance.


### Week Three
 1. Study and document the features provided by JS programming Language for concurrency.
 2. Develop a Concurrent Web Server in JS.

### Week Four
 1. Make the JS web Server support I/O and CPU Intensive Tasks.
 2. Benchmark the Latency and Throughput for each concurrent level and server instance.

### Week Five
 1. Study and document the features provided by Rust programming Language for concurrency.
 2. Develop a Concurrent Web Server in Rust.


### Week Six
 1. Make the Rust web Server support I/O and CPU Intensive Tasks.
 2. Benchmark the Latency and Throughput for each concurrent level and server instance.

---

## How to Run Tests

### Run GO server


```
cd go/go-web-server
go build main.go
./main
```

### Run JS server

```
cd js
node test.js
```
###  Run Rust Baseline  Server

```
cd rust-simple
cargo build --release
cargo run --release
```
### Run Rust I/O Intensive Server

```
cd rust-io
cargo build --release
cargo run --release
```

### Run Rust CPU Intensive Server

```
cd rust-cpu
cargo build --release
cargo run --release
```


### Run Benchmarking

Run the server; note down the port
```
ab -c CONCURRENCY_LEVEL -n REQUESTS -r URL:PORT/RESOURCE
```

---