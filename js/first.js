/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
'use strict';

const numbers = [20, 30, 40];

const brutto = (numbers) => Math.round(numbers.map(numbers => numbers * 1.27).reduce((previous, current) => previous + current));

brutto();