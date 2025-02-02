import { Link } from "react-router-dom";
import { ArrowRightFromLine } from "lucide-react";
import { BookMarked } from "lucide-react";
import { useAuth } from "../../Hooks/useAuth";

export function Header() {
	const { loggout } = useAuth();

	return (
		<>
			<header className="bg-custom-dark w-full h-[3.5rem] bg-[#0D0D0D]">
				<div className="mx-auto w-[90%] h-[3.5rem] flex justify-between items-center">
					<Link to="/" className="h-9 w-9 flex items-center">
						<BookMarked size={35} color={"#fff"} />
						<p className="absolute px-9 py-[.5rem] font-sans font-[500] text-xl  text-[#fff]">
							<span className="text-[#22C55E]">Notes</span>
						</p>
					</Link>
					<div className="flex gap-4 py-[.4rem]">
						<button type="button" className="cursor-pointer" onClick={loggout}>
							<ArrowRightFromLine color={"#fff"} />
						</button>
					</div>
				</div>
				<hr className="bg-[#22C55E] h-[.1rem] " />
			</header>
		</>
	);
}
