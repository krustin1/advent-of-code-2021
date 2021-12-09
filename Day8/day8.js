const fs = require('fs');

//Read input from input.txt and format into array
let input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
        .split('\n')

/**** PART 1 ****/

let outputValues = '';
input.forEach((entry) => {
    outputValues = outputValues.concat(entry.split('|')[1])
})
outputValues = outputValues.trim().split(' ');

let count = 0;
outputValues.forEach((output) => {
    if(output.length == 2 || output.length == 3 ||
        output.length == 4 || output.length == 7) {
            count++;
        }
})

console.log(count);


/**** PART 2 -  Please don't judge me based on this solution... I have much more to offer than this monstrosity :(  ****/

let sum = 0;
input.forEach((entry, i) => {
    let outputValue = [], signalPattern = [], remainingNums = [];
    let numMapping = [];
    signalPattern = entry.split('|')[0].trim().split(' ');
    outputValue = entry.split('|')[1].trim().split(' ');
    //console.log(outputValue)
    signalPattern.forEach((signal, index) => {
        signalPattern[index] = signal.split('');
        remainingNums[index] = signalPattern[index];
        if(signal.length == 2) { numMapping[1] = signalPattern[index]; remainingNums[index] = ''; }
        if(signal.length == 3) { numMapping[7] = signalPattern[index]; remainingNums[index] = ''; }
        if(signal.length == 4) { numMapping[4] = signalPattern[index]; remainingNums[index] = ''; }
        if(signal.length == 7) { numMapping[8] = signalPattern[index]; remainingNums[index] = ''; }
    })
    //console.log(signalPattern)
    let notInSix = '';
    remainingNums.forEach((signal, index) => {
        if(signal.length == 5 && numMapping[1].every(char => signal.includes(char))) { numMapping[3] = signal; remainingNums[index] = ''}
        if(signal.length == 6 && !numMapping[1].every(char => signal.includes(char))) { 
            numMapping[6] = signal; 
            numMapping[1].forEach((char) => {if(!signal.includes(char)) notInSix = char});
            remainingNums[index] = '';
        }
    })
    remainingNums.forEach((signal, index) => {
        if(signal.length == 5 && signal.includes(notInSix)) { numMapping[2] = signal; remainingNums[index] = '';}
    })
    remainingNums.forEach((signal, index) => {
        if(signal.length == 5) { numMapping[5] = signal; remainingNums[index] = '';}
    })
    let notInFive = '';
    numMapping[6].forEach((char) => {if(!numMapping[5].includes(char)) notInFive = char});
    remainingNums.forEach((signal, index) => {
        if(signal.length == 6 && !signal.includes(notInFive)) { numMapping[9] = signal; remainingNums[index] = '';}
    })
    remainingNums.forEach((signal, index) => {
        if(signal.length == 6) { numMapping[0] = signal; remainingNums[index] = '';}
    })

    numMapping.forEach((num, i) => { numMapping[i] = num.sort().join('') })
    outputValue.forEach((output, i) => { outputValue[i] = output.split('').sort().join('') })

    let decoded = '';
     outputValue.forEach((output) => {
         decoded = decoded.concat(numMapping.indexOf(output));
     })

     sum += parseInt(decoded);
})

console.log(sum)