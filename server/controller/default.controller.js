const {getCofactor} = require("../calculations/cofactor/cofactor");
const {getDeterminant} = require("../calculations/determinant/determinant");
const {getInverse} = require("../calculations/inverse/inverse");
const {multiplyMatrices} = require("../calculations/matrixmultiplication/matrixmultiplication");
const {solveEquations} = require("../calculations/systemsofequations/systemsofequations");
const {getTranspose} = require("../calculations/transpose/transpose");

module.exports = {
    getCofactor,
    getDeterminant,
    getInverse,
    multiplyMatrices,
    solveEquations,
    getTranspose,
};

