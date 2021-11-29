#![deny(warnings)]

use warp::Filter;

#[tokio::main]
async fn main() {

    let readme = warp::get()
        .and(warp::path::end())
        .and(warp::fs::file("./hello.html"));

    let routes = readme;

    warp::serve(routes).run(([127, 0, 0, 1], 8080)).await;
}