import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [kata, setKata] = React.useState("");
  const [starts, setStarts] = React.useState("");
  const [submitted, setSubmitted] = React.useState(true);
  const [ends, setEnds] = React.useState("");
  const [contains, setContains] = React.useState("");
  const re = /^[A-Za-z?]+$/;

  const updateField = (event) => {
    if (re.test(event.target.value) || event.target.value === "")
      setKata(event.target.value);
  };

  const onChange = (event) => {
    if (re.test(event.target.value) || event.target.value === "") {
      if (event.target.name === "starts") setStarts(event.target.value);
      if (event.target.name === "ends") setEnds(event.target.value);
      if (event.target.name === "contains") setContains(event.target.value);
    }
  };

  const handleSubmit = () => {
    console.log(kata, starts, ends, contains);
  };

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="kata" className="p-2">
          Kata (5 karakter)
        </label>
        <input
          name="kata"
          type="text"
          className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
          placeholder="R?M?H"
          value={kata}
          onChange={(event) => updateField(event)}
        ></input>
      </div>
      <div className="flex flex-col lg:flex-row lg:place-content-evenly my-5">
        <div className="flex flex-col">
          <label htmlFor="starts" className="p-2">
            Starts With
          </label>
          <input
            name="starts"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="R"
            value={starts}
            onChange={(event) => onChange(event)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="ends" className="p-2">
            Ends With
          </label>
          <input
            name="ends"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="H"
            value={ends}
            onChange={(event) => onChange(event)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="contains" className="p-2">
            Contains
          </label>
          <input
            name="contains"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="UMA"
            value={contains}
            onChange={(event) => onChange(event)}
          ></input>
        </div>
      </div>
      <Link
        to="/result"
        state={{
          kata: kata,
          starts: starts,
          ends: ends,
          contains: contains,
          submitted: submitted,
        }}
      >
        <button className="text-white min-w-full bg-red-500 p-2 rounded-md hover:bg-red-600 my-3">
          Cari
        </button>
      </Link>
    </div>
  );
}
