// info e colore richiesta utente 


var ilNome = prompt("il VS. nome");
var ilCognome = prompt("il VS. cognome");
var ilColore = prompt("il vs. colore preferito");






var msgExit = "ciao " + ilNome + " " + ilCognome;
var mesgColore = 'il tuo colore preferito é ' + "" + ilColore;

// print a video 

document.getElementById('dati').innerHTML = msgExit;
document.getElementById('color').innerHTML = mesgColore;