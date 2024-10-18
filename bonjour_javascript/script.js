let firstName = prompt("indique ton prénom")
function sayHello(firstName, hour){
    let message = "Bonjour"+" "+ firstName+"!"
    if(hour>= 18){
        message="Bonsoir"+" "+ firstName+"!";
    }else{
    }
    document.querySelector('h1').innerText = message;
}
sayHello(firstName, 12);

