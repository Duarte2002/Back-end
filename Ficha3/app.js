function started(){
    console.log("Download Started");

}


function update(progress){
    console.log("Download at " + progress + "%");

}

function completed(){
    console.log("Download Finish");

}


function performDownload(started_fn,update_fn,completed_fn){
    started_fn();
    for (var progress = 0; progress <= 100; progress = progress+10) {
        update_fn(progress);
        
    }
    completed_fn();

}

//performDownload(started, update, completed);

var ArrayUtils= require ("./ArrayUtils");

var array=[1,2,3,4,5];
var array1=[1,2,3,4,5,6];

console.log(ArrayUtils.concatenate(array,array1));