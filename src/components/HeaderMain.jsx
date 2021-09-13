import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function HeaderMain() {
  return (
    <div className="bg-gray-100 ">
      <nav className="flex justify-between items-center py-6 max-w-screen-xl mx-auto">
        <div className="px-2">
          <Logo />
        </div>
        <div className="flex">
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              Living Room
            </a>
          </div>
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              Dining Room
            </a>
          </div>
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              BedRoom
            </a>
          </div>
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              Office
            </a>
          </div>
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              Lighting
            </a>
          </div>
          <div>
            <a className="mx-2 uppercase text-sm" href="/">
              Sale
            </a>
          </div>
        </div>
        <div className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </nav>
    </div>
  );
}
