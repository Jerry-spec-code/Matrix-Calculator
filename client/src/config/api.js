const API_ROOT = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';

const routes = {
    cofactor: `${API_ROOT}/cofactor`,
    determinant: `${API_ROOT}/determinant`,
    inverse: `${API_ROOT}/inverse`,
    transpose: `${API_ROOT}/transpose`,
    numberTheory: `${API_ROOT}/numberTheory`,
}

export default routes; 