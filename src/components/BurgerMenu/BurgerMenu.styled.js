import styled from 'styled-components';

export const BurgerListStyled = styled.ul`
  display: flex;
  gap: 0;

  :first-child {
    border-radius: 12px 0 0 12px;
  }

  :last-child {
    border-radius: 0 12px 12px 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    backdrop-filter: blur(12px);
    background-color: ${props => props.$bgcolor};
    cursor: pointer;

    @media screen and (min-width: 1280px) {
      width: 80px;
      height: 80px;
    }
  }

  a {
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.1875;
    text-transform: uppercase;
    color: ${props => props.color};

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  button {
    border: none;
    background-color: transparent;
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.1875;
    text-transform: uppercase;
    color: ${props => props.color};
    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }
`;
