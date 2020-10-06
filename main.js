var COUNTER = 499;

document.addEventListener("keypress", renderDom);
document.addEventListener("keypress", bang);
document.addEventListener("keypress", reload);

function renderDom(){
    //console.log("Pew");
    document.querySelector("#midTop").innerHTML = COUNTER;
    COUNTER--;
}

function bang(event){
    if (event.key != 'r')
    document.getElementById("audio").play();
}

function reload(event){
    if (event.key == 'r'){
        COUNTER = 500;
        // document.getElementById("audio2").play(); Add reload sound
        document.querySelector("#midTop").innerHTML = COUNTER;
    }
}
