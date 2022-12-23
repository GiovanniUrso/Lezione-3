//Casting, Keywords: prompt e alert
let promptstandard = (prompt('Inserisci qualcosa', ''))
let mioPrompt = Number(prompt('Inserisci un numero', '')) // Faccio casting qundi conversione forzata di tipo ad un valore


if(isNaN(mioPrompt)){// Controllo se il valore inserito è un numero
    alert('inserisci un numero valido')// ALERT comando particolare di javascript, ferma l'esecuzione del codice!
}else{
const b = document.getElementById('container')// Prendo il container

b.innerHTML = mioPrompt.toString()// CI stampo dentro il valore inserito nel prompt ATTENZIONE! innerHTML vuole in ingresso una stringa quindi forzo la conversione
}

