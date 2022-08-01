const {getDeterminant} = require("../determinant/determinant");

const solveEquations = (coeffMatrix, constMatrix) => {
    const solutions = [];
    const det = getDeterminant(coeffMatrix);
    if (det === 0) {
        return "No unique solutions";
    }
    for (let i = 0; i < coeffMatrix.length; i++) {
        swapWithConstant(coeffMatrix, constMatrix, i);
        solutions.push(getDeterminant(coeffMatrix));
        swapWithConstant(coeffMatrix, constMatrix, i);
        solutions[i] === -0 ? solutions[i] /= (-1 * det) : solutions[i] /= det;
    }
    return solutions; 
}

const swapWithConstant = (coeffMatrix, constMatrix, i) => {
    for (let j = 0; j < coeffMatrix.length; j++) {
        const temp = coeffMatrix[j][i];
        coeffMatrix[j][i] = constMatrix[j];
        constMatrix[j] = temp;
    }
}

module.exports = {
    solveEquations,
}