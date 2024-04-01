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
`;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  margin-top: 8px;
  fill: #fff;
`;

// export const ButtonClose = styled.button`
//   position: absolute;
//   border: none;
//   width: 24px;
//   height: 24px;
//   stroke: white;
//   top: 19px;
//   right: 20px;
//   background-color: transparent;
//   cursor: pointer;

//   @media screen and (min-width: 768px) {
//     top: 24px;
//     right: 32px;
//     width: 32px;
//     height: 32px;
//   }
// `;

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
