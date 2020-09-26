var COUNTER = 499;
// keyboard events
// keydown, keypress, keyup

document.addEventListener("keypress", renderDom);
document.addEventListener("keypress", bang);

function renderDom(){
    console.log("Pew");
    document.querySelector("#midTop").innerHTML = COUNTER;
    COUNTER--;
}

function bang(){
    document.getElementById("audio").play();
}