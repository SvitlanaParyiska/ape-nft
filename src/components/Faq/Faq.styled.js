import styled from 'styled-components';

export const FaqSection = styled.section`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }

  h2 {
    margin-bottom: 24px;
    text-align: center;
    font-weight: 900;
    font-size: 44px;
    line-height: 0.91;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
      font-size: 80px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 80px;
      font-size: 160px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    li {
      width: 216px;
    }
  }

  h3 {
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    text-transform: uppercase;
    width: 169px;

    > span {
      font-family: 'Biro Script Plus', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.67;
      color: #dc3b5a;
      margin-right: 4px;
    }
  }

  p {
    margin-top: 10px;
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;
  }
`;
