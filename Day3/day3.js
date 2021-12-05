const fs = require('fs');

//Read input from input.txt and format into array
let input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
    .split('\n')


/**** PART 1 ****/

let gamma = '', epsilon = '';
const numberLength = input[0].length;
let sums = Array(numberLength).fill(0);

input.forEach((binary) => {
    for(i = 0; i < numberLength; i++) {
        sums[i] += parseInt(binary[i]);
    }    
})

sums.forEach((total) => {
    if(total < input.length/2) {
        gamma += '0';
        epsilon += '1';
    }
    else {
        gamma += '1';
        epsilon += '0';
    }
})

const power = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(power)


/**** PART 2 ****/

function determineMode(input, index, ratingType) {
    let least = ratingType == 'carbon';
    let sum = 0;
    input.forEach((binary) => {
        sum += parseInt(binary[index]);
    })
    const oxygenMode = (sum < input.length/2) ? '0' : '1';
    const carbonMode = oxygenMode == '0' ? '1' : '0';
    return least ? carbonMode : oxygenMode;
}

function calculate(ratingType) {
    let filtered = input;
        for(i = 0; i < numberLength; i++) {
            mode = determineMode(filtered, i, ratingType);  
            filtered = filtered.filter(binary => binary[i] == mode);
            if(filtered.length == 1) break;
        }
    return filtered;
}

let oxygenFiltered = calculate('oxygen');
let carbonFiltered = calculate('carbon');


let lifeSupport = parseInt(oxygenFiltered[0], 2) * parseInt(carbonFiltered[0], 2);
console.log(lifeSupport)