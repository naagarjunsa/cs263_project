use warp::Filter;
use std::time::Duration;
use std::thread::sleep;

#[tokio::main]
async fn main() {
    let routes = warp::any().map(|| {     
                        sleep(Duration::from_millis(1000));
                        return "CPU Intensive task done!"});

    warp::serve(routes)
        .run(([127, 0, 0, 1], 8080))
        .await;
}