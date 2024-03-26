import styled from 'styled-components';

export const MindSection = styled.section`
  padding-top: 80px;

  > h2 {
    text-align: center;
    font-weight: 900;
    font-size: 44px;
    line-height: 1;
    text-transform: uppercase;
  }

  > ul {
    margin-top: 40px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 1440px) {
      gap: 48px;
    }
  }
`;

export const CardStyled = styled.li`
  border-radius: 16px;
  padding: 24px;
  width: 284px;
  height: 242px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    width: 128px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
    margin-left: auto;

    @media screen and (min-width: 1280px) {
      width: 256px;
      line-height: 1.21;
      font-size: 24px;
    }
  }

  > h3 {
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 1280px) {
      font-size: 64px;
    }
  }

  @media screen and (min-width: 1280px) {
    border-radius: 24px;
    width: 504px;
    height: 480px;
  }
  @media screen and (min-width: 1440px) {
    border-radius: 24px;
    width: 560px;
    height: 480px;
  }
`;

export const CardStyledRed = styled.li`
  a {
    color: inherit;
    border-radius: 16px;
    padding: 24px;
    width: 284px;
    height: 242px;
    background-color: #dc3b5a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > svg {
      display: block;
      margin-left: auto;
      width: 48px;
      height: 48px;
    }
    > h3 {
      font-weight: 900;
      font-size: 32px;
      line-height: 1;
      text-transform: uppercase;
    }

    @media screen and (min-width: 1280px) {
      border-radius: 24px;
      width: 504px;
      height: 480px;
      > svg {
        width: 64px;
        height: 64px;
      }
      > h3 {
        font-size: 64px;
      }
    }
    @media screen and (min-width: 1440px) {
      width: 560px;
      height: 480px;
    }
  }
`;
