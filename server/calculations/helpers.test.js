const {getSubmatrix} = require("./helpers");

describe("Get submatrix", () => {
    test("Should return [4]", () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        const newMatrix = getSubmatrix(matrix, 0, 0);
        expect(newMatrix).toEqual([4]);
    })
    test("Should return the same matrix without first row and first column", () => {
        const matrix = [
            [1, 2, 3],
            [3, 4, 5],
            [10, 20, 30],
        ];
        const newMatrix = getSubmatrix(matrix, 0, 0);
        expect(newMatrix).toEqual([[4, 5], [20, 30]]);
    })

    test("Should return the same matrix without first row and first column", () => {
        const matrix = [
            [1, 2, 3, 4],
            [3, 4, 5, 6],
            [10, 20, 30, 40],
            [0, 0, 0, 0],
        ];
        const newMatrix = getSubmatrix(matrix, 0, 0);
        expect(newMatrix).toEqual([[4, 5, 6], [20, 30, 40], [0, 0, 0]]);
    })
})