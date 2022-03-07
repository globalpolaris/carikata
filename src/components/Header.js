import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center">
      <h1 className="font-bold p-5 text-xl">Carikatla</h1>
      <div className="p-5">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </header>
  );
}
