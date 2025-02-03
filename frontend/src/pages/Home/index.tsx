import { NotebookPen, OctagonX, SquarePlus } from "lucide-react";
import { Button } from "../../Components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../Components/ui/card";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../Components/ui/select";
import { Badge } from "../../Components/ui/badge";

const data = [
	{
		text: "Bom dia galerinha",
		state: "Do youtoubre <3",
	},
];

export function Home() {
	return (
		<div className="w-full flex items-center justify-center ">
			<div className="flex justify-center items-center h-screen">
				<Card className="w-[35.875rem] h-[40rem] flex flex-col">
					<CardHeader className="flex items-center">
						<CardTitle className="text-[20px] font-serif">
							Create notes
						</CardTitle>
					</CardHeader>

					<CardContent className="flex-1">
						<form className="w-full h-auto">
							<div className="grid w-full items-center gap-4 flex-col rounded-sm">
								<Label htmlFor="name" className="font-bold">
									Qual a sua anotação para hoje?
								</Label>
								<div className="flex w-[100%] gap-2">
									<Input
										id="name"
										placeholder="Adicionar uma nova tarefa"
										className="border"
									/>
									<Button className="w-[8rem] font-bold">
										Criar
										<SquarePlus />
									</Button>
								</div>
								<section className="flex flex-col h-[20rem] gap-2 overflow-y-auto p-2 ">
									{/* <div className="flex w-full gap-1">
										<Badge className="w-full">Bom dia</Badge>
										<section className="flex gap-1">
											<Button type="button" variant="default">
												<NotebookPen />
											</Button>
											<Button type="button" variant="destructive">
												<OctagonX />
											</Button>
										</section>
									</div> */}
								</section>
							</div>
						</form>
					</CardContent>

					<CardFooter className="flex justify-between mt-auto">
						<Button variant="outline">Cancel</Button>
						<Button>Deploy</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
