/**********************************************************************/
/*********   CODE CHALLENGE 02  |  if else  |  switch case   **********/
/**********************************************************************/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

/***************************************************************/
/************   Getränke-Challenge | Beispiel 1    *************/
/***************************************************************/
const checkAge = true;

// let firstName = prompt( "bitte gib Deinen Namen ein: " );
// let personAge = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
let firstName = "Sandro";
let personAge = 3;

let isBaby = ( personAge >= 0 && personAge <= 5 ) ? true : false;
let isKid = ( personAge >= 0 && personAge <= 5 ) ? true : false;
let isTeen = ( personAge >= 0 && personAge <= 5 ) ? true : false;
let isAdault = ( personAge > 18 ) ? true : false;

switch (checkAge) {
    case isBaby:
        console.log( firstName + ", Du darfst nur Milch trinken!" );
        break;
    case isKid:
        console.log( firstName + ", Du darfst Saft trinken!" );
        break;
    case isTeen:
        console.log( firstName + ", Du darfst schon Cola trinken!" );
        break;
    case isAdault:
        console.log( firstName + ", Du darfst auch Wein trinken!" );
        break;
    default:
        console.log( firstName + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
        break;
}