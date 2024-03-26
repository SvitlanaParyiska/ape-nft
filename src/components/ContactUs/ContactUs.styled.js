import styled from 'styled-components';

export const ContactUsSection = styled.section`
  padding-top: 60px;

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 44px;
    line-height: 0.91;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 80px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 160px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;
