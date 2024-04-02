import styled from 'styled-components';

export const ContactUsSection = styled.section`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 24px;
    text-align: center;
    font-weight: 900;
    font-size: 44px;
    line-height: 0.91;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
      font-size: 80px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 80px;
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

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }

  svg {
    width: 36px;
    height: 36px;
  }

  p {
    font-family: 'Messina Sans Mono', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;
    text-transform: uppercase;
    text-align: center;
    width: 216px;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
      width: 397px;
      margin-bottom: 24px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.21;
      width: 581px;
      margin-bottom: 40px;
    }
  }
`;
