const {getCofactor} = require("./cofactor");

describe("Cofactor", () => {
    test("Should return cofactor", () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]
        const expectedCofactor = [
            [-3, 6, -3],
            [6, -12, 6],
            [-3, 6, -3],            
        ]
        expect(getCofactor(matrix)).toEqual(expectedCofactor);
    })
})