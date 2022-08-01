const getSubmatrix = (matrix, row, column) => {
    const len = matrix.length;
    const result = initialize2DArray(len - 1, len - 1);
    let newI = 0; 
    let newJ = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(i === row || j === column) {
                continue;
            }
            result[newI][newJ] = matrix[i][j];
            newJ++;
            if(newJ === len - 1) {
                newJ = 0;
                newI++;
            }
        }
    }
    return result; 
}

const initialize2DArray = (rows, columns) => {
    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push(new Array(columns));
    }
    return result; 
}

const initializeArrayWithValue = (matrix, value) => {
    for (let i = 0; i < matrix.length; i++) {
        if(Array.isArray(matrix[i])) {
            initializeArrayWithValue(matrix[i], value);
        }
        else {
            matrix[i] = value; 
        }
    }
}

const scale = (matrix, scalar) => {
    for (let i = 0; i < matrix.length; i++) {
        if(Array.isArray(matrix[i])) {
            scale(matrix[i], scalar);
        }
        else {
            matrix[i] *= scalar; 
        }
    }
}

module.exports = {
    getSubmatrix, 
    initialize2DArray,
    initializeArrayWithValue,
    scale, 
}