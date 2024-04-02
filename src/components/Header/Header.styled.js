import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 62px 16px 0 16px;

  @media (min-width: 768px) {
    padding: 66px 28px 0 28px;
  }

  @media (min-width: 1440px) {
    padding: 40px 40px 0 40px;
  }
`;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  margin-top: 8px;
  display: ${props => (props.$visible ? 'none' : '')};
  fill: ${props => props.color};

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const LinkHeaderStyled = styled.a`
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background-color: ${props => props.$bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  font-family: 'Messina Sans Mono', sans-serif;
  color: ${props => props.color};

  svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.color};

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    width: 80px;
    height: 80px;
  }
`;
