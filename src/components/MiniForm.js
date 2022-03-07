import React from "react";
import { Link } from "react-router-dom";

export default function MiniForm(props) {
  const data = props.props;

  const [kata, setKata] = React.useState(data.kata);
  const [starts, setStarts] = React.useState(data.starts);
  const [submitted, setSubmitted] = React.useState(true);
  const [ends, setEnds] = React.useState(data.ends);
  const [contains, setContains] = React.useState(data.contains);

  const updateField = (event) => {
    const re = /^[A-Za-z?]+$/;
    if (re.test(event.target.value) || event.target.value === "")
      setKata(event.target.value);
  };

  const onChange = (event) => {
    const re = /^[A-Za-z]+$/;
    if (re.test(event.target.value) || event.target.value === "") {
      if (event.target.name === "starts") setStarts(event.target.value);
      if (event.target.name === "ends") setEnds(event.target.value);
      if (event.target.name === "contains") setContains(event.target.value);
    }
  };
  return (
    <div className="flex flex-col m-8 p-5 justify-start border max-h-fit rounded-md">
      <label className="px-1">Kata:</label>
      <input
        name="kata"
        value={kata}
        type="text"
        className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600 my-2"
        onChange={(event) => updateField(event)}
      ></input>
      <label className="px-1">Starts with:</label>
      <input
        name="starts"
        value={starts}
        type="text"
        className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600 my-2"
        onChange={(event) => onChange(event)}
      ></input>
      <label className="px-1">Ends with:</label>
      <input
        name="ends"
        value={ends}
        type="text"
        className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600 my-2"
        onChange={(event) => onChange(event)}
      ></input>
      <label className="px-1">Contains:</label>
      <input
        name="contains"
        value={contains}
        type="text"
        className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600 my-2"
        onChange={(event) => onChange(event)}
      ></input>
      <Link
        to={window.location.pathname}
        state={{
          kata: kata,
          starts: starts,
          ends: ends,
          contains: contains,
        }}
      >
        <button className="text-white min-w-full bg-red-500 p-2 rounded-md hover:bg-red-600 my-3">
          Cari
        </button>
      </Link>
    </div>
  );
}
