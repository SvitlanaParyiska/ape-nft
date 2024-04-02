import styled from 'styled-components';

export const BoxMobileStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: #181818;
  padding-top: 109px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  p {
    width: 216px;
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }
`;

export const BoxIndexStyled = styled.div`
  position: absolute;
  z-index: 120;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
`;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  margin-top: 8px;
  fill: #fff;
`;

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  justify-content: center;

  li {
    display: block;
    border: 1px solid transparent;
    border-radius: 16px;
    padding: 10px;
    transition: border-color var(--transition);

    &:hover,
    &:focus {
      border: 1px solid #fff;
    }
  }

  a {
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.20833;
    border: 1px solid transparent;

    color: #fff;
  }
`;

export const BurgerMenuNavLinkStyled = styled.a`
  font-family: 'Messina Sans Mono', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.20833;
  border: 1px solid transparent;
  transition: border-color var(--transition);

  &:hover,
  &:focus {
    border: 1px solid #fff;
  }
`;
