import React, { useState } from "react";
import * as Styled from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BorderPage from "../../components/borderPage";
import { theme } from "../../theme/theme";
import Switch from "react-switch";
import Spacer from "../../components/spacer";
import mensal from "../../assets/icons/mensal.png";
import anual from "../../assets/icons/anual.png";

const Plans: React.FC = () => {
  const [checked, setCheked] = useState(false);

  return (
    <>
      <BorderPage
        outsideColor={theme.colors.blue.palete}
        insideColor={theme.colors.yellow.palete}
        destop={
          <>
            <Styled.MainSpanContainer>
              <Styled.Span>E ai? pronto para começar?</Styled.Span>
              <Styled.SpacerContainer>
                <Spacer customWidth="9.5vw" color={theme.colors.red.normal} />
              </Styled.SpacerContainer>
              <Styled.SpanAux>
                Escolha o plano que mais se encaixe para seu estabelecimento e
                bolso!
              </Styled.SpanAux>
            </Styled.MainSpanContainer>

            <Styled.OffCointainer>
              <Styled.OffSpan> 20% off</Styled.OffSpan>

              <Styled.SwitchContainer>
                <Styled.SpanAux>Mensal</Styled.SpanAux>
                <Switch
                  uncheckedIcon={
                    <Styled.SwitchIconCointainer>
                      <Styled.SwitchIcon alt="mensal" src={mensal} />
                    </Styled.SwitchIconCointainer>
                  }
                  checkedIcon={
                    <Styled.SwitchIconCointainer>
                      <Styled.SwitchIcon
                        alt="anual"
                        src={anual}
                        style={{ paddingTop: "0.3vh" }}
                      />
                    </Styled.SwitchIconCointainer>
                  }
                  height={35}
                  width={90}
                  offColor={theme.colors.green.normal}
                  onColor={theme.colors.green.normal}
                  onChange={setCheked}
                  checked={checked}
                />
                <Styled.SpanAux style={{ marginLeft: "0.5vw" }}>
                  Anual
                </Styled.SpanAux>
              </Styled.SwitchContainer>
            </Styled.OffCointainer>

            <Styled.PlansContainer></Styled.PlansContainer>
          </>
        }
        mobile={
          <>
            <Styled.Span>Conheça os planos </Styled.Span>
          </>
        }
      />
    </>
  );
};

export default Plans;
