"use strict";
 
let punchs = [
        "Chuck Norris ne dort pas , il attend.",
        "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
        "Chuck Norris a piraté le Pentagone. Avec un grille-pain.",
        "Quand Chuck Norris entre dans la cuisine, Brian sort.",
        "Quand Chuck Norris coupe un oignon , l'oignon pleure.",
        "Chuck Norris à un journal intime , il s'appel le Guiness des Records",
        "Tu as 5€, Chuck Norris à 5€. Chuck Norris à + d'argent que toi",
        "Le café se sert une Tasse de Chuck Norris tout les matins.",
        "Chuck Norris a réussi à trouver la page 404.",
        "Chuck Norris sait parler le braille."
    ];

let p = document.querySelector("p");
let button = document.querySelector("button");
let back = document.querySelector("body");

for(let i = 0; i < punchs.length; i++){
    console.log(punchs[i]);
}
function switchText(){
    return punchs[Math.floor(Math.random()*punchs.length)];
}
function switchColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let color = `rgb( ${r}, ${g}, ${b})`;

    button.style.backgroundColor = color;
    p.style.color = color;
    back.style.backgroundColor = color;
}

function switchAll(){
    p.innerHTML = switchText();
    switchColor();
}


button.addEventListener("click",switchAll);

