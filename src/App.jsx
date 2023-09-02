// import { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";

import "./App.css";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-white text-6xl text-center my-10 ">
				Password Generator
			</h1>
			<PasswordGenerator />
		</>
	);
}

export default App;
