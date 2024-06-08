let button = document.querySelector('#comp-task');
let content = document.querySelector('#content');
let changeColour = document.querySelector('#change-background');
let isBackgroundColourWhite = true;
let body = document.body;



changeColour.addEventListener('click', function(){
    if (isBackgroundColourWhite){
        body.style.backgroundColor = 'white';
    }else{
        body.style.backgroundColor = '#20a864';
    }

    isBackgroundColourWhite = !isBackgroundColourWhite;
})



function startWebWorker(){
    if(typeof(Worker) !== 'undefined'){
        if(typeof(worker) == 'undefined'){
            worker = new Worker('worker.js');
            console.log('initializing worker')
            worker.onmessage = function(event){
                content.textContent = event.data;
            }
            worker.onerror = function(event){
            console.error('Error in Worker: ', event.message);        
            }  
        }else{
            console.log('Sorry, your browser does not support Web Workers')
        }
    }
}
button.addEventListener('click', function(){
    startWebWorker();
    console.log('starting webworker');
})

