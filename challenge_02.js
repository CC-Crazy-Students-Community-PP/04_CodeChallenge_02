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
    const checkAge = true;
    // let personName = prompt( "bitte gib Deinen Namen ein: " );
    // let personAge = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    let personName = "Sandro";
    let personAge = 42;

/***************************************************************/
/************   Getränke-Challenge | Beispiel 1    *************/
/***************************************************************/
    let isBaby = ( personAge >= 0 && personAge <= 5 ) ? true : false;
    let isKid = ( personAge >= 6 && personAge <= 12 ) ? true : false;
    let isTeen = ( personAge >= 13 && personAge <= 17 ) ? true : false;
    let isAdault = ( personAge > 18 ) ? true : false;

    switch (checkAge) {
        case isBaby:
            console.log( personName + ", Du darfst mit " + personAge + " nur Milch trinken!" );
            break;
        case isKid:
            console.log( personName + ", Du darfst mit " + personAge + " Saft trinken!" );
            break;
        case isTeen:
            console.log( personName + ", Du darfst mit " + personAge + " schon Cola trinken!" );
            break;
        case isAdault:
            console.log( personName + ", Du darfst mit " + personAge + " auch Wein trinken!" );
            break;
        default:
            console.log( personName + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
            break;
    }


/***************************************************************/
/************   Getränke-Challenge | Beispiel 2    *************/
/***************************************************************/
    if ( personAge >= 0 && personAge <= 5 ) {
        console.log( personName + ", Du darfst mit " + personAge + " nur Milch trinken!" );
    } else if ( personAge >= 6 && personAge <= 12 ) {
        console.log( personName + ", Du darfst mit " + personAge + " Saft trinken!" );
    } else if ( personAge >= 13 && personAge <= 17 ) {
        console.log( personName + ", Du darfst mit " + personAge + " schon Cola trinken!" );
    } else if ( personAge > 18 ) {
        console.log( personName + ", Du darfst mit " + personAge + " auch Wein trinken!" );
    } else {
        console.log( personName + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
    }
