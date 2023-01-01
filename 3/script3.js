// L'oggetto Date, le funzioni setinterval e setimeout

const miaData = new Date(); // "Creo una istanza di Date, l'oggetto date inizia a contare dall'1 gennaio 1970"

const annadata = miaData.getFullYear() // Usiamo i metodi dell'oggetto Date per modificare o estrarre valori da una data

setInterval(()=>{

const container = document.getElementById('container')
const crdiv = document.createElement('div')
container.appendChild(crdiv)
let data = new Date()
crdiv.innerHTML = data.toISOString()

},5000)

setTimeout(()=>{

    const container = document.getElementById('container')
    const crdiv = document.createElement('div')
    container.appendChild(crdiv)
    let data = new Date()
crdiv.innerHTML = data.toISOString()
    },2000)

    // Operatore ternario

    let eta = prompt('Qual è la tua età','');
    let risultato = (eta < 18) ? alert('Sei minorenne') : alert('Sei maggiorenne')