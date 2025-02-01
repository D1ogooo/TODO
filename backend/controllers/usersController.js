import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { jwtConfig } from "../config/auth.js";
import { prisma } from "../lib/prisma.js";
import "dotenv/config";

class usersController {
	async singIn(req, res) {
		try {
			const { email, password } = req.body;

			const userExists = await prisma.User.findUnique({
				where: { email },
			});

			if (!userExists) {
				res.status(401).json({ error: "Email inválido" });
				return;
			}

			const verifyPassword = await bcrypt.compare(
				password,
				userExists.password,
			);
			if (!verifyPassword) {
				res.status(401).json({ error: "Senha inválida" });
				return;
			}

			const token = jwt.sign({ id: userExists.id }, jwtConfig.secret, {
				expiresIn: jwtConfig.expiresIn,
			});

			const user = await prisma.User.findUnique({
				where: { id: userExists.id },
				select: {
					name: true,
				},
			});

			res.status(200).json({ token, user });
		} catch (error) {}
	}

	async singUp(req, res) {
		try {
			const { name, email, password } = req.body;

			const userExists = await prisma.User.findUnique({
				where: { email },
			});

			if (userExists) {
				res.status(401).json({ error: "Email já cadastrado" });
				return;
			}

			const passwordEncrypt = await bcrypt.hash(password, 8);

			await prisma.User.create({
				data: { name, email, password: passwordEncrypt },
			});

			res.status(201).json({ message: "Conta criada com sucesso" });
		} catch (error) {
			console.log(error);
		}
	}
}

export { usersController };
