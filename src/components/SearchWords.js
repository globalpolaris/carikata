import React, { useEffect } from "react";

export default function SearchWords({ kata, starts, ends, contains }) {
  const obj = require("../word.json");
  const [wordList, setWordList] = React.useState([]);
  const [toDisplay, setToDisplay] = React.useState(500);

  useEffect(() => {
    if (starts !== "" && kata === "" && ends === "" && contains === "")
      setWordList(displayWordStartsWith(starts, obj.words));
    else if (starts === "" && kata === "" && ends !== "" && contains === "")
      setWordList(displayWordEndsWith(ends, obj.words));
    else if (starts === "" && kata === "" && ends === "" && contains !== "")
      setWordList(displayWordContains(contains, obj.words));
    else if (starts !== "" && kata === "" && ends !== "" && contains !== "") {
      let newArr = displayWordStartsWith(starts, obj.words);
      newArr = displayWordEndsWith(ends, newArr);
      setWordList(displayWordContains(contains, newArr));
    } else if (starts !== "" && kata === "" && ends !== "" && contains === "")
      setWordList(displayWordStartsEndsWith(starts, ends, obj.words));
    else if (starts === "" && kata === "" && ends !== "" && contains !== "") {
      let newArr = displayWordEndsWith(ends, obj.words);
      setWordList(displayWordContains(contains, newArr));
    }
  }, [starts, kata, ends, contains]);

  const displayWordStartsWith = (letter, arr) => {
    let newArr = arr.filter((word) => word.startsWith(letter));
    return newArr;
  };

  const displayWordEndsWith = (letter, arr) => {
    let newArr = arr.filter((word) => word.endsWith(letter));
    return newArr;
  };

  const displayWordContains = (pattern, arr) => {
    let chars = Array.from(pattern);
    let regex = new RegExp(chars.join(""), "gi");
    console.log(regex);
    let newArr = arr.filter((word) => word.match(regex));
    console.log(newArr);
    return newArr;
  };

  const displayWordStartsEndsWith = (starts, ends, arr) => {
    let newArr = arr.filter((word) => word.startsWith(starts));
    newArr = newArr.filter((word) => word.endsWith(ends));
    return newArr;
  };

  return (
    <div>
      <div className="flex flex-row justify-center my-3 flex-wrap"></div>
      <div className="grid grid-cols-4 justify-items-center my-5">
        {wordList.length === 0
          ? "Tidak ditemukan"
          : wordList.map((word) => {
              return <p key={word}>{word}</p>;
            })}
      </div>
    </div>
  );
}
