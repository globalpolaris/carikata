import React from "react";
import { useLocation } from "react-router-dom";
import MiniForm from "../components/MiniForm";
import SearchWords from "../components/SearchWords";

const obj = require("../word.json");
export default function Result() {
  const [wordList, setWordList] = React.useState(obj.words);

  const location = useLocation();
  const { kata, starts, ends, contains } = location.state;
  return (
    <div className="flex flex-col items-center">
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
