import "./App.css";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
