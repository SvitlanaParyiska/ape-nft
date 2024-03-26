import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
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
`;

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    border-radius: 8px;
    padding: 10px;
    width: 48px;
    height: 48px;
    backdrop-filter: blur(12px);
    background-color: rgba(30, 30, 30, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    color: #1e1e1e;
  }
`;
