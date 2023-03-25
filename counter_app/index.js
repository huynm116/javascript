let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count++;
    countEl.innerText = count;
}

//function save() log out the count when it's called
function save(){
    let temp = count + " - "
    saveEl.textContent += temp
    countEl.innerText = 0
    count = 0  //countEl.innerText la cai hien thi tren html, count dai dien cho countEl.innerText trong JS
}