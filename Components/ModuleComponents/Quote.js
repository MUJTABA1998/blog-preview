import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Quote = ({ content }) => {
  return (
    <div className="w-full h-auto max-w-2xl py-2 mb-4 text-left">
      <p className="inline-flex ">
        <span className="mr-1 text-sm">
          <RiDoubleQuotesL />
        </span>{" "}
        {content.data.text.replace("<br>", "")}{" "}
        <span className="ml-1 text-sm">
          <RiDoubleQuotesR />
        </span>
      </p>
      <p className="mt-2 ml-3 text-sm text-[#74b9ff] italic ">
        Quote {content.data.caption.replace("<br>", "")}
      </p>
    </div>
  );
};

export default Quote;
