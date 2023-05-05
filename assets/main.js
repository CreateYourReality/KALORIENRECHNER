const koerpergroesse = document.querySelector("#size"); 
const alter = document.querySelector("#age");
const gewicht = document.querySelector("#weight");
const geschlecht = document.querySelector("#male"); 
const aktivitaet = document.querySelector("#actions");

const outputGrundKCAL = document.querySelector(".outputGrundKCAL");
const outputGrundKJ = document.querySelector(".outputGrundKJ");
const outputGesamtKCAL = document.querySelector(".outputGesamtKCAL");
const outputGesamtKJ = document.querySelector(".outputGesamtKJ");

const maleConst = 66.47;
const femaleConst = 655.1;
const KJkonstante = 4.184;


const replaceSymbols = (symbol) => {
    if(symbol.includes("."))
        symbol = symbol.replace(".","");

    if(symbol.includes(","))
        symbol = symbol.replace(",","");  

    return Number(symbol);        
}


const replaceKomma = (gewicht) =>{
    if(gewicht.includes(","))
        gewicht = gewicht.replace(",",".");

  return Number(gewicht);
}


const calcKalos = () => {
    let size = replaceSymbols(koerpergroesse.value);
    let age = Number(alter.value);
    let weight = replaceKomma(gewicht.value);
    let gender = true;
    geschlecht.checked ? gender = true : gender = false; //true male
    let action = Number(aktivitaet.value);

    if(isNaN(size) || isNaN(weight)){
        outputGrundKCAL.innerHTML = "Bitte gibt gültige Zahlen ein";
        return;
    }

    let gesamtKCAL;
    let gesamtKJ;
    let grundKCAL;
    let grundKJ;
        
    if(gender){ //male
        grundKCAL = (maleConst + (13.7 * weight) + (5* size ) - (6.8 * age)).toFixed(2);

    } else{ //female
        grundKCAL = (femaleConst + (9.6 * weight) + (1.8 * size ) - (4.7 * age)).toFixed(2);
    }

    grundKJ = (grundKCAL * KJkonstante).toFixed(2);
    gesamtKCAL = (grundKCAL * action).toFixed(2);
    gesamtKJ = (gesamtKCAL * KJkonstante).toFixed(2);

    outputGrundKCAL.innerHTML = grundKCAL + " KCAL";
    outputGrundKJ.innerHTML = grundKJ + " KJ";
    outputGesamtKCAL.innerHTML = gesamtKCAL + " KCAL";
    outputGesamtKJ.innerHTML = gesamtKJ + " KJ";
}