function task(){
    let start = Date.now();
    while(Date.now() - start < 4000){
        //Simulating a long-running process

    }
    postMessage('This is from a webworker');
}

task();