import React from "react";

const obj = require("../word.json");

export default function AllWords() {
  const [wordList, setWordList] = React.useState(obj.words);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const displayWordStartsWith = (letter) => {
    let newArr = obj.words.filter((word) => word.startsWith(letter));
    setWordList(newArr);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-lg my-5">Kata-Kata</h1>
      <div className="flex flex-row justify-center my-3 flex-wrap">
        {alphabet.map(function (alphabet, i) {
          return (
            <button
              onClick={() => {
                displayWordStartsWith(alphabet);
                setActiveIndex(i);
              }}
              className={
                i === activeIndex
                  ? "text-red-800 font-bold p-1 m-1 underline underline-offset-4"
                  : "p-1 m-1"
              }
              key={alphabet}
            >
              {alphabet}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 justify-items-center my-5">
        {wordList.slice(0, 100).map((word) => {
          return <p key={word}>{word}</p>;
        })}
        {activeIndex === -1 ? (
          <em className="col-span-3 my-5">Menampilkan 100 kata pertama</em>
        ) : null}
      </div>
    </div>
  );
}
