import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Pagina404 } from "../pages/pagina404";

export function AppRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route path="*" element={<Pagina404 />} />
			</Routes>
		</>
	);
}
