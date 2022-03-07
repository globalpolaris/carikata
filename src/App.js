import "./App.css";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
