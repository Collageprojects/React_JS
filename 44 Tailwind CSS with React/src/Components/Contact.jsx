import React, { useState } from "react";
import SignIn from "./SignIn";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text-xl font-semibold">This is a contact</h1>
      <button onClick={() => setIsOpen(true)} className="bg-gray-200 rounded px-4 py-2 ">Pop-Up</button>
      <SignIn
        header={
          <h1 className="font-semibold text-xl text-red-500">Wel-Come</h1>
        }
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-gray-300 px-2.5 py-1"
            >
              OK
            </button>
          </div>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          possimus quia sapiente laboriosam assumenda, harum porro dicta debitis
          corporis, sequi quos modi doloribus molestiae excepturi?
        </p>
      </SignIn>
    </>
  );
}
