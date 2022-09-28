import React from "react";

const Heading = ({ content, level }) => {
  if (level === 1) return <h1 className="w-full max-w-2xl mb-0">{content}</h1>;
  if (level === 2) return <h2 className="w-full max-w-2xl mb-0">{content}</h2>;
  if (level === 3) return <h3 className="mb-0">{content}</h3>;
  if (level === 4) return <h4 className="mb-0">{content}</h4>;
};

export default Heading;
