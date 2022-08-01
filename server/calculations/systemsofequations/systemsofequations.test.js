const {solveEquations} = require("./systemsofequations");

describe("Systems of Equations", () => {
    test("Should return no unique solution", () => {
        const coeffMatrix = [
            [1, 2, 3],
            [4, 3, 2],
            [5, 6, 7],
        ];
        const constMatrix = [4, 1, 8];
        const solution = solveEquations(coeffMatrix, constMatrix);
        expect(solution).toEqual("No unique solutions");
    })
    test("Should return a unique solution", () => {
        const coeffMatrix = [
            [1, 2, 3],
            [4, 3, 2],
            [1, 2, 4],
        ];
        const constMatrix = [4, 1, 6];
        const solution = solveEquations(coeffMatrix, constMatrix);
        expect(solution).toEqual([0, -1, 2]);
    })
})