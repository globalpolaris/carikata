import { useLocation } from "react-router-dom";
import MiniForm from "../components/MiniForm";
import SearchWords from "../components/SearchWords";

export default function Result() {
  const location = useLocation();
  const { kata, starts, ends, contains } = location.state;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl my-5 font-bold">Hasil</h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <MiniForm props={location.state} />
        <div className="min-w-full">
          <SearchWords
            kata={kata.toLowerCase()}
            starts={starts.toLowerCase()}
            ends={ends.toLowerCase()}
            contains={contains.toLowerCase()}
          />
        </div>
      </div>
    </div>
  );
}
