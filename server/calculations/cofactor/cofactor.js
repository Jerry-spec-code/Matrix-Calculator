const {getSubmatrix, initialize2DArray} = require("../helpers");
const {getDeterminant} = require("../determinant/determinant");

const getCofactor = (matrix) => {
    const result = initialize2DArray(matrix.length, matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const tempDet = getDeterminant(getSubmatrix(matrix, i, j));
            result[i][j] = (i+j) % 2 === 0 ? tempDet : -1 * tempDet;
        }
    }
    return result; 
}

module.exports = {
    getCofactor,
}