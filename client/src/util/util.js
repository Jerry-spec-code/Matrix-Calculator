const initialize2DArray = (rows, columns, value=0) => {
    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push(new Array(columns));
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            result[i][j] = value;
        }
    }
    return result; 
}

module.exports = {
    initialize2DArray,
}