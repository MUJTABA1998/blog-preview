import React from "react";

const List = ({ item }) => {
  return <li>{item.replace("<br>", " ")}</li>;
};

export default List;
