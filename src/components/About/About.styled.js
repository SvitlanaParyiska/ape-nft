import styled from 'styled-components';

export const SectionAbout = styled.section`
  padding-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h2 {
    max-width: 216px;
    font-weight: 900;
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;

    span {
      color: var(--color-accent);
    }
  }

  > p {
    margin-top: 16px;
    max-width: 216px;
    line-height: 1.19;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
    text-align: right;
  }
`;

export const TextBox = styled.div`
  margin-top: 36px;
  width: 216px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 16px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const AboutUsImg = styled.img``;
