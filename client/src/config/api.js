const API_ROOT = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';

const routes = {
    cofactor: `${API_ROOT}/cofactor`,
    transpose: `${API_ROOT}/transpose`,
    numberTheory: `${API_ROOT}/numberTheory`,
}

export default routes; 