const {getInverse} = require("./inverse");

describe("Inverse", () => {
    test("0 matrix should not be invertible", () => {
        const matrix = [
            [0, 0], 
            [0, 0],
        ];
        expect(getInverse(matrix)).toEqual(["This matrix is not invertible"]);
    })
    test("Non-zero determinant matrix should have an inverse", () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        expect(getInverse(matrix)).toEqual([[-2, 1], [1.5, -0.5]]);
    })
    test("Should return inverse", () => {
        const matrix = [
            [1, 0, 1],
            [2, 2, 0],
            [4, 0, 3],
        ]
        const expectedInverse = [
            [-3, 0, 1],
            [3, 0.5, -1],
            [4, 0, -1],            
        ]
        expect(getInverse(matrix)).toEqual(expectedInverse);
    })
})