function compareTriplets (a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i] && b[i] === a[i]) {
            continue;
        } else if (a[i] < b[i]) {
            bobScore++
        } else {
            aliceScore++
        }
    }

    return [aliceScore, bobScore];
}

console.log(compareTriplets([5,6,7], [3,6,10])); //[ 1, 1 ]
console.log(compareTriplets([6,8,12], [7,9,15])); //[ 0, 3 ]
console.log(compareTriplets([10,15,20], [5,6,7])); //[ 3, 0 ]
