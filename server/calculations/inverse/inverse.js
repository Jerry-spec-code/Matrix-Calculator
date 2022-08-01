const {getTranspose} = require("../transpose/transpose");
const {getCofactor} = require("../cofactor/cofactor");
const {getDeterminant} = require("../determinant/determinant");
const {scale} = require("../helpers");

const getInverse = (matrix) => {
    const det = getDeterminant(matrix);
    if(det === 0) {
        return "This matrix is not invertible";
    }
    if (matrix.length === 2) {
        const result = [[matrix[1][1], -1 * matrix[0][1]], [-1 * matrix[1][0], matrix[0][0]]];
        scale(result, 1 / det);
        return result;
    }
    const result = getTranspose(getCofactor(matrix));
    scale(result, 1 / det);
    return result; 
    
}

module.exports = {
    getInverse, 
}