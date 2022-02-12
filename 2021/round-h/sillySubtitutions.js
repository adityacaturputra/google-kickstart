String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 2);
}

function convertString(string) {
    switch(string) {
        case '01':
          return 2;
        case '12':
          return 3;
        case '23':
          return 4;
        case '34':
          return 5;
        case '45':
          return 6;
        case '56':
          return 7;
        case '67':
          return 8;
        case '78':
          return 9;
        case '89':
          return 0;
        case '90':
          return 1;
        default:
            return string;
    }
}

function sillySubtitutions(N, string) {
    let idx = 0
    while(idx+1 < string.length){
        currentLetter = string[idx]+string[idx+1];
        let isChanged = convertString(currentLetter) 
        if(isChanged !== currentLetter){
            string = string.replaceAt(idx, isChanged)
            if(idx !== 0) {
                idx--;
            }
        } else {
            idx++;
        }
    }
    return string;
}

function solveProblem(problem) {
    for (let i = 0; i < problem.T; i++) {
        const N = problem.testCases[i][0];
        const S = problem.testCases[i][1];
        console.log(`Case #${i+1}: ${sillySubtitutions(N, S)}`);
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