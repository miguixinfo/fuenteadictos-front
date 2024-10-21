import api from "./axiosConfig";

export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
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