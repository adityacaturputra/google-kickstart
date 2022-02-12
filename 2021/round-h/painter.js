const combinationColor = {
    'O': ['R', 'Y'],
    'P': ['R', 'B'],
    'G': ['Y', 'B'],
    'A': ['R', 'Y', 'B']
} 

function painter(N, string) {
    const map = {}
    let colors = []
    for (let i = 0; i < string.length; i++) {
        combinationColorFound = combinationColor[string[i]];
        if(combinationColorFound){
            colors.push(combinationColorFound)
        } else {
            colors.push([string[i]])
        }
    }
    let count = 1;
    for (let i = 1; i < colors.length; i++) {
        for (let j = 0; j < colors[i].length; j++) {
            let isFoundColorBefore = false;
            for (let k = 0; k < colors[i-1].length; k++) {
                if(colors[i][j] === colors[i-1][k]){
                    isFoundColorBefore = true;
                }
            }
            if(!isFoundColorBefore) {
                count++;
            }
        }
    }
    return count;
}

function solveProblem(problem) {
    for (let i = 0; i < problem.T; i++) {
        const N = problem.testCases[i][0];
        const S = problem.testCases[i][1];
        console.log(`Case #${i+1}: ${painter(N, S)}`);
    }
}

// nodejs console
function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    let problem = {
        T: 0,
        testCases: []
    }
    let countTestCase = 0;
    let dataTestCase = [];

    rl.on('line', function (line) {
        // TODO: Process input
        if (problem.T === 0) {
        // Get number of test cases from first line
        problem.T = Number(line)
        } else {
        // TODO process the rest of the data
        const data = line
        if(dataTestCase.length !== 1) {
            dataTestCase.push(data);
        } else {
            dataTestCase.push(data);
            problem.testCases.push(dataTestCase);
            countTestCase++;
            if(countTestCase === problem.T){
                rl.close();
            }
            dataTestCase = [];
        }
        }
    })

    .on('close', () => {
        // Finished processing input, now solve question
        solveProblem(problem)
        process.exit()
    })
}

readInput()