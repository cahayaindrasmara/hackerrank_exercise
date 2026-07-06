function findSmallestMissingPositive(orderNumbers) {
    //another way
    const positiveNumbers = orderNumbers.filter(num => num > 0);// If no positive numbers, return 1
    if (positiveNumbers.length === 0) {
        return 1;
    }
    
    // Sort the positive numbers
    positiveNumbers.sort((a, b) => a - b);
    
    // Find the smallest missing positive
    let smallest = 1;
    for (let i = 0; i < positiveNumbers.length; i++) {
        if (positiveNumbers[i] === smallest) {
            smallest++;
        } else if (positiveNumbers[i] > smallest) {
            break;
        }
    }
    
    return smallest;
}

console.log(findSmallestMissingPositive([3,4,-1,1]))
console.log(findSmallestMissingPositive([3,5,2,1]))
