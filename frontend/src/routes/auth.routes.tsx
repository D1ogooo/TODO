import { Routes, Route } from "react-router-dom";
import { Pagina404 } from "../pages/pagina404";
import { SignIn } from "../pages/Auth/SignIn";
import { SignUp } from "../pages/Auth/SignUp";

export function AuthRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="*" element={<Pagina404 />} />
			</Routes>
		</>
	);
}
