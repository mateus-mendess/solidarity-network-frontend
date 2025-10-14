import axios from "axios";
import api from "../api/api";

export async function login(email: string, password: string) {
    try{
        const response = await api.post(
          "/auth/login",
          {
            email,
            password,
          },
          {
            headers: { Authorization: undefined },
          }
        );

        const token = response.data.token;
        localStorage.setItem("token", token);

        return response.data;
    } catch(error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Erro de login: ", error.response?.data || error.message);
        }
        throw error;
    }
}