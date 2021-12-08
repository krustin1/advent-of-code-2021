const fs = require('fs');

//Read input from input.txt and format into array
let input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
        .split(',')
    
input.forEach((crab, index) => {
        input[index] = parseInt(crab)
})
    
/**** PART 1 ****/

function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

let align = median(input);
let fuel = 0;

input.forEach((crab) => {
    crab < align ? fuel += align - crab : fuel += crab - align;
})

console.log(fuel)