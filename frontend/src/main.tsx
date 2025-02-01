import { StrictMode } from "react";
import { AuthProvider } from "./Hooks/useAuth";
import { Router } from "./routes";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider>
			<Router />
		</AuthProvider>
	</StrictMode>,
);
