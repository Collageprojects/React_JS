import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between py-4 px-8 shadow-md shadow-white-100 ">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4 justify-end">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/About"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-blue-700" : ""
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md hover:bg-blue-400  font-semibold"
          >
            Sign In
          </button>
          <SignIn
            header={<div className="text-xl font-bold">SignIn</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-blue-500"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              placeholder="UserName"
              className="grow rounded border border-gray-600 px-2 py-4"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-4"
              type="password"
            />
          </SignIn>
        </li>
      </ul>
    </header>
  );
}
