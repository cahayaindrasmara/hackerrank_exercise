function plusMinus (arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let totalData = arr.length;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }

    let positiveRatio = (positive/totalData).toFixed(6)
    let negativeRatio = (negative/totalData).toFixed(6)
    let zeroRatio = (zero/totalData).toFixed(6)
    
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

console.log(plusMinus([-4,3,-9,0,4,1]))