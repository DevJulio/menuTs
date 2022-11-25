import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BorderPage from "../../components/borderPage";
import { theme } from "../../theme/theme";
import Switch from "react-switch";
import Spacer from "../../components/spacer";
import mensal from "../../assets/icons/mensal.png";
import anual from "../../assets/icons/anual.png";
import isMobile from "is-mobile";

const Plans: React.FC = () => {
  const [checked, setCheked] = useState(false);

  useEffect(() => {
    setCheked(true);
    setCheked(false);
  }, []);

  const plans = (
    <>
      <Styled.MainSpanContainer>
        <Styled.Span>E ai? pronto para começar?</Styled.Span>
        <Styled.SpacerContainer>
          {/* <Spacer customWidth="9.5vw" color={theme.colors.red.normal} /> */}
        </Styled.SpacerContainer>
        <Styled.SpanAux>
          Escolha o plano que mais se encaixe para seu estabelecimento e bolso!
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
          <Styled.SpanAux style={{ marginLeft: "0.5vw" }}>Anual</Styled.SpanAux>
        </Styled.SwitchContainer>

        <Styled.SwitchUnder>
          <Styled.SwitchUnderLeft
            style={{
              display: checked ? "none" : "flex",
            }}
          >
            <Spacer
              customHeight="5px"
              customWidth={isMobile() ? "19.8vw" : "3.8vw"}
              color={theme.colors.blue.palete}
            />
          </Styled.SwitchUnderLeft>

          <Styled.SwitchUnderRight
            style={{
              display: !checked ? "none" : "flex",
            }}
          >
            <Spacer
              customHeight="5px"
              customWidth={isMobile() ? "19.8vw" : "3.8vw"}
              color={theme.colors.blue.palete}
            />
          </Styled.SwitchUnderRight>
        </Styled.SwitchUnder>
      </Styled.OffCointainer>

      <Styled.PlansContainer>
        <Styled.PlanCard>kkkkkk</Styled.PlanCard>
        <Styled.PlanCard>kkkjj</Styled.PlanCard>
        <Styled.PlanCard>kkkkk </Styled.PlanCard>
      </Styled.PlansContainer>
    </>
  );

  return (
    <>
      <BorderPage
        outsideColor={theme.colors.blue.palete}
        insideColor={theme.colors.yellow.palete}
        destop={<>{plans}</>}
        mobile={<>{plans} </>}
      />
    </>
  );
};

export default Plans;
