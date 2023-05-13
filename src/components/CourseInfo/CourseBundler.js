import React from "react";

import HelloWorld from "./HelloWorld";

import convertToId from "../../functions/convertToId";

const CourseBundler = ({ title }) => {
  const id = convertToId(title);

  switch (id) {
    case "конструкторы_инициализаторы_и_деконструкторы":
      return <HelloWorld title={title}></HelloWorld>;
    default:
      return <HelloWorld title={title}></HelloWorld>;
  }
};

export default CourseBundler;
