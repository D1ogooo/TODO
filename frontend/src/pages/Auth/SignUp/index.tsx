import { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../Components/ui/input";
import { Button } from "../../../Components/ui/button";

export function SignUp() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const { register } = useAuth();
	const navigate = useNavigate();

	function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();

		if (password.length !== confirmPassword.length) {
			return alert("As senhas não coincidem");
		}

		register({ name, email, password })
			.then(() => {
				navigate("/");
			})
			.catch((e) => {
				alert(e);
			});
	}

	return (
		<div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
						Bem vindo ao nosso <span className="text-[green]">TODO</span>
					</h2>
					<p className="mt-2 text-center text-sm text-muted-foreground">
						Registre-se agora mesmo
					</p>
				</div>
				<form className="space-y-6" action="#" method="POST">
					<div>
						<Input
							id="username"
							name="username"
							type="text" // user
							required
							placeholder="Usuário"
							onChange={(e) => setName(e.target.value)}
							className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Input
							id="username"
							name="username"
							type="email" // email
							required
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
							className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Input
							id="username"
							name="username"
							type="Password" // password
							required
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Input
							id="password"
							name="password"
							type="password"
							required
							placeholder="Confirme sua senha"
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="relative block w-full appearance-none rounded-md border
        border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
        focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Button type="submit" className="w-full" onClick={handleSubmit}>
							Registrar-se
						</Button>
					</div>
				</form>
				<div className="flex items-center justify-center">
					<div className="text-sm">
						Já possui uma conta?{" "}
						<Link
							to="/"
							className="font-medium text-primary hover:text-primary/90"
						>
							Faça login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
