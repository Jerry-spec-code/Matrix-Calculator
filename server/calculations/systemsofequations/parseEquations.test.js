const {parseEquations} = require("./parseEquations");

describe("Systems of Equations", () => {
    test("Should return invalid augmented matrix", () => {
        const matrix = [
            [1, 2, 3],
            [4, 3, 2],
            [5, 6, 7],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual(["Invalid augmented matrix"]);
    })
    test("Should specify no unique solution", () => {
        const matrix = [
            [1, 2, 3, 4],
            [4, 3, 2, 1],
            [5, 6, 7, 8],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual(["No unique solutions"]);
    })
    test("Should return a unique solution", () => {
        const matrix = [
            [1, 2, 3, 4],
            [4, 3, 2, 1],
            [1, 2, 4, 6],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual(["Here are the solutions:", "x0 = 0", "x1 = -1", "x2 = 2"]);
    })
})