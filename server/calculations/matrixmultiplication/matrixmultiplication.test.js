const {multiplyMatrices} = require("./matrixmultiplication");

describe("Multiply matrices", () => {
    test("Should throw not matrices error", () => {
        expect(multiplyMatrices([], [])).toEqual(TypeError("Not matrices"));
    })
    test("Should throw invalid dimensions error", () => {
        const matrix1 = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        const matrix2 = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        const result = multiplyMatrices(matrix1, matrix2);
        expect(result).toEqual(TypeError("Invalid matrix dimensions"));
    })
    test("Should throw invalid dimensions error", () => {
        const matrix1 = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        const matrix2 = [
            [1, 2],
            [4, 5],
            [7, 8],
        ];
        const result = multiplyMatrices(matrix1, matrix2);
        expect(result).toEqual([[30, 36], [66, 81]]);
    })
})