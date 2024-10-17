// ^ Mail
// * Chiedi all'utente la sua email
// * controlla che sia nella lista di chi può accedere
// * stampa un messaggio appropriato sull'esito del controllo

// let emailList = ['federico@gmail.com', 'marco@gmail.com', 'francesco@gmail.com', 'stefano@gmail.com', 'luca@gmail.com'];
// let isEmailPresent = false;
// let userEmail = prompt('Inserisci la tua email');
// for (let i = 0; i < emailList.length; i++) {
// 	if (emailList[i] === userEmail) {
// 		isEmailPresent = true;
// 	}
// }
// console.log(isEmailPresent ? 'Benvenuto' : 'Mi dispiace ma la tua mail non è nella lista');

// ^ Gioco dei dadi
// * LANCIO DEI DADI
alert('Lancia il dado');
let userNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
alert(`Il tuo numero è ${userNum}`);
alert('Il computer lancia il dado');
let computerNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
alert(`Il numero del computer è ${computerNum}`);

// * TROVIAMO IL VINCITORE
if (userNum > computerNum) {
	alert('Bravo, hai vinto!');
} else if (userNum < computerNum) {
	alert('Mi dispiace, il computer ha vinto!');
} else {
	alert('Pareggiooo');
}

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// ! Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
