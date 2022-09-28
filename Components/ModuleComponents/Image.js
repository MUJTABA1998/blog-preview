import React from "react";

const Image = ({ content }) => {
  return (
    <img
      src={content.data.url}
      alt={content.data.id}
      className="object-contain  w-[320px] sm:w-[450px] md:w-[672px] h-[200px] md:h-[400px]"
    />
  );
};

export default Image;
