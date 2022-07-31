const {getTranspose} = require("./transpose");

describe("Transpose", () => {
    test("getTranspose for a 2x2 matrix should swap bottom left and top right", () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        const transpose = getTranspose(matrix);
        expect(transpose).toEqual([[1, 3], [2, 4]]);
    })
})