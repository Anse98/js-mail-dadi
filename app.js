// EMAIL

// - Creare un array di email
const emails = [
  "lorenzo@gmail.com",
  "barbara@gmail.com",
  "gennaro@gmail.com",
  "adamo@gmail.com",
  "fabrizio@gmail.com",
]

//   - Chiedere all'utente la sua email
const userMail = prompt("Inserisci la tua email");

//   - SE la mail è nell'array allora stampa "Accesso autorizzato"
if (emails.includes(userMail)) {
  console.log("Accesso autorizzato");
}

//   - ALTRIMENTI stampa "Accesso negato"
else {
  console.log("Accesso negato");
}

// DADI

// Creo un bottone che mi tira i dadi 
const diceButton = document.getElementById("dice-btn");

// Do una funzione a quel bottone quando viene premuto
diceButton.addEventListener("click", function(){
  
  // - Generare numero da 1 a 6 per l'utente 
const userNum = parseInt(Math.random() * (6 - 1 + 1) + 1);
const userNumber = document.querySelector(".user-number");
userNumber.innerHTML =" "+ userNum;

// - Generare numero da 1 a 6 per il computer
const pcNum = parseInt(Math.random() * (6 - 1 + 1) + 1);
const pcNumber = document.querySelector(".pc-number");
pcNumber.innerHTML = " "+ pcNum;

//- A chi è uscito il numero piu alto è il vincitore
//- SE all'utente è uscito il numero piu alto stampare a schermo che ha  vinto
const win = document.querySelector(".win");

if (userNum > pcNum) {
  win.innerHTML = "Hai vinto te!";
}

// SE è uscito un numero pari allora è pareggio
else if (userNum === pcNum) {
  win.innerHTML = "Hai pareggiato!";
}

//- ALTRIMENTI ha vinto il computer
 else {
  win.innerHTML = "Ha vinto il computer!";
}
})


