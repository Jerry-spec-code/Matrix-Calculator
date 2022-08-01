const {initialize2DArray, initializeArrayWithValue} = require("../helpers");

const multiplyMatrices = (matrix1, matrix2) => {
    if(matrix1.length === 0 || matrix2.length === 0) {
        return new TypeError("Not matrices");
    }
    if(matrix1[0].length !== matrix2.length) {
        return new TypeError("Invalid matrix dimensions");
    }

    const product = initialize2DArray(matrix1.length, matrix2[0].length);
    initializeArrayWithValue(product, 0);
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix2.length; k++) {
                product[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return product; 

}

module.exports = {
    multiplyMatrices,
}