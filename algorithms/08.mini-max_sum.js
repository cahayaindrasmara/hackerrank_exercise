function miniMaxSum(arr) {
    // overthinking way
    // let min = Math.min(...arr);
    // let max = Math.max(...arr);
    // let result = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (min === max) {
    //         min = min * (arr.length - 1);
    //         max = max * (arr.length - 1);
    //         break;
    //     } else if (arr[i] !== min && arr[i] !== max) {
    //         result += arr[i];
    //     }
    // }


    // min += result;
    // max += result;

    // console.log(min, max);

    //simple way
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((a,b) => a + b, 0);

    console.log(sum-max, sum-min);
}

console.log(miniMaxSum([5, 5, 5, 5, 5]));
console.log(miniMaxSum([1, 2, 3, 4, 5]));
