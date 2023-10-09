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
  console.log("c'è");
}

//   - ALTRIMENTI stampa "Accesso negato"
else {
  console.log("non c'è");
}