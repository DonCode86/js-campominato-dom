function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//genero 16 numeri casuali tra 1 e 100 (non possono ripetersi gli stessi numeri)
const bombs = [];
let randomBombs;
while (bombs.length < 3) {
    let randomBombs = getRndInteger(1, 100)
    if (!bombs.includes(randomBombs)) {
        bombs.push(randomBombs)
    }
}
console.log("bombe generate dal pc, ", bombs)
    //faccio inserire all'utente (100-16) volte un numero alla volta, sempre tra 1-100 e sempre diversi, ogni volta verifico se questo numero e' presente in bombs.

const userNumbers = []
let userNum;
let validator = false;
while (userNumbers.length < 6) {
    userNum = Number(prompt("Inserisci un numero"))

    if (bombs.includes(userNum)) {
        validator = true;
    } else if (!userNumbers.includes(userNum) && !isNaN(userNum) && userNum > 0) {
        userNumbers.push(userNum)
    }

    console.log("i numeri che hai scelto sono: ", userNumbers)
    if (validator === true) {
        console.log("hai perso!")
        console.log("Hai ottenuto un punteggio di: ", userNumbers.length)
        break
    } else {
        console.log("non hai preso bombe!")
    }
}
// console.log("numeri scelti dall'utente, ", userNumbers)