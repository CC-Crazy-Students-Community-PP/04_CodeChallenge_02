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


/***************************************************************/
/************   Getränke-Challenge | Beispiel 3    *************/
/***************************************************************/
    let personName3 = prompt( "bitte gib Deinen Namen ein: " );
    let personAge3 = parseInt( prompt( "Bitt gib Dein Alter ein:" ) );
    let personDrink3;

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


/***************************************************************/
/************             Erläuterungen            *************/
/***************************************************************/
/*
    Hier als Beispiel wurde gezeigt, dass Variablen auch in eriner Zeile deklariert werden können.
    Wie zB: let meinName = "Sandro", meinAlter = "geheim", meinZeug;

    Des weiteren gibt es hier eine liste von Operatoren die es in Javcascript gibt:
        ---------------------------------------------------------
        Arithmetic Operators (Arithmetische Operatoren):
        ---------------------------------------------------------
            +   (Addition)                  5 + 5               = 10                addiert eine Zahl mit einer anderen
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            -   (Subtraction)               5 - 2               = 3                 subtrahiert eine Zahl mit einer anderen
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            *   (Multiplication)            5 * 5               = 25                multipliziert eine Zahl mit einer anderen
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            /   (Division)                  5 / 5               = 1                 dividiert eine Zahl mit einer anderen
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            **  (Exponentiation (ES2016))   10 ** 2             = 100               hebt den ersten Operanden auf die Potenz des zweiten Operanden an
                                            (10 potenz 2 = 10 hoch 2 also 10 * 10 = 100)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            %   (Modulus / Remainder)       22 % 4              = 2                 die Division von zwei ganzen Zahlen ergeben einen Quotienten und einen Rest
                                            (22 / 4 = 20 also REst 2 zu 22)         das Ergebnis einer Modulo-Operation ist der Rest einer Division ()
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            ++  (Increment)                 let x = 5;          = y=6             erhöht die Zahl immer um 1
                                            let y = x++;                            geht nur mit Variablen, 5++ geht nicht
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            --  (Decrement)                 let x = 5;          = y=4             vermindert die Zahl immer um 1
                                            let y = x--;                            geht nur mit Variablen, 5-- geht nicht
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Reihenfolge: (Punkt vor Strich) Gruppieren mit ():
            *   (Multiplication)            1 + 100 * 5         = 501               multipliziert erst, dann wird addiert
            *   (Multiplication)            (1 + 100) * 5       = 505               addiert erst die Gruppe, dann wird multipliziert
            /   (Division)                  1 + 100 / 5         = 21                dividiert erst, dann wird addiert
            /   (Division)                  (1 + 100) / 5       = 20,2              addiert erst die Gruppe, dann wird dividiert

        ---------------------------------------------------------
        Concatenation Operators (Verkettungs Operatoren):
        ---------------------------------------------------------
            +                               "test" + "string"   = "teststring"      kann auch Zeichenfolgen verketten, was eine andere Möglichkeit der Addition ist.

        ---------------------------------------------------------
        Assignment Operators (Zuweisungs Operatoren):
        ---------------------------------------------------------
            Standart Assignment Operators
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                =               var = 1                                                 
                =               x = y       ist das selbe wie:      x = y               weist einer Variable einen Wert zu
                +=              x += y      ist das selbe wie:      x = x + y           weist einer Variable einen Wert mit sich selbst addiert zu
                -=              x -= y      ist das selbe wie:      x = x - y           weist einer Variable einen Wert mit sich selbst subtrahiert zu
                *=              x *= y      ist das selbe wie:      x = x * y           weist einer Variable einen Wert mit sich selbst multipliziert zu
                /=              x /= y      ist das selbe wie:      x = x / y           weist einer Variable einen Wert mit sich selbst dividiert zu
                %=              x %= y      ist das selbe wie:      x = x % y           weist einer Variable einen Wert mit sich selbst als Rest aus der Division zu
                **=             x **= y     ist das selbe wie:      x = x ** y          weist einer Variable einen Wert mit sich selbst als Potenz zu
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Shift Assignment Operators (Verschiebungs Operatoren)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                <<=	            x <<= y     ist das selbe wie:      x = x << y          Linksverschiebung verschiebt die angegebene Anzahl von Bits nach links und weist das Ergebnis der Variablen zu
                                        let a = 5;  // 00000101                             a <<= 2; // 00010100                                // output of a: 20
                                        let b = -5; // 11111111111111111111111111111011     b >>= 2; // 11111111111111111111111111111110        // output of b: -2
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                >>=	            x >>= y     ist das selbe wie:      x = x >> y          Rechtsverschiebung verschiebt die angegebene Anzahl von Bits nach rechts und weist das Ergebnis der Variablen zu
                                        let a = 5; // 00000101                              a >>= 2; // 00000001                                // output of a: 1
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                >>>=	        x >>>= y    ist das selbe wie:      x = x >>> y         vorzeichenloser Rechtsschiebesoperator verschiebt die angegebene Anzahl von Bits nach rechts und weist das Ergebnis der Variablen zu.
                                        let a = 5;  // 00000101                             a >>>= 2; // 00010100                                // output of a: 20
                                        let b = -5; // -00000000000000000000000000000101    b >>>= 2; // 00111111111111111111111111111110        // output of b: 1073741822
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Bitwise Assignment Operators (bitweise Zuweisungsoperator)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                &=	            x &= y    ist das selbe wie:        x = x & y           bitweise UND führt eine bitweise UND-Verknüpfung beider binären Zahlen durch und weist das Ergebnis der Variablen zu
                                        let a = 5; // 00000000000000000000000000000101      a &= 3; // 00000000000000000000000000000001         // output of a: 1
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                ^=	            x ^= y    ist das selbe wie:        x = x ^ y           bitweise XOR führt eine bitweise XOR-Operation beider binären Zahlen durch und weist das Ergebnis der Variablen zu.
                                        let a = 5; // 00000000000000000000000000000101      a &= 3; // 00000000000000000000000000000110         // output of a: 6
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                |=	            x |= y    ist das selbe wie:        x = x | y           bitweise ODER führt eine bitweise ODER-Operation beider binären Zahlen durch und weist das Ergebnis der Variablen zu.
                                        let a = 5; // 00000000000000000000000000000101      a &= 3; // 00000000000000000000000000000111         // output of a: 7
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Logical Assignment Operators (Logische Zuweisungsoperatoren)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                &&=             x &&= y    ist das selbe wie:       x = x && (x = y)    ordnet y x zu, wenn x wahrheitsgemäß ist = wenn x vergeben ist output y ansonsten x
                                       let person = {firstName:"Jane", lastName:"Doe"};         // output of person: firstName:"Jane", lastName:"Smith"
                                       person.lastName &&= "Smith";                             // überschreibt lasName mit Smith
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                ||=             x ||= y    ist das selbe wie:       x = x || (x = y)    ordnet y x zu, wenn x fehlerhaft ist = wenn x vergeben ist output x ansonsten y
                                       let title = "Titel";     title ||= "untitled";       // = title oder "untitled", da title vergeben, output nicht "untitled" sondern "Titel"
                                       let title;               title ||= "untitled";       // = title oder "untitled", da title nicht vergeben, output "untitled"
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
                ??=             x ??= y    ist das selbe wie:       x = x ?? (x = y)    ordnet y x zu, wenn x nicht vorhanden ist = fügt ein fehlenden Eigenschaft zu einem Objekt hinzu
                                       let user = {firstName:"Jane", lastName:"Doe"};        // output of user: firstName:"Jane", lastName:"Smith", nickName:"jdoe"
                                       user.nickName ??= "jdoe";                             // fügt nickName zu user hinzu
        ---------------------------------------------------------
        Comparison Operators (Vergleichs Operatoren):
        ---------------------------------------------------------
            ==	    equal to                                    ( Wert == 1 )                                       vergleicht ob Wert exakt 1 ist
            ===	    equal value and equal type                  ( Wert === 1 )                                      vergleicht ob Wert und Datentyp exakt gleich ist
            !=	    not equal                                   ( Wert != 1 )                                       vergleicht ob Wert nicht 1 ist
            !==	    not equal value or not equal type           ( Wert !== 1 )                                      vergleicht ob Wert und Datentyp nicht gleich ist
            >	    greater than                                ( Wert > 1 )                                        vergleicht ob Wert größer ist als 1
            <	    less than                                   ( Wert < 1 )                                        vergleicht ob Wert kleiner ist als 1
            >=	    greater than or equal to                    ( Wert >= 1 )                                       vergleicht ob Wert exakt 1 oder größer ist als 1
            <=	    less than or equal to                       ( Wert <= 1 )                                       vergleicht ob Wert exakt 1 oder kleiner ist als 1
            ?	    ternary operator                            ( Wert = (condition) ? value1:value2 )              vergleicht ob Wert condition erfüllt, dann value1, sonst value2
        ---------------------------------------------------------
        Logical Operators (Logische Operatoren):    let x = 5; let y = 12
        ---------------------------------------------------------
            &&      logical and             (x < 10 && y > 10)              überprüft condition 1 UND 2, und nur wenn beide wahrheitsgemäß sind, ist es true
                                            (x < 10 && y > 10) = true;      (x > 10 && y > 10) = false;     (x > 10 && y == 10) = false;
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            ||      logical or              (x == 5 || y == 5)              überprüft condition 1 ODER 2, wenn nur eine der beiden wahrheitsgemäß ist, ist es true
                                            (x == 10 || y == 10) = false;   (x > 1 && y > 10) = true;       (x == 5 && y != 10) = true;
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            !       logical not             !(x == y)                       überprüft condition, und nur wenn sie fehlerhaft ist, ist es true
                                            !(x == y) = true;               !(x > 10) = true;       !(x == 5 && y != 10) = false;
        ---------------------------------------------------------
        Type Operators (Typen Operatoren):
        ---------------------------------------------------------
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Type Operator (Typen Operator)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
        	    typeof                          let x = typeof(5);          = number            gibt den Typ einer Variable wieder
                instanceof                      (auto instanceof Car)       = true or false     gibt true zurück, wenn ein Objekt (auto) eine Instanz eines Objekttyps (Car) ist
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Number Methods (Nummer Methoden)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                Number()                        Number("11")                = 11                gibt eine Nummer / Zahl, konvertiert aus dem Argument, wieder
                parseFloat()                    parseFloat("11,5")          = 11.5              analysiert eine Zeichenkette und gibt eine Fließkommazahl zurück
                parseInt()                      parseInt("33")              = 33                analysiert eine Zeichenkette und gibt eine Ganzzahl zurück
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            String Methods (Zeichenketten Methoden)     let a = 3; 
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                toExponential()                 a.toExponential(2)          = 3.00e+0           gibt eine Zahl gerundet und in Exponentialschreibweise (2) geschrieben, als Zeichenkette wieder
                toFixed()                       a.toFixed(2)                = 3.00              gibt eine Zahl gerundet und mit einer bestimmten Anzahl (2) von Nachkommastellen, als Zeichenkette wieder
                toPrecision()                   a.toPrecision(5)            = 3.0000            gibt eine Zahl mit einer bestimmten Länge (5), als Zeichenkette wieder
                toString()                      a.toString()                = 3                 gibt eine Zahl als Zeichenkette wieder
                ValueOf()                       a.valueOf()                 = 3                 gibt den Inhalt einer Variable wieder
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
            Unary Operator (Unärer Operator)
            -------------------------------------------------------------------------------------------------------------------------------------------------------------
                +                               let y = "5"; let x = + y;   = y=5               kann verwendet werden, um eine Variable in eine Zahl umzuwandeln
        ---------------------------------------------------------
        Bitwise Operators (Bitweise Operatoren):
        ---------------------------------------------------------
            &       AND                         5 & 1     (0101 & 0001)	    = 0001	dez= 1      setzt jedes Bit auf 1, wenn beide Bits 1 sind
            |       OR                          5 | 1     (0101 | 0001)	    = 0101	dez= 5      setzt jedes Bit auf 1, wenn eines der beiden Bits 1 ist
            ^       XOR                         5 ^ 1     (0101 ^ 0001)	    = 0100	dez= 4      setzt jedes Bit auf 1, wenn nur eines der beiden Bits 1 ist
            ~       NOT                         ~ 5       (~0101)           = 1010	dez= 10     invertiert alle Bits
            <<      left shift                  5 << 1    (0101 << 1)	    = 1010	dez= 10     verschiebt nach links, indem Nullen von rechts hineingeschoben werden und die ganz linken Bits abfallen
            >>      right shift                 5 >> 1    (0101 >> 1)	    = 0010	dez= 2      verschiebt mit Vorzeichen nach rechts, indem Nullen von links hineingeschoben werden und die ganz rechts Bits abfallen
            >>>     unsigned right shift        5 >>> 1   (0101 >>> 1)	    = 0010	dez= 2      verschiebt ohne Vorzeichen nach rechts, indem Nullen von links hineingeschoben werden und die ganz rechts Bits abfallen

*/