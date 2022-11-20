import React from "react";
import * as Styled from "./styles";
import { TCardProps } from "./card";

const Homecard: React.FC<TCardProps> = ({
  icon,
  title,
  text,
  mainColor,
  auxColor,
  textColor,
}) => {
  return (
    <>
      <Styled.Container style={{ backgroundColor: mainColor }}>
        <Styled.Title style={{ color: auxColor }}>{title}</Styled.Title>
        <Styled.LogoImg src={icon} alt="icone" />
        <Styled.Paragraph style={{ color: textColor ? textColor : "#fff" }}>
          {text}
        </Styled.Paragraph>
      </Styled.Container>
    </>
  );
};

export default Homecard;
