import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useState<User | null>(null);
	const api = useApi();

	useEffect(() => {
		const validateToken = async () => {
			const token = localStorage.getItem('token')

			if (token) {
				const data = await api.validateToken(token)

				if (data) {
					setUser(data);
				}
			}
		}

		validateToken()
	}, [api])

	const login = async (email: string, password: string) => {
		const data = await api.login(email, password);

		if (data.user && data.token) {
			setUser(data.user);
			setToken(data.token);

			return true;
		}

		return false;
	};

	const logout = async () => {
		await api.logout();

		setUser(null);
	};

	const setToken = (token: string) => {
		localStorage.setItem("token", token);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
