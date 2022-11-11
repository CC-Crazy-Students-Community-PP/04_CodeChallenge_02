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
*/

/***************************************************************/
/************   Getränke-Challenge | Beispiel 1    *************/
/***************************************************************/
    const checkAge = true;

    let personName1 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge1 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );

    let isBaby = ( personAge1 >= 0 && personAge1 <= 5 ) ? true : false;
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
    let personName2 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge2 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );

    switch ( true ) {
        case ( personAge2 >= 0, personAge2 <= 5 ):
            console.log( personName2 + ", Du darfst mit " + personAge2 + " nur Milch trinken!" );
            break;
        case ( personAge2 >= 6, personAge2 <= 12 ):
            console.log( personName2 + ", Du darfst mit " + personAge2 + " Saft trinken!" );
            break;
        case ( personAge2 >= 13, personAge2 <= 17 ):
            console.log( personName2 + ", Du darfst mit " + personAge2 + " schon Cola trinken!" );
            break;
        case ( personAge2 >= 18 ):
            console.log( personName2 + ", Du darfst mit " + personAge2 + " auch Wein trinken!" );
            break;
        default:
            console.log( personName2 + ", Du darfst gar nichts trinken!" );
            break;
    }

/*
    Hier als Beispiel wurde gezeigt, dass Variablen auch Komma separiert
    in Abfragen verwendet werden können.
    DAS IST ABER NUR IN JAVASCRIPT SO.
*/


/***************************************************************/
/************   Getränke-Challenge | Beispiel 3    *************/
/***************************************************************/
    personName3 = prompt( "bitte gib Deinen Namen ein: " );
    personAge3 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    personDrink3 = null;

    switch ( true ) {
        case ( personAge3 >= 0 && personAge3 <= 5 ):
            personDrink3 = "nur Milch";
            break;
        case ( personAge3 >= 6 && personAge3 <= 12 ):
            personDrink3 = "Saft";
            break;
        case ( personAge3 >= 13 && personAge3 <= 18 ):
            personDrink3 = "schon Cola";
            break;
        default:
            personDrink3 = "auch Wein";
            break;
    }

    console.log( personName3 + ", Du darfst mit " + personAge3 + " " + personDrink3 + " trinken!" );

/*
    Hier als Beispiel wurde gezeigt, dass Variablen auch ohne let oder var
    deklariert werden können. Dann müssen aber auch Variablen ohne Startwert ausgenullt werden.
    DAS IST ABER NUR IN JAVASCRIPT SO.
*/

/***************************************************************/
/************   Getränke-Challenge | Beispiel 4    *************/
/***************************************************************/
    let personName4 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge4 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    let personDrink4;

    switch ( true ) {
        case ( personAge4 > 0 && personAge4 < 6 ):
            personDrink4 = "nur Milch";
            break;
        case ( personAge4 > 5 && personAge4 <= 13 ):
            personDrink4 = "Saft";
            break;
        case ( personAge4 > 12 && personAge4 < 19 ):
            personDrink4 = "schon Cola";
            break;
        default:
            personDrink4 = "auch Wein";
            break;
    }

    console.log( personName4 + ", Du darfst mit " + personAge4 + " " + personDrink4 + " trinken!" );

/***************************************************************/
/************   Getränke-Challenge | Beispiel 5    *************/
/***************************************************************/
    let personName5 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge5 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );

    if ( personAge5 >= 0 && personAge5 <= 5 ) {
        console.log( personName5 + ", Du darfst mit " + personAge5 + " nur Milch trinken!" );
    } else if ( personAge5 >= 6 && personAge5 <= 12 ) {
        console.log( personName5 + ", Du darfst mit " + personAge5 + " Saft trinken!" );
    } else if ( personAge5 >= 13 && personAge5 <= 17 ) {
        console.log( personName5 + ", Du darfst mit " + personAge5 + " schon Cola trinken!" );
    } else if ( personAge5 > 18 ) {
        console.log( personName5 + ", Du darfst mit " + personAge5 + " auch Wein trinken!" );
    } else {
        console.log( personName5 + ", Du hast kein richtiges Alter eingegeben und darfst daher gar nichts trinken!" );
    }


/***************************************************************/
/************   Getränke-Challenge | Beispiel 6    *************/
/***************************************************************/
    let personName6 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge6 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    let personDrink6;

    if ( personAge6 > 0, personAge6 < 6 ) {
        personDrink6 = "nur Milch";
    } else if ( personAge6 > 5 && personAge6 < 13 ) {
        personDrink6 = "Saft";
    } else if ( personAge6 > 12 && personAge6 < 18 ) {
        personDrink6 = "schon Cola";
    } else {
        personDrink6 = "auch Wein";
    }

    console.log( personName6 + ", Du darfst mit " + personAge6 + " " + personDrink6 + " trinken!" );


/***************************************************************/
/************   Getränke-Challenge | Beispiel 7    *************/
/***************************************************************/
    let personName7 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge7 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    let personDrink7;

    ( personAge7 >= 0, personAge7 <= 5 ) ? personDrink7 = "nur Milch" : 
        ( personAge7 >= 6 && personAge7 <= 12 ) ? personDrink7 = "Saft" : 
            ( personAge7 >= 13 && personAge7 <= 18 ) ? personDrink7 = "schon Cola" : personDrink7 = "auch Wein";

    console.log( personName7 + ", Du darfst mit " + personAge7 + " " + personDrink7 + " trinken!" );


/***************************************************************/
/************   Getränke-Challenge | Beispiel 8    *************/
/***************************************************************/
    let personName8 = prompt( "bitte gib Deinen Namen ein: " ), personAge8 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) ), personDrink8;

    if ( personAge8 >= 0, personAge8 <= 5 ) { personDrink8 = "nur Milch"; }
    if ( personAge8 >= 6, personAge8 <= 12 ) { personDrink8 = "Saft"; }
    if ( personAge8 >= 13, personAge8 <= 18 ) { personDrink8 = "schon Cola"; }
    if ( personAge8 > 18 ) { personDrink8 = "auch Wein"; }
    if ( !(personAge8 >= 0) && !(personAge8 > 18 ) ) { personDrink8 = "gar nichts"; }

    console.log( personName8 + ", Du darfst mit " + personAge8 + " " + personDrink8 + " trinken!" );

/*
    Hier als Beispiel wurde gezeigt, dass Variablen auch in einer Zeile,
    in einer einzigen Deklaration deklariert werden können.
    Wie zB: let meinName = "Sandro", meinAlter = "geheim", meinZeug;
    Dabei muss auch hier nicht jede Variable gleich eine Wertzustellung bekommen.
*/
