const {getCofactor} = require("../calculations/cofactor/cofactor");
const {getDeterminant} = require("../calculations/determinant/determinant");
const {getInverse} = require("../calculations/inverse/inverse");
const {multiplyMatrices} = require("../calculations/matrixmultiplication/matrixmultiplication");
const {solveEquations} = require("../calculations/systemsofequations/systemsofequations");
const {getTranspose} = require("../calculations/transpose/transpose");
const {prime_factorization, solution, lower_primes, units, errFree} = require("../calculations/numbertheory/numbertheory");

const numberTheory = (value) => {

    if(!errFree(value)) {
        if (value === "") {
            return ["error", "Please enter a value"];
        }

        return ["error", `${value} is not a positive integer`];
    }
    
    return [
        prime_factorization(value),
        solution(value),
        lower_primes(value),
        units(value)
    ];
}

module.exports = {
    getCofactor,
    getDeterminant,
    getInverse,
    multiplyMatrices,
    solveEquations,
    getTranspose,
    numberTheory,
};

