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

// - Generare numero da 1 a 6 per il computer e per l'utente
let userNum = parseInt(Math.random() * (6 - 1 + 1) + 1);
console.log("L'utente ha numero : " + userNum);

let pcNum = parseInt(Math.random() * (6 - 1 + 1) + 1);
console.log("Il computer ha numero : " + pcNum);

//   - A chi è uscito il numero piu alto è il vincitore
//     - SE all'utente è uscito il numero piu alto stampare a schermo che ha  vinto
if (userNum > pcNum) {
  console.log("Ha vinto l'utente!");
}

// SE è uscito un numero pari allora è pareggio
else if (userNum === pcNum) {
  console.log("Pareggio!");
}

//- ALTRIMENTI ha vinto il computer
 else {
  console.log("Ha vinto il computer");
}

