import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
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
