import React from "react";
import Body from "@components/body/body";
import Header from "@components/header/header";

const Template = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

export default Template;
