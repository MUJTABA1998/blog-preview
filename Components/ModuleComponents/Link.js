import React from "react";

const LinkTag = ({ link }) => {
  return (
    <div className="w-full h-[50px] flex justify-start items-center gap-3">
      <img src="/images/link.png" alt="link" className="w-5 h-5" />
      <a
        href={`http://${link}`}
        target="_blank"
        rel="noreferrer"
        className="text-[#74b9ff] font-main tracking-wider italic"
      >
        {link}
      </a>
    </div>
  );
};

export default LinkTag;
