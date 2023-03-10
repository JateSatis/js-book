import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { LessonsContext } from "../../App";

const setCodeTheme = (theme) => {
  return theme === "light" ? atomOneLight : atomOneDark;
};

export const Title = ({ children }) => {
  return <h1 className="lesson_title">{children}</h1>;
};

export const Code = ({ children }) => {
  const { theme } = useContext(LessonsContext);

  return (
    <div className="code">
      <SyntaxHighlighter
        language="html"
        style={setCodeTheme(theme)}
        customStyle={{
          overflowX: "visible",
          background: "none",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const Header = ({ children }) => {
  return <h1 className="chapter_header">{children}</h1>;
};

export const Text = ({ children }) => {
  return <p className="text">{children}</p>;
};

export const CodeSpan = ({ children }) => {
  return <span className="code_span">{children}</span>;
};

export const Outline = ({ children }) => {
  return <div className="outline">{children}</div>;
};

export const Header6 = ({ info, aware, children }) => {
  let indicator;
  if (info) indicator = <span>🔍 </span>;
  if (aware) indicator = <span>⚠️ </span>;

  return (
    <div className="header6">
      {indicator}
      <h6 style={{ display: "inline" }}>{children}</h6>
    </div>
  );
};

export const List = ({ children }) => {
  return <ul className="list">{children}</ul>;
};
