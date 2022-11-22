import React from "react";
import * as Styled from "./styles";

interface Props {
  color: string;
  customWidth?: string;
}
const Spacer: React.FC<Props> = ({ color, customWidth }) => {
  return (
    <>
      <Styled.Spacer
        style={{
          backgroundColor: color,
          width: customWidth ? customWidth : "3vw",
        }}
      />
    </>
  );
};

export default Spacer;
