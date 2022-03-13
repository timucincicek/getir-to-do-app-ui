//First code file executed
import ReactDOM from "react-dom";
//usually this css injection in js doesnt work but npm start handles it
import "./index.css";
import App from "./App";
//Telling ReactDOM that we render component app in the place (Id root fetched from index.html)
//Do this for once only for root
ReactDOM.render(<App />, document.getElementById("root"));
