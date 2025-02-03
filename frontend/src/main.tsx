import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./routes";
import "./index.css";
import { AuthProvider } from "./Hooks/useAuth";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</Provider>
	</StrictMode>,
);
