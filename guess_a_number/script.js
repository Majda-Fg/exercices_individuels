//DEUXIEME VERSION
function number(){
    let givenNumber = Number(prompt("rentrez un numéro"))
    return givenNumber}

let givenNumber1 = number()

function didIWin(givenNumber2){
    if (givenNumber2 < 22) {
        alert("Plus grand")
    }
    else if (givenNumber2 > 22) {
        alert("Plus petit")
    }
    else{
        alert("Bravo! Vous avez deviné le nombre")
    }
    return
}
didIWin(givenNumber1)

function gamePlay(){}