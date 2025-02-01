import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/auth.js";
import { prisma } from "../lib/prisma.js";

class todoController {
	async create(req, res) {
		const authHeader = req.headers.authorization;
		const token = authHeader?.split(" ")[1];

		if (!token) {
			res.status(401).json({ error: "Token inválido" });
			return;
		}

		try {
			const { text, state } = req.body;
			const decoded = jwt.verify(token, jwtConfig.secret);
			await prisma.todo.create({
				data: {
					text,
					state,
					userId: decoded.id,
				},
			});
			res.status(200).json({
				"sucesso!": "Todo list criado",
			});
		} catch (error) {
			console.log(error);
		}
	}

	async delete(req, res) {
		const { idTodo } = req.body;

		try {
			await prisma.todo.delete({
				where: {
					id: idTodo,
				},
			});
			res.status(200).json({
				"sucesso!": "Todo list deletado",
			});
		} catch (error) {
			console.log("Error:", error);
			res.status(500).json({ message: "Erro ao deletar o todo" });
		}
	}

	async edit(req, res) {
		const { idTodo } = req.body;
		try {
			await prisma.todo.updateMany({
				where: {
					id: {
						contains: idTodo,
					},
				},
				data: {
					state: !state,
				},
			});
			res.status(200).json({ message: "Tarefa editada com sucesso" });
		} catch (error) {
			res.status(500).json({ error: "Erro ao editar a tarefa" });
		}
	}
}

export { todoController };
