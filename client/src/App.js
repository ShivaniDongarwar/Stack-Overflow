import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";

import AllRouter from "./components/AllRouter/AllRouter";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <AllRouter />
      </Router>
    </div>
  );
}

export default App;
