let allumettes = 50
function retirerAllumettes(nbAllumettesàEnlever){
    nbAllumettesàEnlever = prompt("Combien d'allumettes souhaite-tu retirer?")
    if(nbAllumettesàEnlever<=50){
        console.log("il reste encore des allumettes à retirer")
    }else{
        console.log("il n'y a plus d'allumettes")
    }
}
retirerAllumettes()