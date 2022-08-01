const {getDeterminant} = require("./determinant");

describe('Determinant', () => {
    test("Should return itself", () => {
        const matrix = [1];
        const result = getDeterminant(matrix);
        expect(result).toEqual(1);
    })
    test("Should return -2", () => {
        const matrix = [
            [2, 3],
            [4, 5],
        ];
        const result = getDeterminant(matrix);
        expect(result).toEqual(-2);
    })
    test("Should return -24", () => {
        const matrix = [
            [1, 2, 3],
            [0, 5, 6],
            [7, 8, 9]
        ];
        const result = getDeterminant(matrix);
        expect(result).toEqual(-24);
    })
})