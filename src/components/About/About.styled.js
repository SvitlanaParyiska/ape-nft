import styled from 'styled-components';

export const SectionAbout = styled.section`
  padding-top: 60px;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    position: relative;
    height: 628px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 144px;
    height: 1004px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
    height: 1140px;
  }
`;

export const BoxStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    max-width: 216px;
    font-weight: 900;
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;

    @media screen and (min-width: 768px) {
      font-size: 60px;
      max-width: 269px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 120px;
      max-width: 538px;
    }
  }

  p {
    margin-top: 16px;
    max-width: 216px;
    line-height: 1.19;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
    text-align: right;
    text-indent: 120px;

    @media screen and (min-width: 768px) {
      margin-top: 5px;
      max-width: 269px;
      text-indent: 0;

      > span {
        display: inline-block;
        max-width: 150px;
      }
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.21;
      max-width: 409px;
    }
  }
`;

export const StyledSpan = styled.span`
  @media screen and (max-width: 767px) {
    display: inline-block;
    max-width: 150px;
  }

  span {
    color: var(--color-accent);
  }
`;
export const TextBox = styled.div`
  margin-top: 36px;
  width: 216px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 269px;
    margin-top: 68px;
  }

  @media screen and (min-width: 1280px) {
    width: 417px;
    margin-top: 56px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 149px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
    text-align: center;

    @media screen and (min-width: 768px) {
      margin-top: 24px;
      font-size: 16px;
      line-height: 1.19;
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.21;
    }
  }
`;

export const AboutUsImg = styled.img`
  width: 216px;
  height: 292px;

  @media screen and (min-width: 768px) {
    width: 313px;
    height: 422px;
    position: absolute;
    top: 205px;
    left: 50%;
  }

  @media screen and (min-width: 1280px) {
    top: 342px;
    width: 492px;
    height: 662px;
  }

  @media screen and (min-width: 1440px) {
    top: 318px;
    width: 610px;
    height: 822px;
  }
`;
