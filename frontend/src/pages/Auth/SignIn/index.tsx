import { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "../../../Components/ui/label";
import { Input } from "../../../Components/ui/input";
import { Button } from "../../../Components/ui/button";

export function SignIn() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { session } = useAuth();
	const navigate = useNavigate();

	function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();
		try {
			session({ email, password });
			navigate("/");
		} catch (error) {
			alert(e);
		}
	}

	return (
		<div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
						Bem vindo ao nosso <span className="text-[green]">TODO</span>
					</h2>
					<p className="mt-2 text-center text-sm text-muted-foreground">
						Faça login em seu usuário para poder iniciar
					</p>
				</div>
				<form className="space-y-6" action="#" method="POST">
					<div>
						<Label htmlFor="username" className="sr-only">
							Usuario
						</Label>
						<Input
							id="username"
							name="username"
							type="email"
							required
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
							className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Input
							id="password"
							name="password"
							type="password"
							required
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							className="relative block w-full appearance-none rounded-md border
        border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
        focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
						/>
					</div>
					<div>
						<Button
							type="submit"
							className="w-full"
							onChange={() => handleSubmit}
						>
							Iniciar sessão
						</Button>
					</div>
				</form>
				<div className="flex items-center justify-center">
					<div className="text-sm">
						Não possui uma conta?{" "}
						<Link
							to="/register"
							className="font-medium text-primary hover:text-primary/90"
						>
							Registre-se
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
