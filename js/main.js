function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//genero 16 numeri casuali tra 1 e 100 (non possono ripetersi gli stessi numeri)
const bombs = [];
while (bombs.length < 17) {
    let randomBombs = getRndInteger(1, 100)
    if (!bombs.includes(randomBombs)) {
        bombs.push(randomBombs)
    }
}
console.log(bombs)
    //faccio inserire all'utente (100-16) volte un numero alla volta, sempre tra 1-100 e sempre diversi