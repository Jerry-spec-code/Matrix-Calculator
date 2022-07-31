const {getSubmatrix} = require("./helpers");

describe("Get submatrix", () => {
    test("Should return the same matrix without first row and first column", () => {
        const matrix = [
            [1, 2, 3],
            [3, 4, 5],
            [10, 20, 30],
        ];
        const newMatrix = getSubmatrix(matrix, 0, 0);
        expect(newMatrix).toEqual([[4, 5], [20, 30]]);
    })
})