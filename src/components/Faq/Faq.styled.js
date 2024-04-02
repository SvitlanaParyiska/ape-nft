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
      width: 100%;
      display: flex;
      padding: 8px;
      border-radius: 12px;
      transition: var(--transition);
      justify-content: flex-start;

      @media screen and (min-width: 768px) {
        border-radius: 16px;
        padding: 18px;
        display: flex;
        gap: 18px;
      }

      @media screen and (min-width: 1280px) {
        border-radius: 24px;
        padding: 24px;
        gap: 24px;
      }

      &:hover,
      &:focus {
        background-color: #1e1e1e;
        h3 {
          color: #dc3b5a;
        }
        p {
          display: block;
        }
        span {
          color: #fff;
        }

        img {
          visibility: visible;
          transform: rotate(-16deg);
        }
      }

      span {
        font-family: 'Biro Script Plus', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.67;
        color: #dc3b5a;
        margin-right: 4px;
        min-width: 26px;
        transition: var(--transition);

        @media screen and (min-width: 768px) {
          font-size: 16px;
          line-height: 1.69;
          min-width: 34px;
        }

        @media screen and (min-width: 1280px) {
          font-size: 24px;
          line-height: 1.67;
          min-width: 47px;
        }
      }
    }
  }
`;

export const StyledImage = styled.img`
  border-radius: 26px;
  overflow: hidden;
  display: none;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    display: block;
    visibility: hidden;
    flex-basis: 148px;
    min-width: 148px;
    height: 183px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 248px;
    min-width: 248px;
    height: 306px;
  }
`;

export const TitleFaqStyled = styled.h3`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const TextQaqStyled = styled.p`
  margin-top: 10px;
  font-family: 'Messina Sans Mono', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  display: none;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
    margin-top: 36px;
  }
`;

export const FaqBox = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;
