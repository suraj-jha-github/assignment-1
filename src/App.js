import "./App.css";
import Create from "./Create";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
