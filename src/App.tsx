import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Login } from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Navbar />
			<hr />
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/about"
					element={
						<RequireAuth>
							<About />
						</RequireAuth>
					}
				></Route>
				<PrivateRoute path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
