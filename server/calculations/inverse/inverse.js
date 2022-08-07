const {getTranspose} = require("../transpose/transpose");
const {getCofactor} = require("../cofactor/cofactor");
const {getDeterminant} = require("../determinant/determinant");
const {scale} = require("../helpers");

const getInverse = (matrix) => {
    const det = getDeterminant(matrix);
    if(det === 0) {
        return ["This matrix is not invertible"];
    }
    const result = getTranspose(getCofactor(matrix));
    scale(result, 1 / det);
    return result; 
}

module.exports = {
    getInverse, 
}