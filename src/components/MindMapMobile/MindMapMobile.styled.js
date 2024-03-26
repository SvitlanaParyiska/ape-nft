import styled from 'styled-components';
export const SectionStyled = styled.section`
  padding-top: 60px;
  padding-left: 72px;

  max-width: 480px;
  margin: 0 auto;

  > h2 {
    margin-bottom: 24px;
    font-weight: 900;
    font-size: 44px;
    line-height: 0.91;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const CardStyled = styled.div`
  max-width: 216px;
  height: 242px;
  border-radius: 12px;
  padding: 24px 12px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
  }
  > h3 {
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardStyledRed = styled.div`
  > a {
    color: inherit;
    max-width: 216px;
    height: 242px;
    border-radius: 12px;
    padding: 24px 12px;
    background-color: #dc3b5a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > svg {
      display: block;
      margin-left: auto;
    }
    > h3 {
      font-weight: 900;
      font-size: 32px;
      line-height: 1;
      text-transform: uppercase;
    }
  }
`;
