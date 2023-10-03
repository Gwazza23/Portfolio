import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Util/AllRoutes";

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;
