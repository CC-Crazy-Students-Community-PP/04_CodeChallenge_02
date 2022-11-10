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

/***************************************************************/
/************      Vorgaben für alle Beispiele     *************/
/***************************************************************/
    // let personName = prompt( "bitte gib Deinen Namen ein: " );
    // let personAge = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );


/***************************************************************/
/************   Getränke-Challenge | Beispiel 1    *************/
/***************************************************************/
    const checkAge = true;

    let personName1 = "Sandro";
    let personAge1 = 42;

    let isBaby = ( personAge1 >= 0 && personAge1 <= 6 ) ? true : false;
    let isKid = ( personAge1 >= 6 && personAge1 <= 12 ) ? true : false;
    let isTeen = ( personAge1 >= 13 && personAge1 <= 17 ) ? true : false;
    let isAdault = ( personAge1 > 18 ) ? true : false;

    switch (checkAge) {
        case isBaby:
            console.log( personName1 + ", Du darfst mit " + personAge1 + " nur Milch trinken!" );
            break;
        case isKid:
            console.log( personName1 + ", Du darfst mit " + personAge1 + " Saft trinken!" );
            break;
        case isTeen:
            console.log( personName1 + ", Du darfst mit " + personAge1 + " schon Cola trinken!" );
            break;
        case isAdault:
            console.log( personName1 + ", Du darfst mit " + personAge1 + " auch Wein trinken!" );
            break;
        default:
            console.log( personName1 + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
            break;
    }


/***************************************************************/
/************   Getränke-Challenge | Beispiel 2    *************/
/***************************************************************/
    let personName3 = "Sandro";
    let personAge3 = 3;

    switch (true) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6:
            console.log( personName3 + ", Du darfst mit " + personAge3 + " nur Milch trinken!" );
            break;
        case 7: case 8: case 9: case 10: case 11: case 12:
            console.log( personName3 + ", Du darfst mit " + personAge3 + " schon Cola trinken!" );
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            console.log( personName3 + ", Du darfst mit " + personAge3 + " nur Milch trinken!" );
            break;
        default:
            console.log( personName3 + ", Du darfst mit " + personAge3 + " sogar Wein trinken!" );
            break;
    }

/***************************************************************/
/************   Getränke-Challenge | Beispiel 3    *************/
/***************************************************************/
let personName4 = "Sandro";
let personAge4 = 6;

switch (personAge4) {
    case (personAge4 > 0 , personAge4 < 6):
        console.log( personName4 + ", Du darfst mit " + personAge4 + " nur Milch trinken!" );
        break;
    case (personAge4 > 6 , personAge4 < 12):
        console.log( personName4 + ", Du darfst mit " + personAge4 + " nur Milch trinken!" );
        break;
    default:
        console.log( personName4 + ", Du darfst nichts trinken!" );
        break;
}


/***************************************************************/
/************   Getränke-Challenge | Beispiel 4    *************/
/***************************************************************/
let personName2 = "Sandro";
let personAge2 = 42;

if ( personAge2 >= 0 && personAge2 <= 6 ) {
    console.log( personName2 + ", Du darfst mit " + personAge2 + " nur Milch trinken!" );
} else if ( personAge2 >= 6 && personAge2 <= 12 ) {
    console.log( personName2 + ", Du darfst mit " + personAge2 + " Saft trinken!" );
} else if ( personAge2 >= 13 && personAge2 <= 17 ) {
    console.log( personName2 + ", Du darfst mit " + personAge2 + " schon Cola trinken!" );
} else if ( personAge2 > 18 ) {
    console.log( personName2 + ", Du darfst mit " + personAge2 + " auch Wein trinken!" );
} else {
    console.log( personName2 + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
}

