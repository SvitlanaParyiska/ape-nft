import styled from 'styled-components';

export const RunStringStyled = styled.div`
  height: 52px;
  background-color: #dc3b5a;
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;

  div {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 32s linear infinite;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 6px 0px 8px 0px;
    animation: marquee 32s linear infinite;

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    p {
      font-family: 'Right Grotesk', sans-serif;
      font-weight: 900;
      font-size: 36px;
      line-height: 1;
      text-transform: uppercase;
      color: #fff;
    }

    @media screen and (min-width: 1280px) {
      padding: 6px 0px 16px 0px;
      p {
        font-size: 64px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    height: 86px;
  }
`;
