const API_ROOT = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';

const routes = {
    cofactor: `${API_ROOT}/cofactor`,
    determinant: `${API_ROOT}/determinant`,
    inverse: `${API_ROOT}/inverse`,
    solveEquations: `${API_ROOT}/solveEquations`,
    transpose: `${API_ROOT}/transpose`,
    multiplyMatrices: `${API_ROOT}/multiplyMatrices`,
    numberTheory: `${API_ROOT}/numberTheory`,
}

export default routes; 