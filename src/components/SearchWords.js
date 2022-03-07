import React, { useEffect } from "react";

export default function SearchWords({ kata, starts, ends, contains }) {
  const obj = require("../word.json");
  const [wordList, setWordList] = React.useState([]);

  useEffect(() => {
    if (starts !== "" && kata === "" && ends === "" && contains === "")
      setWordList(displayWordStartsWith(starts, obj.words));
    else if (starts === "" && kata !== "" && ends === "" && contains === "")
      setWordList(displayWordsKata(kata, obj.words));
    else if (starts === "" && kata === "" && ends !== "" && contains === "")
      setWordList(displayWordEndsWith(ends, obj.words));
    else if (starts === "" && kata === "" && ends === "" && contains !== "")
      setWordList(displayWordContains(contains, obj.words));
    else if (starts !== "" && kata === "" && ends !== "" && contains !== "") {
      let newArr = displayWordStartsWith(starts, obj.words);
      newArr = displayWordEndsWith(ends, newArr);
      setWordList(displayWordContains(contains, newArr));
    } else if (starts === "" && kata === "" && ends !== "" && contains !== "") {
      let newArr = displayWordEndsWith(ends, obj.words);
      setWordList(displayWordContains(contains, newArr));
    } else if (starts !== "" && kata !== "" && ends !== "" && contains !== "") {
      let newArr = displayWordsKata(kata, obj.words);
      newArr = displayWordStartsWith(starts, newArr);
      newArr = displayWordEndsWith(ends, newArr);
      newArr = displayWordContains(contains, newArr);
      setWordList(newArr);
    } else if (starts !== "" && kata !== "" && ends !== "" && contains === "") {
      let newArr = displayWordsKata(kata, obj.words);
      newArr = displayWordStartsWith(starts, newArr);
      newArr = displayWordEndsWith(ends, newArr);
      setWordList(newArr);
    } else {
      let newArr = displayWordsKata(kata, obj.words);
      setWordList(newArr);
    }
  }, [starts, kata, ends, contains]);

  const displayWordsKata = (kata, arr) => {
    const chars = Array.from(kata.toLowerCase());
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === "?") chars[i] = "[a-z]";
    }

    const re = new RegExp(chars.join(""), "gi");
    let newArr = arr.filter((word) => word.match(re));
    // console.log(newArr);
    return newArr;
  };

  const displayWordStartsWith = (letter, arr) => {
    let newArr = arr.filter((word) => word.startsWith(letter.toLowerCase()));
    return newArr;
  };

  const displayWordEndsWith = (letter, arr) => {
    let newArr = arr.filter((word) => word.endsWith(letter.toLowerCase()));
    return newArr;
  };

  const displayWordContains = (pattern, arr) => {
    let chars = Array.from(pattern.toLowerCase());
    let regex = new RegExp(chars.join(""), "gi");
    // console.log(regex);
    let newArr = arr.filter((word) => word.match(regex));
    // console.log(newArr);
    return newArr;
  };

  const displayWordStartsEndsWith = (starts, ends, arr) => {
    let newArr = arr.filter((word) => word.startsWith(starts.toLowerCase()));
    newArr = newArr.filter((word) => word.endsWith(ends.toLowerCase()));
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
