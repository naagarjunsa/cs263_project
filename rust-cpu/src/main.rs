use warp::Filter;
use std::time::Duration;
use async_std::task;

#[tokio::main]
async fn main() {
    let routes = warp::any().map(|| {     
        task::sleep(Duration::from_secs(0.25)).await;
        return "CPU Intensive task done!"});

    warp::serve(routes)
        .run(([127, 0, 0, 1], 8080))
        .await;
}