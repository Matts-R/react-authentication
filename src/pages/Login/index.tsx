import { useState, useContext, FormEvent } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	async function handleLogin(event: FormEvent) {
		if (!email && !password) return;

		const isLogged = await auth.login(email, password);
		if (isLogged) {
			// navigate(from, {replace: true });
		} else {
			console.log("ola");
		}
	}

	return (
		<div>
			<h2>Página de Login</h2>

			<input
				type="text"
				name="email"
				placeholder="Informe o seu e-mail"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<input
				type="text"
				name="password"
				placeholder="Informe a sua senha"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>

			<button onClick={handleLogin}>Logar</button>
		</div>
	);
};
