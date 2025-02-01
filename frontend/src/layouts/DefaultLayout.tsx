import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";

export const DefaultLayout = () => {
	return (
		<>
			<div>
				<Header />
				<Outlet />
			</div>
		</>
	);
};
