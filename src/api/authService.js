import api from "./axiosConfig";

export const login = async (username, password) => {
    try {
        const data = new URLSearchParams();
        data.append("username", username);
        data.append("password", password);

        const response = await api.post("/auth/login", data);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.detail || "Error al iniciar sesión";
        throw new Error(errorMessage)
    }
}

export const register = async (email, username, password) => {
    try {
        const response = await api.post("/auth/register", { email, username, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}