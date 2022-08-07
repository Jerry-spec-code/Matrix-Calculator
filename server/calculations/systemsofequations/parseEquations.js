const {solveEquations} = require("./systemsofequations");
const {initialize2DArray} = require("../helpers");

const parseEquations = (augMatrix) => {

    if(augMatrix.length !== augMatrix[0].length - 1) {
        return ["Invalid augmented matrix"];
    }

    const coeffMatrix = initialize2DArray(augMatrix.length, augMatrix.length);
    const constMatrix = getConstMatrix(augMatrix);

    for (let i = 0; i < coeffMatrix.length; i++) {
        for (let j = 0; j < coeffMatrix.length; j++) {
            coeffMatrix[i][j] = augMatrix[i][j];
        }
    }
    
    const solution = solveEquations(coeffMatrix, constMatrix);
    return interpret(solution);
}

const getConstMatrix = (augMatrix) => {
    const result = [];
    for (let i = 0; i < augMatrix.length; i++) {
        result.push(augMatrix[i][augMatrix.length]);
    }
    return result;
}

const interpret = (solution) => {
    if(!Array.isArray(solution)) {
        return [solution];
    }
    const result = ["Here are the solutions:"];
    for (let i = 0; i < solution.length; i++) {
        result.push(`x${i}` + " = " + solution[i]);
    }
    return result; 
}

module.exports = {
    parseEquations,
}