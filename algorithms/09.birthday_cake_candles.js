function birthdayCakeCandles(candles) {
    let tallestCandles = Math.max(...candles);
    let count = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === tallestCandles) {
            count++
        }
    }

    return count;
}

console.log(birthdayCakeCandles([3,2,1,3])); //2
console.log(birthdayCakeCandles([4,4,1,3])); //2