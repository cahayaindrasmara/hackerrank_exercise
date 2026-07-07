function diagonalDifference (arr) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length - i - 1];
    }

    return Math.abs(leftToRight - rightToLeft);
}

console.log(diagonalDifference(
    [
        [11,2,4],
        [4,5,6],
        [10,8,-12]
    ]
))
