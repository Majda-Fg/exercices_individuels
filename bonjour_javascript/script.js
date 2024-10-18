function sayHello(firstName, hour){
    let message = "Bonjour"+" "+ firstName+"!"
    if(hour>= 18){
        message="Bonsoir"+" "+ firstName+"!";
    }else{
    }
    console.log(message)
}
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello('Beyoncé', 20);
