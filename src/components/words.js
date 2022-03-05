import React from "react";
import { list } from "postcss";

const obj = require("../word.json");

export default function Words() {
  const [wordList, setWordList] = React.useState(obj.words);
  const [toDisplay, setToDisplay] = React.useState(500);
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <h1 className="col-span-3 font-bold text-lg my-5">Kata-Kata</h1>
      {wordList.slice(0, toDisplay).map((word) => {
        return <p key={word}>{word}</p>;
      })}
    </div>
  );
}
