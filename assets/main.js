const koerpergroesseFeld = document.querySelector("#size"); 
const alterFeld = document.querySelector("#age");
const gewichtFeld = document.querySelector("#weight");
const geschlechtFeld = document.querySelector("#male"); 
const aktivitaetFeld = document.querySelector("#actions");

const outputGrundKCAL = document.querySelector(".outputGrundKCAL");
const outputGrundKJ = document.querySelector(".outputGrundKJ");
const outputGesamtKCAL = document.querySelector(".outputGesamtKCAL");
const outputGesamtKJ = document.querySelector(".outputGesamtKJ");

const maleConst = 66.47;
const femaleConst = 655.1;
const KJkonstante = 4.184;


//Ersetzt Punkt und Komma in einem String (1,74m || 1.74m => 174cm)
const replaceSymbols = (symbol) => {
    if(symbol.includes(".") || symbol.includes(",")){
        symbol = symbol.replace(".","");
        symbol = symbol.replace(",","");  
    }
    return Number(symbol);        
}


const calcKalos = () => {
    let size = replaceSymbols(koerpergroesseFeld.value);
    let age = Number(alterFeld.value);
    let weight = Number(gewichtFeld.value);
    let gender = true;
    geschlechtFeld.checked ? gender = true : gender = false; //true = checkbox male || false = checkbox female
    let action = Number(aktivitaetFeld.value); // 0.95 | 1.2 | 1.5 | 1.7 | 1.9 | 2.2

    if(isNaN(size) || isNaN(weight)){ //wenn size oder weight keine Zahlen sind, brech ab
        outputGrundKCAL.innerHTML = "Bitte gibt gültige Zahlen ein";
        return;
    }

    let gesamtKCAL;
    let gesamtKJ;
    let grundKCAL;
    let grundKJ;
        
    if(gender){ //checkbox = male
        grundKCAL = (maleConst + (13.7 * weight) + (5* size ) - (6.8 * age)).toFixed(2);

    } else{ //checkbox = female
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