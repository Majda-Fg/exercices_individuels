let allumettes = 50
function retirerAllumettes(){
    while(allumettes> 0){
    let nbAllumettesAEnlever = Number(prompt("Combien d'allumettes souhaite-tu retirer?"))
    console.log("choix de l'utilisateur", nbAllumettesAEnlever)
    //let resteAllumettes = allumettes - nbAllumettesAEnlever
    if(nbAllumettesAEnlever>=1 && nbAllumettesAEnlever<=6){
        allumettes -= nbAllumettesAEnlever
    if(allumettes<=50 && allumettes>=0){
        console.log("il reste encore des allumettes à retirer")
    }else{
        console.log("il n'y a plus d'allumettes")
    }
    }else{
        console.log("vous ne pouvez retirer que maximum 6 allumettes")}
    console.log(allumettes,"est le nb d'allumettes")
}console.log("tu as gagné")
}
retirerAllumettes()
// DONE : boucle while tant que'allumettes n'est pas inférieur à 0, on repose la question
// rappeler la fonction à chaque prompt
// DONE : quand la boucle while s'arrete, le joueur a gagné, (en dehors de ma fonction)
// DONE : changer le type de variable en nb 


// function allumettes(nbAllumettesAEnlever){
//     console.log("nb d'allumettes à enlever:", nbAllumettesAEnlever)
// }
// allumettes(6)