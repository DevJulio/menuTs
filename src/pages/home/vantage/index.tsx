import React from "react";
import * as Styled from "./styles";
import cardProps from "./cardsProps";
import Homecard from "../../../components/homeCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Vantage: React.FC = () => {
  const width = window.screen.width;
  return (
    <>
      <Styled.MainVantageContainer>
        <Styled.VantageContainer>
          <Styled.MainSpanContainer>
            <Styled.VantageSpan>
              maaas.. então Porque usar meu menu?{" "}
            </Styled.VantageSpan>
          </Styled.MainSpanContainer>
          <Styled.CardsContainer>
            <Homecard {...cardProps[0]} />
            <Homecard {...cardProps[2]} />
            <Homecard {...cardProps[1]} />
          </Styled.CardsContainer>
          <Styled.CardsContainer style={{ flex: 2 }}>
            <Homecard {...cardProps[3]} />
            <Homecard {...cardProps[4]} />
          </Styled.CardsContainer>
        </Styled.VantageContainer>
        <Styled.VantageContainerMobile>
          <Carousel width={width} autoPlay={true} infiniteLoop={true} showArrows={true}>
            <Styled.CardsContainerMobile>
              <Homecard {...cardProps[0]} />
            </Styled.CardsContainerMobile>
            <Styled.CardsContainerMobile>
              <Homecard {...cardProps[2]} />
            </Styled.CardsContainerMobile>
            <Styled.CardsContainerMobile>
              <Homecard {...cardProps[1]} />
            </Styled.CardsContainerMobile>
            <Styled.CardsContainerMobile>
              <Homecard {...cardProps[3]} />
            </Styled.CardsContainerMobile>
            <Styled.CardsContainerMobile>
              <Homecard {...cardProps[4]} />
            </Styled.CardsContainerMobile>
          </Carousel>
        </Styled.VantageContainerMobile>
      </Styled.MainVantageContainer>
    </>
  );
};

export default Vantage;
