import axios from "axios";
import { User } from "../types/User";

const api = axios.create({
	baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
	validateToken: async (token: string): Promise<User> => {
    const response = await api.post("validate", { token });
    
    return response.data
	},
	login: async (email: string, password: string) => {
		const response = await api.post("/login", { email, password });

		return response.data;
	},
	logout: async (): Promise<void> => {
		await api.post("/logout");

	},
});
