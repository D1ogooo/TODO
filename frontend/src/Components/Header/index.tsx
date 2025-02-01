import { Link } from "react-router-dom";
import { ArrowRightFromLine } from "lucide-react";
import { BookMarked } from "lucide-react";

export function Header() {
	return (
		<>
			<header className="bg-custom-dark w-full h-[3.5rem]">
				<div className="mx-auto w-[90%] h-[3.5rem] flex justify-between items-center">
					<Link to="/" className="h-9 w-9 flex">
						<BookMarked size={35} color="#000" />
						<p className="absolute px-9 py-[.5rem] font-sans font-[500] text-xl text-[#fff]">
							<span style={{ color: "#22C55E" }}>Notes</span>
						</p>
					</Link>
					<div className="flex gap-4 py-[.4rem]">
						<button type="button" className="cursor-pointer">
							<ArrowRightFromLine />
						</button>
					</div>
				</div>
				<hr className="bg-[#22C55E] h-[.1rem] " />
			</header>
		</>
	);
}
