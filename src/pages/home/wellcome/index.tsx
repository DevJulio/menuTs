import React from "react";
import { theme } from "../../../theme/theme";
import * as Styled from "./styles";
import hamb from "../../../assets/banners/hamb.png";

const Wellcome: React.FC = () => {
  return (
    <>
      <Styled.MainContainer>
        <Styled.MainContainerLeft>
          <Styled.MainSpanContainer>
            <Styled.TitleSpan>Conheça o meu menu!</Styled.TitleSpan>
          </Styled.MainSpanContainer>
          <Styled.Spacer style={{ backgroundColor: theme.colors.red.normal }} />
          <Styled.TextSpan>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            accusamus in voluptates provident totam sapiente corrupti aliquam
            id, voluptatum eum labore nulla, quam explicabo, culpa iusto!
            Doloribus, temporibus facere. Officiis.
          </Styled.TextSpan>
          <Styled.ImgAndTextContainer>
            <Styled.ImgAndTextContainerLeft>
              <Styled.TextSpan style={{ width: "95%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusamus in voluptates provident totam sapiente corrupti
                aliquam id, voluptatum eum labore nulla, quam explicabo, culpa
                iusto! Doloribus, temporibus facere. Officiis.
              </Styled.TextSpan>
              <Styled.TextSpan style={{ width: "95%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusamus in voluptates provident totam sapiente corrupti
                aliquam id, voluptatum eum labore nulla, quam explicabo, culpa
                iusto! Doloribus, temporibus facere. Officiis.
              </Styled.TextSpan>
            </Styled.ImgAndTextContainerLeft>
            <Styled.ImgAndTextContainerRight>
              <Styled.Img src={hamb} />
            </Styled.ImgAndTextContainerRight>
          </Styled.ImgAndTextContainer>
        </Styled.MainContainerLeft>
        <Styled.MainContainerRight>
          <Styled.ImgContainer>
            <Styled.Spacer
              style={{
                backgroundColor: theme.colors.yellow.palete,
                marginLeft: "2vw",
                marginTop: "2vh",
              }}
            />
            <Styled.TitleImgSpan>Sua vitrine digital</Styled.TitleImgSpan>
            <Styled.TitleImgAuxSpan>
              A mudança visual e radical de como seus clientes te veem
            </Styled.TitleImgAuxSpan>
            vá além do obvio *foto com transparência do card especial* *dê mais
            informações para seus clientes* ou use só o básico Centralize sas
            redes sociais e contatos *foto de icones de redes sociais até
            spotify* *Responsividade *personalização *notifique seus clientes
            *Vá além das 4 paredes. use fora do estabelecimento, mostre onde
            você está. calendário de eventos
          </Styled.ImgContainer>
        </Styled.MainContainerRight>
      </Styled.MainContainer>
    </>
  );
};

export default Wellcome;
