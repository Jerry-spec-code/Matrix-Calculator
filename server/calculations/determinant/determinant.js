const {getSubmatrix} = require("../helpers");

const getDeterminant = (matrix) => {
    if(matrix.length === 1) {
        return matrix[0];
    }
    if(matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
    }
    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
        const temp = getSubmatrix(matrix, 0, i);
        if(i % 2 === 0) {
            det += matrix[0][i] * getDeterminant(temp);
        }
        else {
            det -= matrix[0][i] * getDeterminant(temp);
        }
    }
    return det; 
}

module.exports = {
    getDeterminant, 
}