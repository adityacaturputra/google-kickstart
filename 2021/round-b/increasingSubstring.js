function increasingSubstring (N, S) {
    const increasingCount = [1];
    for (let i = 1; i < S.length; i++) {
        if(S.charCodeAt(i) > S.charCodeAt(i-1)) {
            increasingCount.push(increasingCount[i-1] + 1);
        } else {
            increasingCount.push(1);
        }
    }
    return increasingCount.join(" ");
} 

function solveProblem(problem) {
    for (let i = 0; i < problem.T; i++) {
        const S = problem.testCases[i][0];
        const F = problem.testCases[i][1];
        console.log(`Case #${i+1}: ${increasingSubstring(S, F)}`);
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