import React from "react";

import HelloWorld from "./HelloWorld";

import convertToId from "../../functions/convertToId";

const CourseBundler = ({ title }) => {
  const id = convertToId(title);

  switch (id) {
    case "hello_world":
      return <HelloWorld></HelloWorld>;
    default:
      return <div>Not yet created</div>;
  }
};

export default CourseBundler;
