const {errFree} = require("../calculations/numbertheory/numbertheory");

const validMatrix = (req, next) => {
    const matrix = req.body;
    if (!Array.isArray(matrix)) {
        return ["Error: Not a matrix"];
    }
    try {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = parseFloat(matrix[i][j]);
                if(Number.isNaN(matrix[i][j])) {
                    return ["Error: One of the entries is not a number"];
                }
            }
        }
        return next();
    }
    catch (e) {
        return ["Input Error"];
    }
}

const validInteger = (req, next) => {
    try {
        const value = req.body[0];
        if(!errFree(value)) {
            if (value === "") {
                return ["error", "Please enter a value"];
            }
    
            return ["error", `${value} is not a positive integer`];
        }
    
        return next();
    }
    catch (e) {
        return ["Input Error"];
    }
}

module.exports = {
    validMatrix, 
    validInteger, 
}