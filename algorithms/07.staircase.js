function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let stair = "";

        for (let j = n; j >= 1; j--) {
            if (i >= j) {
                stair += "#"
            } else {
                stair += " "
            }
        }

        console.log(stair)
    }
}

console.log(staircase(6))