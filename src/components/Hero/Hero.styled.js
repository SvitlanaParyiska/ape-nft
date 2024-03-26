import styled from 'styled-components';

export const ContainerHero = styled.div`
  padding: 54px 8px 0 8px;

  @media (min-width: 768px) {
    padding: 54px 16px 0 16px;
  }

  @media (min-width: 1440px) {
    padding: 16px 16px 0 16px;
  }
`;

export const SectionHero = styled.section`
  /* padding-top: 36px; */
  padding-bottom: 19px;
  background-color: var(--color-accent);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    align-items: flex-start;
    height: 421px;
    position: relative;
  }
  @media (min-width: 1280px) {
    height: 677px;
  }
  @media (min-width: 1440px) {
    height: 720px;
  }

  h1 {
    text-align: center;
    font-weight: 400;
    line-height: 1.69;
    font-family: 'Biro Script Plus', sans-serif;
    color: var(--color-text-secondary);

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 1.65;
      text-align: left;
    }

    @media (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.67;
    }

    > span {
      text-align: center;
      font-weight: 900;
      font-size: 44px;
      line-height: 1;
      font-family: 'Right Grotesk', sans-serif;
      letter-spacing: 0.01em;
      @media (min-width: 768px) {
        font-size: 92px;
        text-align: justify;
        word-spacing: 130px;
      }
      @media (min-width: 1280px) {
        font-size: 164px;
        word-spacing: 215px;
      }
      @media (min-width: 1440px) {
        font-size: 188px;
        word-spacing: 240px;
      }
    }
  }
`;

export const TitleStyled = styled.h1`
  @media screen and (min-width: 1280px) {
    margin-left: 150px;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const ContainerBox = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 124px;
    padding-left: 72px;
    padding-right: 72px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 197px;
    padding-left: 115px;
    padding-right: 115px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 182px;
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export const ImageHero = styled.img`
  width: 216px;
  height: 284px;
  margin-top: 6px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 29px;
    left: calc((100% - 260px) / 2.25);
    width: 283px;
    height: 386px;
  }

  @media screen and (min-width: 1280px) {
    top: 59px;
    left: calc((100% - 450px) / 2.25);
    width: 463px;
    height: 612px;
  }

  @media screen and (min-width: 1440px) {
    top: 39px;
    left: calc((100% - 450px) / 2.25);
    width: 511px;
    height: 675px;
  }
`;

export const ButtonStyled = styled.a`

    position: absolute;
    bottom: -37px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.19;
    font-family: 'Right Grotesk', sans-serif;
    color: #1e1e1e;
    border: none;
    border-radius: 8px;
    padding: 10px 70px 12px 70px;
    width: 216px;
    height: 41px;
    backdrop-filter: blur(12px);
    background-color: rgba(30, 30, 30, 0.1);

    @media screen and (min-width: 768px) {
      border-radius: 12px;
      padding: 10px 61px 12px 61px;
      width: 190px;
      right: 72px;
      bottom: 35px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 28px;
      line-height: 1.21;
      right: 120px;
      bottom: 111px;
      width: 337px;
      height: 70px;
    }

    @media screen and (min-width: 1440px) {
      right: 112px;
      bottom: 81px;
    }

`;
export const TextHero = styled.p`
  width: 217px;
  text-align: center;
  margin-top: 49px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  font-family: 'Messina Sans Mono', sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: #1e1e1e;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-top: -20px;
    text-indent: 90px;
    width: 190px;
    text-align: justify;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
    text-indent: 80px;
    width: 337px;
  }
`;
