import "./App.css";
import List from "./components/List";
import "./App.css";
import Carts from "./components/context/CartsContext.jsx";

function App() {
	return (
		<div className="app">
			<Carts>
				<div className="left-content">
					<List />
				</div>
				<div className="right-content"></div>
			</Carts>
		</div>
	);
}

export default App;
