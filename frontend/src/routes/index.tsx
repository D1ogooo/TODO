import { useState, useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { BrowserRouter } from "react-router-dom";

export function Router() {
	const { user } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUser = () => {
			setLoading(false);
		};
		checkUser();
	}, []);

	if (loading) {
		return;
	}

	return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
