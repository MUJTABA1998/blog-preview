import React from "react";

const Paragraph = ({ content }) => {
  return <p className="">{content.replace("<br>", "")}</p>;
};

export default Paragraph;
