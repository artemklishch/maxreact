import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodosProvider from './store/todos-context'

ReactDOM.render(<TodosProvider><App /></TodosProvider>, document.getElementById("root"));
