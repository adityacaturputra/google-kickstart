function countConvertString(string, value) {
    const numberOfOperation = [];
    const valueCountLetter = [];
    for(let val in value) {
        const valueCode = value.charCodeAt([val]);
        valueCountLetter.push(valueCode);
    }
    for (let letter in string) {
        const stringCode = string.charCodeAt([letter]);
            const operationCounts = [];
            for (let countLetter in valueCountLetter){
                let operationCount = stringCode - valueCountLetter[countLetter];
                if(operationCount < 0) {
                    operationCount *= -1;
                }
                operationCounts.push(operationCount);
            }
            if(operationCounts.length){
                const optimalOperationCount = Math.min(...operationCounts);
                numberOfOperation.push(optimalOperationCount);    
            } 
    }
    return sum(numberOfOperation);
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}

function solveProblem(problem) {
    for (let i = 0; i < problem.T; i++) {
        const S = problem.testCases[i][0];
        const F = problem.testCases[i][1];
        console.log(`Case #${i+1}: ${countConvertString(S, F)}`);
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


// // google kicstart input and output example
// console.log(countConvertString('abcd', 'a')) // 6
// console.log(countConvertString('pppp', 'p')) // 0

// // Additional Sample
// console.log(countConvertString('pqrst', 'ou')) // 9
// console.log(countConvertString('abd', 'abd')) // 0
// console.log(countConvertString('aaaaaaaaaaaaaaab', 'aceg')) // 1
