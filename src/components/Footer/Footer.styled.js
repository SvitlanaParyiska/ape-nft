import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding-top: 60px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media (min-width: 1280px) {
    padding-top: 120px;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;

    @media (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;
