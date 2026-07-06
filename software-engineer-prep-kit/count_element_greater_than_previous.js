function countResponseTimeRegressions(responseTimes) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < responseTimes.length; i++) {
        sum += responseTimes[i];
        // console.log(sum)

        const currentAverage = sum / (i + 1);

        if (responseTimes[i] > currentAverage) count++
    }

    return count;
}

console.log(countResponseTimeRegressions([100, 150, 200, 300]));
console.log(countResponseTimeRegressions([100, 200, 150, 300]))