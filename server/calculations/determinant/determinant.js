const {getSubmatrix} = require("../helpers");

const getDeterminant = (matrix) => {
    if(matrix.length < 2) {
        return matrix;
    }
    if(matrix.length == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
    }
    const det = 0;
    for (let i = 0; i < matrix.length; i++) {
        const temp = getSubmatrix(matrix, 0, i);
    }
}