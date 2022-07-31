const {initialize2DArray} = require("../helpers");

const getTranspose = (matrix) => {
    const transpose = initialize2DArray(matrix.length, matrix.length);

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            transpose[row][column] = matrix[column][row];
        }
    }

    return transpose; 
}

module.exports = {
    getTranspose,
}