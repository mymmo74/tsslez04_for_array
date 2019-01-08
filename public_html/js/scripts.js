/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// array per immagazzinare i nomi dei donatori
var ar_nomi = [];
// array per immagazzinare le donazioni effettuate
var ar_valori = [];

function addDonazione() {
    // carico array
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_valori.push(document.getElementById("in_valore").value);

    
    document.getElementById("div_donazioni").innerHTML = print_don();

    document.getElementById("totale").innerHTML = print_tot();
}


// funzione per stampare le persone che hanno donato
function print_don() {
    // quando il metodo mi deve ritornare qualcosa per prima cosa inizializzo la variabile e in fondo
    // metto il "return nomevariabile;"
    let text = "";

    //let miosaldo = 0;

    //let maxver = 0;

    
    for (i = 0; i < ar_nomi.length; i++) {

        text += "<b>#" + (i + 1) + "</b> --> " + ar_nomi[i] + " ha donato " + ar_valori[i]+" €<br/>";
       
    }
    

    return text;
}

// funzione che stampa il totale donato
function print_tot() {
    // quando il metodo mi deve ritornare qualcosa per prima cosa inizializzo la variabile e in fondo
    // metto il "return nomevariabile;"
    let totale = 0;

    //let miosaldo = 0;

    //let maxver = 0;

    
    for (i = 0; i < ar_nomi.length; i++) {

        totale += ar_valori[i]*1;
       
    }
    

    return totale;
}