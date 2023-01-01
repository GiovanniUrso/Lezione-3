//Funzioni con parametri



const promptnome = prompt('Inserisci il tuo nome','');
const prompteta = Number(prompt('Inserisci la tua età',''))

datiAnagrafici(promptnome,prompteta)

function datiAnagrafici(nomeinserito, etainserita){
 const container = document.getElementById('container')
 container.innerHTML = `Il tuo nome è ${nomeinserito} e hai ${etainserita} anni `

}


function datiAnagrafici2(nome,eta)
{
 const container = document.getElementById('container')
 let miaStringa = `Il tuo nome è ${nome} e hai ${eta} anni `
 return miaStringa;

}



function mostraDatiEIndirizzo(){
    const container2 = document.getElementById('container2');
    container2.innerHTML = `${datiAnagrafici2(prompt('Inserisci il tuo nome','').toString(),
    Number(prompt('Inserisci la tua età','')))} e abiti in via ${prompt('Inserisci il tuo indirizzo','').toString()} `

}




