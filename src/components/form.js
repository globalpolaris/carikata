import React from "react";

export default function Form() {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="kata" className="p-2">
          Kata
        </label>
        <input
          id="kata"
          type="text"
          className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
          placeholder="R?M?H"
        ></input>
      </div>
      <div className="flex flex-col lg:flex-row lg:place-content-evenly my-5">
        <div className="flex flex-col">
          <label htmlFor="starts" className="p-2">
            Starts With
          </label>
          <input
            id="starts"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="R"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="ends" className="p-2">
            Ends With
          </label>
          <input
            id="ends"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="H"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="contains" className="p-2">
            Contains
          </label>
          <input
            id="contains"
            type="text"
            className="rounded-md p-2 border-slate-400 border outline-none focus:border-slate-600"
            placeholder="UMA"
          ></input>
        </div>
      </div>
      <button className="text-white min-w-full bg-red-500 p-2 rounded-md hover:bg-red-600 my-3">Cari</button>
    </div>
  );
}
