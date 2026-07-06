function simpleArraySum(arr) {
    return arr.reduce((acc, value) => acc + value, 0);
}

console.log(simpleArraySum([ 1, 2, 3, 4, 10, 11 ])) //31