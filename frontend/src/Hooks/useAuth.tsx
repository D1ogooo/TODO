import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import type {
	AuthProviderType,
	AuthData,
	LoginType,
	RegisterType,
	ContextType,
} from "../@types/types";
import { api } from "../service/api";
import type { AxiosError } from "axios";

const AuthContext = createContext({} as ContextType);

function AuthProvider({ children }: AuthProviderType) {
	const [data, setData] = useState<AuthData>({});

	useEffect(() => {
		const user = localStorage.getItem("@TODO:user");
		const token = localStorage.getItem("@TODO:token");

		if (user && token) {
			api.defaults.headers.authorization = `Bearer ${token}`;
			setData({ user: JSON.parse(user), token });
		}
	}, []);

	async function session({ email, password }: LoginType) {
		try {
			const res = await api.post("/users/session", { email, password });
			const { user, token } = res.data;

			localStorage.setItem("@TODO:user", JSON.stringify(user));
			localStorage.setItem("@TODO:token", token);

			api.defaults.headers.authorization = `Bearer ${token}`;
			setData({ user, token });
			window.location.reload();
		} catch (error) {
			const axiosError = error as AxiosError;
			const errorMessage =
				axiosError.response?.data &&
				typeof axiosError.response.data === "object" &&
				"error" in axiosError.response.data
					? (axiosError.response.data as { error: string }).error
					: "Erro desconhecido";
			return alert(errorMessage);
		}
	}

	async function register({ name, email, password }: RegisterType) {
		try {
			await api.post("/users/create", { name, email, password });
		} catch (error) {
			console.log(error);
		}
	}

	async function loggout() {
		localStorage.removeItem("@TODO:user");
		localStorage.removeItem("@TODO:token");
		api.defaults.headers.authorization = "";
		setData({});
	}

	return (
		<AuthContext.Provider
			value={{
				user: data.user,
				session,
				register,
				loggout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

export { AuthProvider, useAuth };
