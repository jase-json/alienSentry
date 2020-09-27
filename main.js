var COUNTER = 499;
// keyboard events
// keydown, keypress, keyup

document.addEventListener("keypress", renderDom);
document.addEventListener("keypress", bang);
// document.addEventListener("keypress", reload); On keypress R

function renderDom(){
    console.log("Pew");
    document.querySelector("#midTop").innerHTML = COUNTER;
    COUNTER--;
}

function bang(){
    document.getElementById("audio").play();
}

function reload(e) {
    COUNTER = 500;
    log.textContent += `${e.code}`;
    // document.getElementById("audio2").play(); Add reload sound
    document.querySelector("#midTop").innerHTML = COUNTER;
}