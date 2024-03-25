import styled from 'styled-components';

export const ContainerHero = styled.div`
  padding: 54px 8px 0 8px;
`;

export const SectionHero = styled.section`
  padding-top: 36px;
  padding-bottom: 19px;
  background-color: var(--color-accent);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    align-items: flex-start;
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
        word-spacing: 155px;
      }
      @media (min-width: 1280px) {
        font-size: 164px;
        word-spacing: 240px;
      }
    }
  }

  div {
    position: relative;
  }
`;

export const ContainerBox = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    max-width: 768px;
    padding-top: 124px;
    padding-left: 88px;
    padding-right: 88px;
  }
`;

export const ImageHero = styled.img`
  width: 216px;
  height: 284px;
  margin-top: 6px;
`;

export const ButtonStyled = styled.button`
  position: absolute;
  bottom: -37px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  font-family: inherit;
  color: #1e1e1e;
  border: none;
  border-radius: 8px;
  padding: 10px 70px 12px 70px;
  width: 216px;
  height: 41px;
  backdrop-filter: blur(12px);
  background-color: rgba(30, 30, 30, 0.1);
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
`;
