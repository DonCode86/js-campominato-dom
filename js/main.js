function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//genero 16 numeri casuali tra 1 e 100 (non possono ripetersi gli stessi numeri)
const bombs = [];
let randomBombs;
let j;
while (bombs.length < 3) {
    let randomBombs = getRndInteger(1, 100)
    if (!bombs.includes(randomBombs)) {
        bombs.push(randomBombs)
    }
    for (let j = 0; j < bombs.length; j++) {
        console.log("bombe j:", bombs[j])
    }
}
console.log("bombe generate dal pc, ", bombs)
    //faccio inserire all'utente (100-16) volte un numero alla volta, sempre tra 1-100 e sempre diversi, ogni volta verifico se questo numero e' presente in bombs.

const userNumbers = []
let userNum;
let validator = 0;
while (userNumbers.length < 6) {
    userNum = Number(prompt("Inserisci un numero"))
    if (!userNumbers.includes(userNum) && !isNaN(userNum) && userNum > 0) {
        userNumbers.push(userNum)
    }
    for (let i = 1; i < userNumbers.length; i++) {
        if (userNumbers[i] === bombs[j]) {
            validator = 1;
        }
    }
}
console.log("i numeri che hai scelto sono: ", userNumbers)
if (validator === 1) {
    console.log("hai perso!")
} else {
    console.log("non hai preso bombe!")
}
// console.log("numeri scelti dall'utente, ", userNumbers)