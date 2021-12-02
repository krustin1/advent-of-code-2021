const fs = require('fs');

//Read input from input.txt and format into array
let input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
    .split('\n')
	.map((command) => {
		return command.split(/[ ]/);
	});



/**** PART 1 ****/

let directionMap = new Map(); 

input.forEach((command) => {
    const direction = command[0];
    const distance = parseInt(command[1]);
    directionMap.has(direction) ? 
        directionMap.set(direction, directionMap.get(direction) + distance) : 
        directionMap.set(direction, distance);
})

let position = 
    directionMap.get('forward') * (directionMap.get('down') - directionMap.get('up'));

console.log(position);



/**** PART 2 ****/

let depth = 0, forward = 0, aim = 0;

input.forEach((command) => {
    const direction = command[0];
    const distance = parseInt(command[1]);
    if(direction == 'forward') {
        forward += distance;
        depth += (aim * distance);
    } else {
        direction == 'up' ? aim -= distance : aim += distance;
    }
});

position = forward * depth;

console.log(position);