/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const TiltChipLinkExample = () => {
  return (
    <div className="grid place-content-center bg-zinc-100 px-4 py-12">
      <TiltChipLink />

    </div>
  )
}

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
      <a
        href="#"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-zinc-900 
        bg-white p-0.5 text-sm transition-tranform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#9b69f1] px-2 py-0.5 font-medium text-white">
          HEY!
        </span>
        <span className="ml-1.5 mr-1 inline-block">
          Soheil is Here!
        </span>
        <FiArrowUpRight className="mr-2 inline-block" />
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TiltChipLinkExample />
    </div>
  );
}

export default App;
