import "./App.css";
import Form from "./components/form";
import Words from "./components/words";

function App() {
  return (
    <div className="App max-w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">Carikata</h1>
      <div className="w-8/12 xl:w-6/12">
        <Form />
        <Words />
      </div>
    </div>
  );
}

export default App;
