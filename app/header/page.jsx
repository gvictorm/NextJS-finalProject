import React from "react";
import Background from "../background/page";

export default function Header() {
  return (
    <div>
      <header>
        <Background />
        <div className="flex flex-col items-center justify-center ">
          <div className="relative mx-auto  my-56">
            <div className="text-white font-serif p-5">
              <ul className=" lg:text- text-9xl text-white">
                {/* <!-- using animation on header --> */}
                <li>
                  <h1>The</h1>
                </li>
                <li>
                  <h1>Puerto Rico</h1>
                </li>
                <li>
                  <h1>Library</h1>
                </li>
              </ul>
              <p className="px-3 py-3 italic items-center ">
                An Archipelago of Knowledge
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
