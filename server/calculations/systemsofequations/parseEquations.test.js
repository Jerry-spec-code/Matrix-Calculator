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
        expect(solution).toEqual([
            "Here are the equations being solved:",
            "x0 + 2x1 + 3x2 = 4",
            "4x0 + 3x1 + 2x2 = 1",
            "5x0 + 6x1 + 7x2 = 8",
            "No unique solutions"]);
    })
    test("Should return a unique solution", () => {
        const matrix = [
            [1, 2, 3, 4],
            [4, 3, 2, 1],
            [-1, -2, -4, -6],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual([
        "Here are the equations being solved:",
        "x0 + 2x1 + 3x2 = 4",
        "4x0 + 3x1 + 2x2 = 1",
        "-x0 - 2x1 - 4x2 = -6",
        "Here are the solutions:", 
        "x0 = 0", 
        "x1 = -1", 
        "x2 = 2"]);
    })
    test("Should return a unique solution too", () => {
        const matrix = [
            [-1, 0, 0, 0, 1],
            [0, -2, 0, 0, 2],
            [0, 0, -1, 0, 6],
            [-2, 0, 0, -1, 12],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual([
        "Here are the equations being solved:",
        "-x0 = 1",
        "-2x1 = 2",
        "-x2 = 6",
        "-2x0 - x3 = 12",
        "Here are the solutions:",
        "x0 = -1",
        "x1 = -1",
        "x2 = -6",
        "x3 = -10"]);
    })
    test("Should return no unique solution", () => {
        const matrix = [
            [0, 0, 0, 4],
            [0, 0, 0, 1],
            [0, 0, 0, 8],
        ];
        const solution = parseEquations(matrix);
        expect(solution).toEqual([
            "Here are the equations being solved:",
                "0 = 4",
                "0 = 1",
                "0 = 8",
            "No unique solutions"]);
    })
})