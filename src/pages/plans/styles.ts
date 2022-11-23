import styled from "styled-components";

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.black.normal};
  display: flex;
  margin-right: 12px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.xxlg};
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;

export const SpanAux = styled.span`
  color: ${({ theme }) => theme.colors.blue.palete};
  display: flex;
  margin-right: 12px;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.md};
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 35px;
  }
`;

export const MainSpanContainer = styled.div`
  display: flex;
  align-items: center;
   flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const PlansContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    flex: 3;  
  }
`;
export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
   @media ${({ theme }) => theme.devices.tablet} {
    }
`;

export const SpacerContainer = styled.div`
  display: flex;
  flex-direction: row;
   padding-bottom: 2vh;
   place-self: self-end;
    padding-right: 5vw;
    @media ${({ theme }) => theme.devices.laptopL} {
      padding-right: 10vw;
    }
`;
export const OffCointainer = styled.div`
  display: flex;
   flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const OffSpan = styled.div`
background-color: ${({ theme }) => theme.colors.white.normal};
font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: ${({ theme }) => theme.fontSize.md2};
  justify-content: center;
  align-self: flex-end;
  margin-right: -0.1vw;
  border-radius: 25px;
  margin-bottom: 10px;
  align-items: center;
  padding-bottom: 1vh;
  padding-top: 1.5vh;
  margin-top: 10px;
  display: flex;
  width: 4.5vw;
  height: 1vh;
  @media ${({ theme }) => theme.devices.laptopL} {
    width: 6vw;
  }
`;
export const SwitchIcon = styled.img`
width: 30px;
 @media ${({ theme }) => theme.devices.tablet} {
  }
`;

export const SwitchIconCointainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const SwitchUnder = styled.div`
  display: flex;
  flex-direction: row;
  height: 5px;
  @media ${({ theme }) => theme.devices.tablet} {
  }
`;
export const SwitchUnderLeft = styled.div`
  display: flex;
    padding-bottom: 2vh;
     padding-right: 5vw;
    @media ${({ theme }) => theme.devices.laptopL} {
      padding-right: 10vw;
    }
`;
export const SwitchUnderRight = styled.div`
  display: flex;
    padding-bottom: 2vh;
    padding-left: 9.3vw;
     @media ${({ theme }) => theme.devices.laptopL} {
      padding-right: 10vw;
    }
`;