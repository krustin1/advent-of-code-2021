/** PART 1 **/

const arr = [/** values **/];

function sonarSweep(depths) {
    let increased = 0;

    for (i = 0; i < depths.length - 1; i++) {
        if (depths[i] < depths[i + 1]) {
            increased++;
        }
    }

    console.log(increased);
}

sonarSweep(arr);


/** PART 2 **/

function sonarSweepWindow(depths) {
    let increased = 0;

    for(i = 0; i <= depths.length - 4; i++) {
        if(depths[i] < depths[i + 3]) {
            increased++;
        }
    }

    console.log(increased);
}

sonarSweepWindow(arr);