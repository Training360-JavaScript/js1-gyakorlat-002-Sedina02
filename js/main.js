/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

'use strict';

const strings = ['első', 'második', 'harmadik'];

const generateList = () => {
    const HTMLTemplate = 
    `<ul>${stringArray
            .map(item => `<li>${item}</li>`)
            .join('')}
    </ul>`;
}

generateList();