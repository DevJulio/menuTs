import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  flex: 2;
   background-color: ${({ theme }) => theme.colors.blue.palete};
`;

export const MainContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  background-color: ${({ theme }) => theme.colors.blue.palete};
  flex: 1;
  padding-left: 10.5vh;
`;
export const MainSpanContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;

export const TextSpan = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  display: flex;
  width: 78%;
  padding-top: 2vh;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.md};
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;

export const MainContainerRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding-top: 1vh;
`;
export const Spacer = styled.div`
width: 3vw;
height: 16px;
border-radius: 25px;
`;


export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow.palete};
  display: flex;
  padding-top: 10vh;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xxxlg};
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;

export const ImgContainer = styled.div`
 background-color: ${({ theme }) => theme.colors.white.normal};
width: 90%;
height: 95%;
border-radius: 25px;
`
export const TitleImgAuxSpan = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-top: 1vh;
  padding-left: 2vw;
  width: 30vw;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;
export const TitleImgSpan = styled.span`
  color: ${({ theme }) => theme.colors.red.normal};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.md2};
  padding-top: 2vh;
  padding-left: 2vw;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;
export const ImgAndTextContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex: 2;
`

export const ImgAndTextContainerRight = styled.div`
display: flex;
flex-direction: column;
width: 100%;
flex: 1;
`
export const ImgAndTextContainerLeft = styled.div`
display: flex;
flex-direction: column;
width: 100%;
flex: 1;
`
export const Img = styled.img`
display: flex;
width: 60%;
padding-left: 2vw;
`
