import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FirebaseProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</FirebaseProvider>
	</React.StrictMode>
);
