
/* Änderungen:

Icons ansteuern und zum Auftauchen bringen


*/


let count = 0;
let countc = 0;
const icons2 = document.querySelectorAll('.icons');
    for(let icon of icons2){
        icon.style.display = 'none';
    }
const icons3 = document.querySelectorAll('.iconsc');
    for(let icon of icons3){
        icon.style.display = 'none';
    }



function computerPlay() {
   
    let values = ["schere", "stein", "papier"];
    let i = (Math.random() * 3);
    i = parseInt(i);

    if (values[i] == "schere") {
        icons3[0].style.display = 'block';
        setTimeout(() => {icons3[0].style.display = 'none';}, 1000);

    } 
    if (values[i] == "stein") {
        icons3[1].style.display = 'block';
        setTimeout(() => {icons3[1].style.display = 'none';}, 1000);
    } 
    if (values[i] == "papier") {
        icons3[2].style.display = 'block';
        setTimeout(() => {icons3[2].style.display = 'none';}, 1000);
    } 

    return values[i];

}

/// Get Player Wahl
function init() {
    let schere = document.querySelector('#schere');
    let stein = document.querySelector('#stein');
    let papier = document.querySelector('#papier');


    schere.addEventListener('click', playSchere);
    stein.addEventListener('click', playStein);
    papier.addEventListener('click', playPapier);

    
}
/// Spieler spielt Schere

function playSchere() {
    icons2[0].style.display = 'block';
    setTimeout(() => {icons2[0].style.display = 'none';}, 1000);
    let playerSelection = "schere";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
}
/// Spieler spielt Stein
function playStein() {
    icons2[1].style.display = 'block';
    setTimeout(() => {icons2[1].style.display = 'none';}, 1000);
    let playerSelection = "stein";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
}

/// Spieler spielt Papier
function playPapier() {
    icons2[2].style.display = 'block';
    setTimeout(() => {icons2[2].style.display = 'none';}, 1000);
    let playerSelection = "papier";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
   
}


/// Einzelrunde,  Spielregeln;
 function playRound(playerSelection, computerSelection) {
    let anzeigeText = document.querySelector('.anzeige');
    

 //If-Statements Regeln 
 
        if (playerSelection === "schere" && computerSelection === "stein") {
                anzeigeText.textContent="Du verlierst, Stein schlägt Schere!";
                countc ++;
                anzeige();
               check();
                
        } if (playerSelection === "schere" && computerSelection === "papier") {
               anzeigeText.textContent="Du gewinnst, schere schneidet Papier!";
               count ++;
               anzeige();
              check();
               
        } if (playerSelection === "stein" && computerSelection === "schere") {
                anzeigeText.textContent="Du gewinnst, Stein schlägt Schere.";
                count ++;
                anzeige();
                check();
                
        } if (playerSelection === "stein" && computerSelection === "papier") {
                anzeigeText.textContent="Du verlierst, Papier wickelt Stein ein.";
                countc ++;
                anzeige();
               check();
                
        } if (playerSelection === "papier" && computerSelection === "schere") {
                anzeigeText.textContent="Du verlierst. Schere schneidet Papier.";
                countc ++;
                anzeige();
                check();
               
        } if (playerSelection === "papier" && computerSelection === "stein") {
                anzeigeText.textContent="Du gewinnst. Papier wickelt Stein ein.";
                count ++;
                anzeige();
                check();
                
        } else if (playerSelection === computerSelection) {
                anzeigeText.textContent="Unentschieden!";
                anzeige();
                check();
                //return countPlayer = 0;
        }
       
       
    
        
 }

 function check() {
    let anzeiger = document.querySelector('.anzeige');
    
        if (count >= 5) {
            anzeiger.textContent="Gratuliere, du hast gewonnen!"
            setTimeout(() => {count = 0, countc = 0}, 1000);
            anzeige();
            

        }
        if (countc >= 5) {
            anzeiger.textContent="Du hast das Spiel verloren.";
            console.log("Computer gewinnt");
            setTimeout(() => {count = 0, countc = 0}, 1000);
            anzeige();
        }
 }


/// Anzeige
function anzeige() {
    let ergPlayer = document.querySelector('.erg-player');
    let ergComputer = document.querySelector('.erg-computer');

    ergPlayer.textContent = count;
    ergComputer.textContent = countc;

}
init();
  
    