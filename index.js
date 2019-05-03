let wins=0;
let losses=0;
let draws=0;

function computersmove() {
let randomint = Math.floor(Math.random()*3) // generate number 0,1,2
if (randomint === 0){
    return "rock"
}
if(randomint === 1){
    return "paper"
}
if(randomint === 2) {
    return "scissors"
}
}
function clickrock () {
let cm= computersmove();
if (cm==="rock" ) {
    updatescore("draw");
    alert("Draw! The computer chose " +cm)
}
if (cm=== "paper") {
    updatescore("lost");
    alert("You lost! The computer chose " +cm )
}
if(cm==="scissors") {
    updatescore ("won");
    alert("You Won!The computer chose " +cm)
}
}
function clickpaper () {
    let cm= computersmove();
    if (cm==="rock" ) {
        updatescore("won");
        alert("You Won!The computer chose " +cm)
    }
    if (cm=== "paper") {
        updatescore("draw");
        alert("Draw!The computer chose "+cm)
    }
    if(cm==="scissors") {
        updatescore ("lost");
        alert("You Lost!The computer chose "+cm)
    }
}
function clickscissors () {
    let cm= computersmove();
    if (cm==="rock" ) {
        updatescore("lost");
        alert("You Lost!The computer chose "+cm)
    }
    if (cm=== "paper") {
        updatescore("won");
        alert("You Won!The computer chose "+cm)
    }
    if(cm==="scissors") {
        updatescore ("draw");
        alert("Draw!The computer chose "+cm)
    }
}
function updatescore(result) {
if (result === "won") {
    wins=wins + 1;
    document.getElementById("wins").innerHTML=wins;
}
if (result ==="draw") {
    draws=draws + 1;
    document.getElementById("draw").innerHTML=draws;
}
if (result === "lost") {
    losses=losses + 1;
    document.getElementById("losses").innerHTML=losses;
}
}

document.getElementById("scissors").onclick=clickscissors;
document.getElementById("rock").onclick=clickrock;
document.getElementById("paper").onclick=clickpaper;
