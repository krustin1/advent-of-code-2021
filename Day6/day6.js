const fs = require('fs');

//Read input from input.txt and format into array
let input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
    .split(',')
    
input.forEach((fish, index) => {
        input[index] = parseInt(fish)
})

let condensedFish = Array(9).fill(0);
input.forEach((fish) => {
    condensedFish[fish] += 1;
})

function reproduction(days) {
    for(i = 0; i < days; i++) {
        let fishTemp = Array(9).fill(0);
        condensedFish.forEach((fish, index) => {
            if(index == 0) {
                fishTemp[8] = fish;
                fishTemp[6] = condensedFish[7];
                fishTemp[6] += fish;
            } else if(index != 0 && index != 7) {
                fishTemp[index - 1] = fish;
            }
        })
        condensedFish = fishTemp.slice();
    }
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return condensedFish.reduce(reducer);
}

/**** PART 1 ****/
console.log(reproduction(80));

/**** PART 2 ****/
console.log(reproduction(256));
