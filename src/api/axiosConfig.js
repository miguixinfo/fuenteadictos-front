import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
})

api.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            return Promise.reject(new Error("No se puede conectar con el servidor. Por favor, inténtalo más tarde."));
        } else if (error.response.status === 500) {
            return Promise.reject(new Error("Ha habido un problema con el servidor. Por favor, inténtalo más tarde."));
        }
        return Promise.reject(error);
    }
);
export default api;