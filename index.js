function hexGen() {
    let count = 0;
    let emptyArray = [6];
    while (count < 5) {
        let randomNumber = Math.floor(Math.random() * 16).toString(16);
        emptyArray.push(randomNumber);
        count++;
    }   
    return " #" + emptyArray.join("");
}
console.log(hexGen())