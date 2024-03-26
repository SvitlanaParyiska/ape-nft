import styled from 'styled-components';

export const ArtsSection = styled.section`
  padding-top: 60px;
  padding-left: 72px;

  max-width: 480px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-top: 80px;
    padding-left: 88px;
    padding-right: 88px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-top: 120px;
    padding-left: 124px;
    padding-right: 124px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 136px;
    padding-right: 136px;
  }

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 44px;
    line-height: 0.91;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 80px;
      line-height: 1;
      margin-bottom: 40px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 160px;
      margin-bottom: 80px;
    }
  }
`;

export const StyledImage = styled.img`
  width: 216px;
  height: 256px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 336px;
    border-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 280px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 320px;
    border-radius: 24px;
  }
`;
