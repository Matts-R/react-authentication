import { useContext } from "react";
import { useLocation, Navigate, Route, RouteProps } from "react-router";
import { AuthContext } from "../contexts/Auth/AuthContext";

export default function PrivateRoute(_routeProps: RouteProps) {
	const auth = useContext(AuthContext);
	const location = useLocation();
  console.log(location);
  
	return auth.user ? (
		<Route {..._routeProps} />
	) : (
		<Navigate to="/login" state={{ location }} replace={true} />
	);
}
