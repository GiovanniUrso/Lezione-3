// L'oggetto Date, le funzioni setinterval e setimeout

const miaData = new Date(); // "Creo una istanza di Date, l'oggetto date inizia a contare dall'1 gennaio 1970"

miaData.getFullYear() // Usiamo i metodi dell'oggetto Date per modificare o estrarre valori da una data

setInterval(()=>{

const container = document.getElementById('container')
const crdiv = document.createElement('div')
container.appendChild(crdiv)
crdiv.innerHTML = 'Ciao'
},5000)

setTimeout(()=>{

    const container = document.getElementById('container')
    const crdiv = document.createElement('div')
    container.appendChild(crdiv)
    crdiv.innerHTML = 'Ciao'
    },5000)